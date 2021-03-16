import * as contactActionType from "./contacts.reducer";

export const setLoggedInUserAction = (isLoggedIn) => {
  return {
    type: contactActionType.SET_LOGGED_IN_USER,
    payload: isLoggedIn,
  };
};

export const setContactsList = (arr) => {
  return {
    type: contactActionType.ADD_NEW_CONTACT,
    payload: arr,
  };
};
