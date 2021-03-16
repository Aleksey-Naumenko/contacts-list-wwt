import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import Layout from "./Layout";

const App = () => {
  return (
    <div className="main">
      <Provider store={store}>
        <Layout />
      </Provider>
    </div>
  );
};

export default App;
