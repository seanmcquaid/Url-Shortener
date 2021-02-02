import { memo } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const Button = memo(({ name, onClick, type }) => (
  <StyledButton type={type} onClick={onClick}>
    {name}
  </StyledButton>
));

const StyledButton = styled.button`
  font-family: 'Asap', sans-serif;
  padding: 1rem;
  border-radius: 8px;
  outline: none;
  border: none;
  background-color: #6564db;
  color: white;
  margin: 0.5rem;
`;

Button.propTypes = {
  name: propTypes.string.isRequired,
  onClick: propTypes.func,
  type: propTypes.string,
};

export default Button;
