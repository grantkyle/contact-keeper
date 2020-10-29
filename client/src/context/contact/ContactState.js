import React, { useReducer } from "react";
import {v4 as uuid} from 'uuid';
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
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
  const initialState = {
    contacts: [
      {
        name: "Grant KyleTest77003",
        email: "sgrantkyle+test2@gmail.com.com",
        phone: "512-223-1010",
        type: "personal",
      },
      {
        name: "Grant KyleTest90210",
        email: "sgrantkyle+test2@gmail.com.com",
        phone: "512-888-3939",
        type: "personal",
      },
      {
        name: "Grant KyleTest78745",
        email: "sgrantkyle+test2@gmail.com.com",
        phone: "512-123-1234",
        type: "personal",
      },
      {
        name: "Grant KyleTest78741",
        email: "sgrantkyle+test2@gmail.com.com",
        phone: "512-098-0987",
        type: "personal",
      },
      {
        name: "Grant KyleTest78613",
        email: "sgrantkyle+test2@gmail.com.com",
        phone: "512-294-7550",
        type: "personal",
      },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact
  const addContact = (contact) => {
    contact.id = uuid();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  // Delete Contact
  const deleteContact = id => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };
  // Set Current Contact

  // Clear Current Contact

  // Update Contact

  // Filter Contacts

  // Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        addContact,
        deleteContact
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
