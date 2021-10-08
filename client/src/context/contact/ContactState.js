import React, { useReducer } from "react";
import ContactContext from "./contactContext";
import ContactReducer from "./contactReducer";
import uuid from "uuid";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from "../types";

const ContactState = (props) => {
  const initalState = {
    contacts: [
      {
        id: 1,
        name: "Mo1",
        email: "Mo@yahoo.com",
        phone: "1212121",
        type: "personal",
      },
      {
        id: 2,
        name: "Mo2",
        email: "Mo@yahoo.com",
        phone: "1212121",
        type: "personal",
      },
      {
        id: 3,
        name: "Mo3",
        email: "Mo@yahoo.com",
        phone: "1212121",
        type: "professional",
      },
    ],
  };

  const [state, dispatch] = useReducer(ContactReducer, initalState);

  //Add Contact

  //Delete Contact

  //Set Current Contact

  //Clear Current Contact

  //Update Contact

  //Filter Contacts

  //Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;