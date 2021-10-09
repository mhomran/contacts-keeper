import React, { useReducer } from "react";
import ContactContext from "./contactContext";
import ContactReducer from "./contactReducer";
import { v4 as uuid } from "uuid";

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

    current: null,
  };

  const [state, dispatch] = useReducer(ContactReducer, initalState);

  //Add Contact
  const addContact = (contact) => {
    contact.id = uuid();
    dispatch({
      type: ADD_CONTACT,
      payload: contact,
    });
  };

  //Delete Contact
  const deleteContact = (id) => {
    dispatch({
      type: DELETE_CONTACT,
      payload: id,
    });
  };

  //Set Current Contact
  const setCurrent = (contact) => {
    dispatch({
      type: SET_CURRENT,
      payload: contact,
    });
  };

  //Clear Current Contact
  const clearCurrent = () => {
    dispatch({
      type: CLEAR_CURRENT,
    });
  };

  //Update Contact
  const updateContact = (contact) => {
    dispatch({
      type: UPDATE_CONTACT,
      payload: contact,
    });
  };

  //Filter Contacts

  //Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
