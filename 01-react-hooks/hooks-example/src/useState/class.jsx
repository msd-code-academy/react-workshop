import React from 'react';

export class MyStatus extends React.Component {
  state = {
    myStatus: 'cool'
  }
  switchMyStatus = () => {
    const {myStatus} = this.state;
    this.setState({myStatus: (myStatus === 'cool') ? 'awesome' : 'cool'});
  }
  render = () => (
    <div>
      <p>I am {this.state.myStatus}</p>
      <button onClick={this.switchMyStatus}>Click me</button>
    </div>
  );
}

export const MyStatusHook = () => {
  // @TODO for superman and batman
};
