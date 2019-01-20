import React from "react";

const FullRowButton = ({ label, style, onClick }) => {
  return (
    <div className="full-row-button" style={style} onClick={onClick}>
      {label}
    </div>
  );
};

FullRowButton.defaultProps = {
  style: {},
  label: ""
};

export default FullRowButton;
