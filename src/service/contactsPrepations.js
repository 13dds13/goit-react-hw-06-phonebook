import { allContacts, search } from "../data/dataUI.json";

const checkIsDoublingContacts = (contacts, newName) => {
  const isAlreadyInContacts = contacts.some(
    ({ name }) => name.toLowerCase() === newName.toLowerCase()
  );
  return isAlreadyInContacts;
};

const contactsToRender = (contacts, filter) => {
  if (!filter) {
    return { contacts, title: `${allContacts}` };
  }
  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );
  return { contacts: filteredContacts, title: `${search}` };
};

//===============================================================
// const contactsToRender = (state) => {
//   const contacts = state.contacts.items;
//   const filter = state.contacts.filter;
//   if (!filter) {
//     return { contacts, title: `${allContacts}` };
//   }

//   const filteredContacts = contacts.filter(({ name }) =>
//     name.toLowerCase().includes(filter.toLowerCase())
//   );

//   return { contacts: filteredContacts, title: `${search}` };
// };

export { checkIsDoublingContacts, contactsToRender };
