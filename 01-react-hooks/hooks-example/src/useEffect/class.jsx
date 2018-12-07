import React from 'react';

export class MyMouse extends React.Component {
  state = {
    x: 0,
    y: 0
  }

  componentDidMount() {
    window.addEventListener('mousemove', this.onMouseMove);
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.onMouseMove);
  }

  onMouseMove = event => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render = () => {
    const {x, y} = this.state;
    return (
      <div>My mouse x position is {x} and y position is {y}</div>
    );
  }
}

// @TODO useEffect, mount and unmount vs. update, un/bk
// export const MyMouseHook = () => {
// };
