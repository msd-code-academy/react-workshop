import React from 'react';
import PropTypes from 'prop-types';
import './spinner.css';

const Spinner = ({children}) => (
  <>
    <div className="spinner" />
    {children}
  </>
);

Spinner.propTypes = {
  children: PropTypes.node
};

Spinner.defaultProps = {
  children: null
};

export default Spinner;
