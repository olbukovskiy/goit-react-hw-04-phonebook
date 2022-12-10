import React from 'react';
import PropTypes from 'prop-types';
import Contact from '../Contact';
import { ContactsList } from './ContactsList.styled';

export default function ContactList({ contacts, onChange }) {
  return (
    <ContactsList>
      {contacts.map(({ id, name, number }) => {
        return (
          <Contact
            key={id}
            id={id}
            name={name}
            number={number}
            onChangeResult={() => onChange(id)}
          />
        );
      })}
    </ContactsList>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onChange: PropTypes.func,
};
