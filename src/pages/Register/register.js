import React, { useReducer } from "react";
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
    await axios.post(`/user/register`, fd, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };

  return (
    <main className="row justify-content-center form-page-main">
      <AppForm.SignUpForm
        username={state.username}
        email={state.email}
        password={state.password}
        confPassword={state.confPassword}
        gender={state.gender}
        birthday={state.birthday}
        color={state.color}
        avatar={state.avatar}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </main>
  );
}
