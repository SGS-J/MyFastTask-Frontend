import React from "react";

export default function UserNameInput({ inputValue, handleChange, title }) {
  return (
    <div className="mb-3 position-relative">
      <label className="form-label">{title}</label>
      <input
        name="username"
        type="text"
        className="form-control"
        value={inputValue}
        onChange={(e) => handleChange(e.target.name, e.target.value)}
        required
        pattern="^\w{3,}$"
      />
      <div className="invalid-tooltip">
        Username must have at least 3 characters
      </div>
    </div>
  );
}
