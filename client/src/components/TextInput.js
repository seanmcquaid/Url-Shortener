import { memo } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const TextInput = memo(({ onChange, label, name, value, placeholder }) => (
  <Label>
    {label}
    <Input
      onChange={onChange}
      name={name}
      value={value}
      type='text'
      placeholder={placeholder}
    />
  </Label>
));

const Label = styled.label``;

const Input = styled.input``;

TextInput.propTypes = {
  onChange: propTypes.func.isRequired,
  label: propTypes.string,
  name: propTypes.string,
  value: propTypes.string.isRequired,
  placeholder: propTypes.string,
};

export default TextInput;
