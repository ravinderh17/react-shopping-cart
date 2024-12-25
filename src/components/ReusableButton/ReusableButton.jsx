import PropTypes from "prop-types";

export default function ReusableButton({isDisabled, onClick, className, label, child, showLabel}) {
  return (
    <button
    disabled={isDisabled}
    onClick={onClick}
    className= {className}
    title= {label}
    >
     {child && child}
     {showLabel && label && <span className="button-label">{label}</span>}
    </button>
  )
}

// PropTypes validation
ReusableButton.propTypes = {
    onClick: PropTypes.func.isRequired, // Function to handle clicks
    label: PropTypes.string.isRequired, // String for the button's label and tooltip
    child: PropTypes.node,             // JSX or HTML element, optional
    className: PropTypes.string,       // CSS class, optional
    isDisabled: PropTypes.bool,        // Boolean to disable the button, optional
    showLabel: PropTypes.bool,
  };
  
  // Default Props
  ReusableButton.defaultProps = {
    child: null,          // Default to no child if not provided
    className: "",        // Default to no additional class
    isDisabled: false,    // Default to enabled button
    showLabel : true,
  };
