import React from "react";

export default function EmailInput({ inputValue, handleChange, title }) {
  return (
    <div className="mb-3 position-relative">
      <label className="form-label">{title}</label>
      <input
        name="email"
        type="email"
        className="form-control"
        value={inputValue}
        onChange={(e) => handleChange(e.target.name, e.target.value)}
        required
      />
      <div className="invalid-tooltip">Please type a valid Email address</div>
    </div>
  );
}
