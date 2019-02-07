import React from 'react'
import './lib.scss'

export const Button = ({className = '', children}) => <button className={`lib-button ${className}`}>{children}</button>
