import React from 'react'
import PropTypes from 'prop-types'

const Button = props => {
  const {
    disabled,
    onClick,
    children,
    containerClasses,
    light,
    fullWidth,
    ...rest
  } = props

  return (
    <button
      className={`button ${fullWidth ? 'button__fullWidth' : ''}
        ${light ? 'button__light' : ''}
        ${containerClasses || ''}
      `}
      type="button"
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      <p>{children}</p>
    </button>
  )
}

Button.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  light: PropTypes.bool,
  fullWidth: PropTypes.bool,
  containerClasses: PropTypes.string,
}

Button.defaultProps = {
  disabled: false,
  onClick: e => console.log(e.target.innerText),
  containerClasses: '',
  light: false,
  fullWidth: false,
}

export default Button
