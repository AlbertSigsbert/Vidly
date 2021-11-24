import React from "react";

const Select = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select
        { ...rest }
        name={name}
        id={name}
        className="form-control"
      />
      {error && <div className="text-danger">{error}</div>}
    </div>
  );
};

export default Select;
