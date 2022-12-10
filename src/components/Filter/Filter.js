import React from 'react';
import PropTypes from 'prop-types';

import { Label, Input } from 'components/AddContact/AddContact.styled';
import { Wrapper } from './Filter.styled';

export default function Filter({ onChange }) {
  return (
    <Wrapper>
      <Label>
        Find contacts by name:
        <Input type="text" onChange={onChange} />
      </Label>
    </Wrapper>
  );
}

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
