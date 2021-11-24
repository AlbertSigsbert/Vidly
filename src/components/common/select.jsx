import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select className="custom-select">
              <option defaultValue></option>
              <option value="One" name="genre">
                One
              </option>
              <option value="Two" name="genre">
                Two
              </option>
              <option value="Three" name="genre">
                Three
              </option>
      </select>
      {error && <div className="text-danger">{error}</div>}
    </div>
  );
};

export default Input;
