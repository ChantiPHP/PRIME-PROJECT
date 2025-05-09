import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  text,
  onClick,
  className,
  variant = 'primary',  // 'primary' is the default
  size = 'medium',     // 'medium' is the default
  disabled = false,    // Default to false
  type = 'button',     // Default button type
  ariaLabel = '',      // For accessibility
  icon = null,         // Optional icon
  as = 'button',       // Render as a 'button' or 'a' tag (default is 'button')
  href = '',           // Only used if 'as' is 'a'
}) => {
  // Determine class names based on the variant and size
  const baseStyles = 'px-6 py-2 text-white rounded-lg transition-colors font-semibold'; // Added font weight for better visibility
  const variantStyles = {
    primary: 'bg-blue-600 hover:bg-blue-700',
    outline: 'bg-transparent text-black border-2 border-blue-600 text-blue-600 hover:bg-blue-100',
  };
  const sizeStyles = {
    small: 'px-4 py-1 text-sm',
    medium: 'px-6 py-2 text-base',
    large: 'px-8 py-3 text-lg',
  };

  // Combining all styles
  const buttonClassNames = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;

  if (as === 'a') {
    return (
      <a
        href={href}
        className={buttonClassNames}
        aria-label={ariaLabel}  // Helps screen readers
      >
        {icon && <span className="mr-2">{icon}</span>}  {/* Render icon if present */}
        {text}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={buttonClassNames}
      type={type}
      disabled={disabled}
      aria-label={ariaLabel}  // Helps screen readers
    >
      {icon && <span className="mr-2">{icon}</span>}  {/* Render icon if present */}
      {text}
    </button>
  );
};

// PropTypes for validation
Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'outline', 'secondary']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  ariaLabel: PropTypes.string,
  icon: PropTypes.node,
  as: PropTypes.oneOf(['button', 'a']),  // Support 'button' or 'a'
  href: PropTypes.string,  // Only used if 'as' is 'a'
};

// Default props for the button
Button.defaultProps = {
  onClick: () => {},
  className: '',
  variant: 'primary',
  size: 'medium',
  disabled: false,
  type: 'button',
  ariaLabel: '',
  icon: null,
  as: 'button',  // Default to rendering as a button
  href: '',      // Default href is empty for buttons
};

export default Button;
