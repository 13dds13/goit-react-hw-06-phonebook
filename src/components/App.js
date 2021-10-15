import React from "react";
import ContactForm from "./contactForm/ContactForm";
import Filter from "./filter/Filter";
import ContactsList from "./contactsList/ContactsList";
import styles from "./container/Container.module.css";
import dataUI from "../data/dataUI.json";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../redux/contacts/contactsActions/contactsActions";
import { checkIsDoublingContacts } from "../service/contactsPrepations";
import {
  getContacts,
  getContactsData,
  getFilter,
} from "../redux/contacts/contactsSelector";

const {
  alertMsg,
  titleMain,
  titleSecondary,
  inputName,
  inputTel,
  submitBtn,
  deleteBtn,
  inputSearch,
  noDataToRender,
} = dataUI;

const App = () => {
  const contacts = useSelector(getContacts);
  const contactsDataToRender = useSelector(getContactsData);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const addNewContact = (name, number) => {
    const isAlreadyInContacts = checkIsDoublingContacts(contacts, name);

    if (isAlreadyInContacts) {
      alert(`${name} ${alertMsg}`);
      return isAlreadyInContacts;
    }
    dispatch(addContact(name, number));

    return isAlreadyInContacts;
  };

  const { container, title } = styles;

  return (
    <div className={container}>
      <h2 className={title}>{titleMain}</h2>

      <ContactForm
        dataUI={{ inputName, inputTel, submitBtn }}
        addNewContact={addNewContact}
      />

      <h2 className={title}>{titleSecondary}</h2>

      <Filter inputSearch={inputSearch} filter={filter} />

      <ContactsList
        contactsDataToRender={contactsDataToRender}
        dataUI={{ deleteBtn, noDataToRender }}
      />
    </div>
  );
};

export default App;

//===================================================================

//* whithout hooks

// import React, { useEffect } from "react";
// import { nanoid } from "nanoid";
// import PropTypes from "prop-types";
// import ContactForm from "./contactForm/ContactForm";
// import Filter from "./filter/Filter";
// import ContactsList from "./contactsList/ContactsList";
// import styles from "./container/Container.module.css";
// import { storageKey } from "../data/initialData.json";
// import dataUI from "../data/dataUI.json";
// import getDataFromStorage from "../service/storageService";
// import { connect } from "react-redux";
// import { addContact } from "../redux/contacts/contactsActions/contactsActions";
// import {
//   checkIsDoublingContacts,
//   contactsToRender,
// } from "../service/contactsPrepations";

// const {
//   alertMsg,
//   titleMain,
//   titleSecondary,
//   inputName,
//   inputTel,
//   submitBtn,
//   deleteBtn,
//   inputSearch,
//   noDataToRender,
// } = dataUI;

// const App = ({ contactsData, filter, addContact }) => {
//   const { contacts } = contactsData;
//   useEffect(() => {
//     const dataFromStorage = getDataFromStorage();
//     if (!dataFromStorage) return;
//     dataFromStorage.map(addContact);
//   }, [addContact]);

//   useEffect(() => {
//     const dataToStorage = JSON.stringify(contacts);
//     localStorage.setItem(storageKey, dataToStorage);
//   }, [contacts]);

//   const addNewContact = (name, number) => {
//     const isAlreadyInContacts = checkIsDoublingContacts(contacts, name);

//     if (isAlreadyInContacts) {
//       alert(`${name} ${alertMsg}`);
//       return isAlreadyInContacts;
//     }

//     addContact({
//       name,
//       id: nanoid(),
//       number,
//     });

//     return isAlreadyInContacts;
//   };

//   const { container, title } = styles;

//   return (
//     <div className={container}>
//       <h2 className={title}>{titleMain}</h2>

//       <ContactForm
//         dataUI={{ inputName, inputTel, submitBtn }}
//         addNewContact={addNewContact}
//       />

//       <h2 className={title}>{titleSecondary}</h2>

//       <Filter inputSearch={inputSearch} filter={filter} />

//       <ContactsList
//         contactsDataToRender={contactsData}
//         dataUI={{ deleteBtn, noDataToRender }}
//       />
//     </div>
//   );
// };

// App.propTypes = {
//   addContact: PropTypes.func.isRequired,
//   filter: PropTypes.string.isRequired,
//   contacts: PropTypes.arrayOf(PropTypes.object),
// };

// const mapStateToProps = (state) => ({
//   filter: state.contacts.filter,
//   contactsData: contactsToRender(state),
// });

// const mapDispatchToProps = { addContact };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
