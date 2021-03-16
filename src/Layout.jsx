import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLoggedInUserAction } from "./redux/contacts.actions";

import ContactsPage from "./contacts/ContactsPage";

// components
import Header from "./header/Header";
import LoginPage from "./login/LoginPage";

const Layout = () => {
  console.log("RENDER PAGE LAyout");
  const dispatch = useDispatch();
  let isLoggedIn = useSelector((state) => state.contacts.isLoggedIn);
  // let savedLoggedIn = localStorage.getItem("isLoggedIn");
  console.log(isLoggedIn, "1");

  useEffect(() => {
    let loggedInLocally = localStorage.getItem("isLoggedIn");
    if (loggedInLocally) dispatch(setLoggedInUserAction(true));
  }, []);

  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route exact path="/">
            <ContactsPage />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
        </Switch>
      </>
    </Router>
  );
};

export default Layout;
