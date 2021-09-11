import React, { useReducer } from "react";
import AppForm from "./../../layout/form/AppForm";

const initialState = {
  email: "",
  password: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "email":
      return { ...state, email: action.value };
    case "password":
      return { ...state, password: action.value };
    default:
      throw new Error();
  }
};

export default function LoginPage() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleChange = (type, value) => {
    dispatch(type, value);
  };

  return (
    <main className="row justify-content-center align-items-center form-page-main">
      <AppForm.LogInForm
        email={state.email}
        password={state.password}
        handleChange={handleChange}
      />
    </main>
  );
}
