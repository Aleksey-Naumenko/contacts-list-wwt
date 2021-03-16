import React, { useState, ChangeEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

// actions
import { setLoggedInUserAction } from "../redux/contacts.actions";

// styles
import "./login.scss";

// components
import Button from "../templates/Button";

const LoginPage = () => {
  console.log("LOGIN PAGE RENDERED");
  let isLoggedIn = useSelector((state) => state.contacts.isLoggedIn);
  const dispatch = useDispatch();
  const history = useHistory();
  // let isLoggedIn;
  // localStorage.getItem("isLoggedIn") === "true"
  //   ? (isLoggedIn = true)
  //   : (isLoggedIn = false);

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

        {/* <Button type="img" styles="confirm" number="099 999 99 99">
          <img src="../images/phone.svg" alt="phone" />
        </Button> */}

        {/* <Button callBack={callBack} type="button" styles="reject">
          Close
        </Button> */}

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
