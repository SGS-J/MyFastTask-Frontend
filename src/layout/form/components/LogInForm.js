import React, { useEffect } from "react";
import AppForm from "../AppForm";

export default function LogInForm({ email, password, handleChange }) {
  useEffect(() => {
    AppForm.disableInvalidFormDefault();
  }, []);

  return (
    <form className="bg-white rounded-1 shadow col-11 col-md-6 col-lg-4 my-5 p-5">
      <h1 className="mb-3">LOG IN</h1>
      <AppForm.EmailInput inputValue={email} handleChange={handleChange} />
      <AppForm.PasswordInput
        inputValue={password}
        handleChange={handleChange}
        type="normal"
      />
      <button type="submit" className="btn btn-danger display-inline-block">
        Enter
      </button>
      <div className="mt-3">
        <span>Don't have an account yet? </span>
        <a href="/register">Create now!</a>
      </div>
    </form>
  );
}
