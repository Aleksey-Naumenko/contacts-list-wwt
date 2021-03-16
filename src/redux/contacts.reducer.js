export const SET_LOGGED_IN_USER = "SET_LOGGED_IN_USER/CONTACTS";
export const ADD_NEW_CONTACT = "ADD_NEW_CONTACT/CONTACTS";
export const EDIT_CONTACT = "EDIT_CONTACT/CONTACTS";

const contactsState = {
  contactsList: [
    { name: "Alex Pupkin", phone: "093 993 93 93", id: 1 },
    { name: "Alex Pupkin", phone: "093 993 93 93", id: 2 },
    { name: "Druця Гопцаца", phone: "093 993 93 93", id: 3 },
    { name: "Lol LOLShenko", phone: "093 993 93 93", id: 4 },
    { name: "Alex Dron", phone: "093 993 93 93", id: 5 },
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
    case EDIT_CONTACT:
      return {
        ...state,
        contactsList: [...state.contactsList, action.payload],
      };
    default:
      return state;
  }
};
