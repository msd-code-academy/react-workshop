import React, {Suspense} from 'react';
import {unstable_createResource as createResource} from 'react-cache';
import './kitties.css';

import Spinner from '../components/spinner';

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

const KittyImage = ({ID}) => {
  const url = catApiResource.read(ID);
  return <img src={url} alt="random kitty" />;
};

export default class Kitties extends React.Component {
  state = {
    catID: 0
  }

  _handleButtonClick = () => {
    this.setState({
      catID: Math.random()
    });
  }

  render = () => {
    const {catID} = this.state;
    return (
      <div className="kitties">
        <button onClick={this._handleButtonClick}>Show Another Kitty</button>
        <Suspense fallback={<Spinner>Loading the kitty...</Spinner>}>
          <KittyImage ID={catID} />
        </Suspense>
      </div>
    );
  }
}
