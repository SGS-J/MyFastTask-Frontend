import React from "react";

export default function PasswordInput({ inputValue, handleChange, type }) {
  let labelText = "";
  let name = "";
  let tooltipText = "";
  if (type === "normal") {
    labelText = "Password";
    name = "password";
    tooltipText = "Password must contains at least 8 characters";
  }
  if (type === "confirm") {
    labelText = "Confirm Password";
    name = "confirm-password";
    tooltipText = "Passwords must match";
  }

  return (
    <div className="mb-3 position-relative">
      <label className="form-label">{labelText}</label>
      <input
        name={name}
        type="password"
        className="form-control"
        onChange={(e) => handleChange(e.target.name, e.target.value)}
        value={inputValue}
        required
      />
      <div className="invalid-tooltip">{tooltipText}</div>
    </div>
  );
}
