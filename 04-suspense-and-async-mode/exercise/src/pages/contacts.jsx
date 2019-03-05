import React, {Suspense} from 'react';
import {unstable_createResource as createResource} from 'react-cache';

const ImageResource = createResource(src => new Promise(resolve => {
  // Creates an image object and resolves a promise once the image loads
  const img = new Image();
  img.onload = () => resolve();
  img.src = src;
}));

const Img = ({src, alt, ...props}) => {
  // if no image with given source is found in the resource (cache), this line will throw a promise:
  ImageResource.read(src);

  // And this line will have to wait until that promise resolves:
  return <img src={src} alt={alt} {...props} />;
};

const Contacts = () => {

  return (
    <div>
      <Suspense fallback={<div>Loading the image...</div>}>
        <Img src="https://media.globalchampionsleague.com/cache/750x429/assets/17_prague_2018.jpg" alt="Prague image" />
      </Suspense>
    </div>
  );
};

export default Contacts;
