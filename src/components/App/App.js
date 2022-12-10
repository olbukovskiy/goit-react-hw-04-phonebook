import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import ContactList from '../ContactList';
import AddContact from '../AddContact';
import Filter from '../Filter';

import css from './App.module.css';

const initialValues = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export function App() {
  const [contacts, setContacts] = useState(
    () => [...JSON.parse(localStorage.getItem('contacts'))] ?? initialValues
  );

  const [filter, setFilter] = useState('');

  useEffect(() => {
    const preparedContacts = JSON.stringify(contacts);
    localStorage.setItem('contacts', preparedContacts);
  }, [contacts]);

  const addNewContact = (name, number) => {
    if (contacts.find(contact => contact.name === name)) {
      return alert(`${name} is already in contacts.`);
    }

    const newContact = { id: nanoid(), name: name, number: number };
    setContacts(prevState => [...prevState, newContact]);
  };

  const deleteContact = id => {
    setContacts(prevState => {
      return [...prevState.filter(contact => contact.id !== id)];
    });
  };

  const filterContact = event => {
    setFilter(event.currentTarget.value);
  };

  const filteredContacts = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  return (
    <div>
      <p className={css.sectionHeading}>Phonebook</p>
      <AddContact onSubmit={addNewContact} />
      <p className={css.sectionHeading}>Contacts</p>
      <Filter onChange={filterContact} />
      <ContactList contacts={filteredContacts()} onChange={deleteContact} />
    </div>
  );
}
