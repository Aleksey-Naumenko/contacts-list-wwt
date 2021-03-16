import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { contactsReducer } from "./redux/contacts.reducer";
import thunk from "redux-thunk";

export const rootReducer = combineReducers({
  contacts: contactsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
