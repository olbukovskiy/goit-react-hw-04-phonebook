import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';

import { FormInput, Label, Button, FormField } from './AddContact.styled';

const initialValues = {
  name: '',
  number: '',
};

export default function AddContact({ onSubmit }) {
  const handleSubmit = ({ name, number }, actions) => {
    actions.resetForm();
    onSubmit(name, number);
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <FormField>
        <Label>
          Name
          <FormInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Enter name"
          />
        </Label>
        <Label>
          Number
          <FormInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="Enter number. For example: 098-084-68-40"
          />
        </Label>
        <Button type="submit"> Add new contact</Button>
      </FormField>
    </Formik>
  );
}

AddContact.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
