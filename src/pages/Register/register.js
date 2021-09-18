import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";

import AppForm from "./../../layout/form/AppForm";
import DefaultAvatar from "./../../assets/default.png";

const initialState = {
  username: "",
  email: "",
  password: "",
  "conf-password": "",
  gender: "",
  birthday: new Date(),
  color: "#B80000",
  avatar: DefaultAvatar,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "username":
      return { ...state, username: action.value };
    case "email":
      return { ...state, email: action.value };
    case "password":
      return {
        ...state,
        password: action.value,
      };
    case "conf-password":
      return {
        ...state,
        "conf-password": action.value,
      };
    case "gender":
      return { ...state, gender: action.value };
    case "birthday":
      return { ...state, birthday: action.value };
    case "color":
      return { ...state, color: action.value };
    case "avatar":
      return { ...state, avatar: action.value };

    default:
      throw new Error();
  }
};

export default function RegisterPage() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [emailInUse, setEmailInUse] = useState(false);

  const handleChange = (type, value) => {
    dispatch({ type, value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fd = new FormData();
    for (const stateKey in state) {
      if (stateKey === "avatar") {
        const res = await fetch(state[stateKey]);
        const file = await res.blob();
        fd.append(stateKey, file);
      } else {
        fd.append(stateKey, state[stateKey]);
      }
    }
    await axios
      .post(`/user/register`, fd, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.status);
      });
  };

  useEffect(() => {
    AppForm.disableInvalidFormDefault();
  }, []);

  return (
    <main className="row justify-content-center form-page-main">
      <form
        className="needs-validation row container bg-white rounded-1 shadow col-11 col-lg-6 my-5 p-5"
        noValidate
        onSubmit={handleSubmit}
      >
        <h1 className="col-12 mb-3">REGISTER</h1>
        <div className="col-12 col-lg-6">
          <AppForm.EmailInput
            inputValue={state.email}
            handleChange={handleChange}
            title="Email Address"
            emailInUse={emailInUse}
          />
          <AppForm.PasswordInput
            inputValue={state.password}
            handleChange={handleChange}
            type="normal"
            title="Password"
          />
          <AppForm.PasswordInput
            inputValue={state["conf-password"]}
            handleChange={handleChange}
            type="confirm"
            title="Confirm Password"
            targetConfirm={state.password}
          />
          <AppForm.UserNameInput
            inputValue={state.username}
            handleChange={handleChange}
            title="How we name you?"
          />
          <AppForm.GenderInput
            inputValue={state.gender}
            handleChange={handleChange}
            title="Gender"
          />
        </div>
        <div className="col-12 col-lg-6">
          <AppForm.ImageInput
            inputValue={state.avatar}
            handleChange={handleChange}
            title="Avatar"
          />
          <AppForm.BirthdayInput
            inputValue={state.birthday}
            handleChange={handleChange}
            title="Your birthday was:"
          />
          <AppForm.ColorInput
            inputValue={state.color}
            handleChange={handleChange}
            title="Choose your favorite color:"
          />
        </div>

        <div className="col-6 col-lg-2">
          <input type="submit" className="btn btn-danger" value="Submit" />
        </div>
      </form>
    </main>
  );
}
