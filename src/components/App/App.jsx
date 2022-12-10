import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactList from '../ContactList';
import AddContact from '../AddContact';
import Filter from '../Filter';

import css from './App.module.css';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    if (localStorage.getItem('contacts')) {
      const contacts = JSON.parse(localStorage.getItem('contacts'));
      this.setState({ contacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      const preparedContacts = JSON.stringify(this.state.contacts);
      localStorage.setItem('contacts', preparedContacts);
    }
  }

  addNewContact = (name, number) => {
    if (this.state.contacts.find(contact => contact.name === name)) {
      return alert(`${name} is already in contacts.`);
    }

    const newContact = { id: nanoid(), name: name, number: number };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  deleteContact = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  filterContact = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  filteredContacts = () =>
    this.state.contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(this.state.filter.toLowerCase());
    });

  render() {
    return (
      <div>
        <p className={css.sectionHeading}>Phonebook</p>
        <AddContact onSubmit={this.addNewContact} />
        <p className={css.sectionHeading}>Contacts</p>
        <Filter onChange={this.filterContact} />
        <ContactList
          contacts={this.filteredContacts()}
          onChange={this.deleteContact}
        />
      </div>
    );
  }
}
