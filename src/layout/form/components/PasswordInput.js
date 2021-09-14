import React from "react";

export default function PasswordInput({
  inputValue,
  handleChange,
  type,
  targetConfirm,
}) {
  let labelText = "";
  let name = "";
  let tooltipText = "";
  let pattern = "";
  if (type === "normal") {
    labelText = "Password";
    name = "password";
    tooltipText = "Password must contains at least 8 characters and 3 digits";
    pattern = "^(?=.*\\w)(?=.*(\\d{3,}))[\\w\\d]{8,}$";
  }
  if (type === "confirm") {
    labelText = "Confirm Password";
    name = "conf-password";
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
        pattern={type === "normal" ? pattern : targetConfirm}
      />
      <div className="invalid-tooltip">{tooltipText}</div>
    </div>
  );
}
