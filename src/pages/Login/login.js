import React, { useEffect, useReducer } from "react";
import AppForm from "./../../layout/form/AppForm";
import axios from "axios";
import { useHistory } from "react-router-dom";

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

export default function LoginPage({ submitUser }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const history = useHistory();

  const handleChange = (type, value) => {
    dispatch({ type, value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/user/login", state);
      console.log(res);
      const { userLogged } = res.data;
      submitUser(userLogged);
      history.push(`/user/${userLogged}/me`);
    } catch (err) {
      alert("Incorrect user or password!");
    }
  };

  useEffect(() => {
    AppForm.disableInvalidFormDefault();
  }, []);

  return (
    <main className="row justify-content-center align-items-center form-page-main">
      <form
        className="bg-white rounded-1 shadow col-11 col-md-6 col-lg-4 my-5 p-5"
        onSubmit={handleSubmit}
      >
        <h1 className="mb-3">LOG IN</h1>
        <AppForm.EmailInput
          title="Email Address"
          inputValue={state.email}
          handleChange={handleChange}
        />
        <AppForm.PasswordInput
          inputValue={state.password}
          handleChange={handleChange}
          type="normal"
        />
        <input
          type="submit"
          value="Enter"
          className="btn btn-danger display-inline-block"
        />
        <div className="mt-3">
          <span>Don't have an account yet? </span>
          <a href="/user/register">Create now!</a>
        </div>
      </form>
    </main>
  );
}
