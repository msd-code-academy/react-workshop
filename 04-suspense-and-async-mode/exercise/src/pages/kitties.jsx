import React, {Suspense} from 'react';
import {unstable_createResource as createResource} from 'react-cache';

const catApiResource = createResource(async() => {
  const response = await fetch('https://api.thecatapi.com/v1/images/search');
  const [result] = await response.json();
  const img = new Image();
  const src = await new Promise(resolve => {
    img.onload = () => resolve(result.url);
    img.src = result.url;
  });
  return src;
});

const Kitties = () => {
  const url = catApiResource.read();
  return (
    <Suspense fallback={<div>Loading the kitty...</div>}>
      <img src={url} alt="randomKitty" />
    </Suspense>
  );
};

export default Kitties;
