import React from 'react';
import './kitties.css';

import Spinner from '../components/spinner';

// Exercise 2
//
// Here is the standard way of fetching the API for the cat images and then
// displaying them, while the spinner is shown until the image is downloaded
//
// Your tasks is to rewrite this so that it uses Suspense and react-cache:
// import {unstable_createResource as createResource} from 'react-cache';
// to achieve the same functionality

const KittyImage = ({src}) => (
  <img src={src} alt="random kitty" />
);

export default class Kitties extends React.Component {
  state = {
    isLoading: false,
    url: ''
  }

  componentDidMount = () => {
    this._fetchNewKitty();
  };

  _fetchNewKitty = async() => {
    this.setState({
      isLoading: true
    });
    const response = await fetch('https://api.thecatapi.com/v1/images/search');
    const [result] = await response.json();
    const img = new Image();
    const src = await new Promise(resolve => {
      img.onload = () => resolve(result.url);
      img.src = result.url;
    });
    this.setState({
      isLoading: false,
      url: src
    });
  }

  _handleButtonClick = () => {
    this._fetchNewKitty();
  }

  render = () => {
    const {isLoading, url} = this.state;

    if (isLoading) {
      return <Spinner>Loading the kitty...</Spinner>
    }

    return (
      <div className="kitties">
        <button onClick={this._handleButtonClick}>Show Another Kitty</button>
        {isLoading
          ? <Spinner>Loading the kitty...</Spinner>
          : <KittyImage src={url} />
        }
      </div>
    );
  }
}
