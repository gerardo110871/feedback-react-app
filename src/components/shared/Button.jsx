import React from 'react'
import PropTypes from 'prop-types'

function Button({children, version, type, isDisabled}) {
  return (
    <button type={type} disabled={isDisabled}
    className={`btn btn-${version}`} >
        {children}
    </button>
  )
}

Button.defaultProps = {
    version: 'primary',
    type: 'button',
    isDisabled: false
}
/*
this sets the default values for the props being received
*/

Button.propTypes = {
    children: PropTypes.node.isRequired,
    version: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool,
}

export default Button