import React, { useEffect } from "react";
import AppForm from "../AppForm";

export default function SignUpForm({
  email,
  password,
  confPassword,
  gender,
  birthday,
  color,
  avatar,
  handleChange,
}) {
  useEffect(() => {
    AppForm.disableInvalidFormDefault();
  }, []);

  return (
    <form
      className="needs-validation row container bg-white rounded-1 shadow col-11 col-lg-6 my-5 p-5"
      noValidate
    >
      <h1 className="col-12 mb-3">REGISTER</h1>
      <div className="col-12 col-lg-6">
        <AppForm.EmailInput
          inputValue={email}
          handleChange={handleChange}
          title="Email Address"
        />
        <AppForm.PasswordInput
          inputValue={password}
          handleChange={handleChange}
          type="normal"
          title="Password"
        />
        <AppForm.PasswordInput
          inputValue={confPassword}
          handleChange={handleChange}
          type="confirm"
          title="Confirm Password"
        />
        <AppForm.GenderInput
          inputValue={gender}
          handleChange={handleChange}
          title="Gender"
        />
      </div>
      <div className="col-12 col-lg-6">
        <AppForm.ImageInput
          inputValue={avatar}
          handleChange={handleChange}
          title="Avatar"
        />
        <AppForm.ColorInput
          inputValue={color}
          handleChange={handleChange}
          title="Choose your favorite color:"
        />
        <AppForm.BirthdayInput
          inputValue={birthday}
          handleChange={handleChange}
          title="Your birthday was:"
        />
      </div>

      <div className="col-6 col-lg-2">
        <button type="submit" className="btn btn-danger">
          Submit
        </button>
      </div>
    </form>
  );
}
