import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

// actions
import { setContactsList } from "../redux/contacts.actions";

// styles
import "./contactsPage.scss";

// components
import Button from "../templates/Button";
import Popup from "../popup/Popup";
import Contact from "./Contact";
import { CSVLink } from "react-csv";

function ContactsPage() {
  const [modalactive, setModalActive] = useState(false);
  const isLoggedIn = useSelector((state) => state.contacts.isLoggedIn);
  const contactsList = useSelector((state) => state.contacts.contactsList);
  const [targetContact, setTargetContact] = useState("");
  const [popupTitle, setPopupTitle] = useState("New Contact");
  const dispatch = useDispatch();

  const targetContactSelector = (id) =>
    contactsList.find((contact) => contact.id === id);

  const editBtnHandler = (id) => {
    setPopupTitle("Edit contact");
    const targetContact = targetContactSelector(id);
    setTargetContact(targetContact);
    setModalActive(true);
  };

  const addNewContactHandler = () => {
    setPopupTitle("New Contact");
    setModalActive(true);
  };

  const saveBtnHandler = (e, name, phone, id) => {
    let newContactsList;
    const targetContact = targetContactSelector(id);
    if (!name && !phone) {
      // delete contact
      newContactsList = contactsList.filter((contact) => contact.id !== id);
      return;
    } else if (!targetContact) {
      // save contact
      newContactsList = [
        ...contactsList,
        { name, phone, id: new Date().toISOString() },
      ];
    } else {
      // edit contact
      newContactsList = contactsList.map((contact) => {
        console.log(contact.id, id);
        if (contact.id === id) {
          contact.name = name;
          contact.phone = phone;
        }
        return contact;
      });
    }
    dispatch(setContactsList(newContactsList));
    setModalActive(false);
  };

  const csvHeaders = [
    { label: "Name", key: "name" },
    { label: "Phone Number", key: "phone" },
  ];

  console.log(contactsList);
  return (
    <div>
      {isLoggedIn ? (
        <>
          <div className="container">
            <div className="container__controls">
              <Button
                callBack={(e) => {
                  saveBtnHandler(e);
                  addNewContactHandler();
                }}
                type="button"
                styles="controls"
              >
                New Contact
              </Button>
              <CSVLink
                data={contactsList}
                headers={csvHeaders}
                className="primary-btn controls csv-btn"
              >
                Download CSV
              </CSVLink>
            </div>
            <div className="container__cards">
              {contactsList
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((contact) => (
                  <Contact
                    key={contact.id}
                    contact={contact}
                    editHandler={() => editBtnHandler(contact.id)}
                  />
                ))}
            </div>
          </div>
          <Popup
            active={modalactive}
            setActive={setModalActive}
            title={popupTitle}
            contact={targetContact}
            saveHandler={saveBtnHandler}
          ></Popup>
        </>
      ) : (
        <div>
          <div>To see this page login please!</div>
          <Link to="/login">Login</Link>
        </div>
      )}
    </div>
  );
}

export default ContactsPage;
