import React, { ReactNode } from 'react';

type State = {
  data: object | undefined
  loading: boolean
}

type Props<TData = any> = {
  url: string
  children: (api: {
    data?: TData
    loading: boolean | null
  }) => ReactNode
}

class Fetcher<TData = any> extends React.Component<Props<TData>, State> {
  state = {
    data: undefined,
    loading: false,
  };

  componentDidMount() {
    this.setState({ loading: true });

    fetch(this.props.url)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      .then(data => this.setState({ data, loading: false }))
      .catch(error => this.setState({ loading: false }));
  }

  render() {
    return this.props.children(this.state);
  }
}

export default Fetcher;
