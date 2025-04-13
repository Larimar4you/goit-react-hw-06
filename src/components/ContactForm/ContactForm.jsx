import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  const handleSubmit = e => {
    e.preventDefault();

    const normalizedName = name.toLowerCase();
    const nameExists = contacts.some(
      contact => contact.name.toLowerCase() === normalizedName
    );

    if (nameExists) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = {
      id: Date.now().toString(),
      name,
      number,
    };

    dispatch(addContact(newContact));
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.label}>
        Name
        <input
          type="text"
          name="name"
          required
          value={name}
          onChange={e => setName(e.target.value)}
          className={styles.input}
        />
      </label>

      <label className={styles.label}>
        Number
        <input
          type="tel"
          name="number"
          required
          value={number}
          onChange={e => setNumber(e.target.value)}
          className={styles.input}
        />
      </label>

      <button type="submit" className={styles.button}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
