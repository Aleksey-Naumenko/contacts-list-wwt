import React from "react";
import Button from "../templates/Button";

const Contact = ({ contact, editHandler }) => {
  console.log(contact);
  return (
    <div className="card">
      <div onClick={() => editHandler(contact.id)} className="card__edit">
        <img src="../images/edit.svg" alt="edit-contact" />
      </div>
      <div className="card__avatar">
        <img src="https://picsum.photos/200" alt="avatar" />
      </div>
      <div className="card__name">{contact.name}</div>
      <Button type="img" styles="confirm" number="099 999 99 99">
        <img src="../images/phone.svg" alt="phone" />
      </Button>
    </div>
  );
};

export default Contact;
