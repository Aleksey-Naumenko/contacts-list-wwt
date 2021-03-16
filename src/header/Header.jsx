import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLoggedInUserAction } from "../redux/contacts.actions";

// styles
import "./header.scss";

const Header = () => {
  const dispatch = useDispatch();
  let isLoggedIn = useSelector((state) => state.contacts.isLoggedIn);

  const userName = localStorage.getItem("userName");
  const logOutHandler = () => {
    dispatch(setLoggedInUserAction(false));
    localStorage.removeItem("isLoggedIn");
  };

  return (
    <>
      {isLoggedIn && (
        <header className="header">
          <div className="header__nav header-nav">
            <div className="header-nav__name">{`Hello, ${userName}`}</div>
            <Link
              to="/login"
              onClick={() => logOutHandler()}
              className="header-nav__logout"
            >
              Logout
            </Link>
          </div>
        </header>
      )}
    </>
  );
};

export default Header;
