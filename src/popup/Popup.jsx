import React, { useEffect, useState } from "react";

//styles
import "./popup.scss";

// components
import Button from "../templates/Button";

const Popup = ({ active, setActive, title, contact, saveHandler }) => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (active === true) {
      setName(contact.name);
      setPhone(contact.phone);
      setId(contact.id);
    }
    if (title === "New Contact") {
      setName("");
      setPhone("");
      setId("");
    }
  }, [active]);

  return (
    <div
      onClick={() => setActive(false)}
      className={active ? "modal active" : "modal"}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={active ? "modal__content active" : "modal__content"}
      >
        <div onClick={() => setActive(false)} className="modal-close">
          <img src="../images/clear.svg" alt="close-popup" />
        </div>
        <div className="form-wrapper modal-wrapper">
          <form className="login-form">
            <h1 className="login-form__title">{title}</h1>
            <input
              onChange={(e) => setName(e.target.value)}
              placeholder="Contact name"
              value={name || ""}
              type="text"
              className="login-form__input"
            />
            <input
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Contact Phone"
              value={phone || ""}
              type="text"
              className="login-form__input"
            />
            <Button
              callBack={(e) => saveHandler(e, name, phone, id)}
              type="button"
              styles="confirm"
            >
              Save
            </Button>
            <Button
              callBack={() => setActive(false)}
              type="button"
              styles="reject"
            >
              Close
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Popup;
