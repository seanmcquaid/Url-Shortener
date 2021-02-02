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

const Label = styled.label`
  font-family: 'Asap', sans-serif;
  margin: 0.5rem;
  display: flex;
  flex-direction: column
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  font-family: 'Asap', sans-serif;
  padding: 0.5rem;
  border: 2px solid black;
  outline: none;
  border-radius: 8px;
  width: 15rem;
`;

TextInput.propTypes = {
  onChange: propTypes.func.isRequired,
  label: propTypes.string,
  name: propTypes.string,
  value: propTypes.string.isRequired,
  placeholder: propTypes.string,
};

export default TextInput;
