import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

// actions
import { setLoggedInUserAction } from "../redux/contacts.actions";

// styles
import "./login.scss";

// components
import Button from "../templates/Button";

const LoginPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [name, setName] = useState("");

  const inputChangeHandler = (e) => {
    setName(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(setLoggedInUserAction(true));
    localStorage.setItem("userName", name);
    localStorage.setItem("isLoggedIn", true);
    history.push("/");
  };
  return (
    <div className="form-wrapper">
      <form className="login-form">
        <h1 className="login-form__title">SignIn</h1>
        <input
          onChange={(e) => inputChangeHandler(e)}
          placeholder="What's your name?"
          value={name}
          type="text"
          className="login-form__input"
        />
        <Button
          isDisabled={!name}
          callBack={submitHandler}
          type="button"
          styles="confirm"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;
