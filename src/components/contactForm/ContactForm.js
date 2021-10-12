import React, { useState } from "react";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import { FORM_INITIAL_DATA } from "../../data/initialData.json";
import { form, btn, input } from "./ContactForm.module.css";

const ContactForm = ({ addNewContact, dataUI }) => {
  const [state, setState] = useState({ ...FORM_INITIAL_DATA });
  const { name, number } = state;

  const nameId = nanoid();
  const numberId = nanoid();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const resetStateData = () => {
    setState({ ...FORM_INITIAL_DATA });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const wasAlreadyInContacts = addNewContact(name, number);

    if (wasAlreadyInContacts) return;

    resetStateData();
  };

  const { inputName, inputTel, submitBtn } = dataUI;

  return (
    <form className={form} onSubmit={handleSubmit}>
      <label htmlFor={nameId}>{inputName}</label>
      <input
        className={input}
        id={nameId}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        autoComplete="off"
        onChange={handleChange}
        value={name}
      />
      <label htmlFor={numberId}>{inputTel}</label>
      <input
        className={input}
        id={numberId}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
        autoComplete="off"
        onChange={handleChange}
        value={number}
      />
      <button className={btn} type="submit">
        {submitBtn}
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  addNewContact: PropTypes.func.isRequired,
  dataUI: PropTypes.shape({
    inputName: PropTypes.string.isRequired,
    inputTel: PropTypes.string.isRequired,
    submitBtn: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactForm;
