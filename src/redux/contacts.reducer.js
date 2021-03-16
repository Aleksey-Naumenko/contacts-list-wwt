export const SET_LOGGED_IN_USER = "SET_LOGGED_IN_USER/CONTACTS";
export const ADD_NEW_CONTACT = "ADD_NEW_CONTACT/CONTACTS";

const contactsState = {
  contactsList: [
    { name: "Alex Pupkin", phone: "093 993 93 93", id: 1 },
    { name: "Danna Vanna", phone: "093 993 93 93", id: 2 },
    { name: "Some Name", phone: "093 993 93 93", id: 3 },
    { name: "Lol John", phone: "093 993 93 93", id: 4 },
    { name: "Lee Wayne", phone: "093 993 93 93", id: 5 },
  ],
  isLoggedIn: false,
};

export const contactsReducer = (state = contactsState, action) => {
  switch (action.type) {
    case SET_LOGGED_IN_USER:
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    case ADD_NEW_CONTACT:
      return {
        ...state,
        contactsList: action.payload,
      };
    default:
      return state;
  }
};
