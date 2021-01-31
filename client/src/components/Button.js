import { memo } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const Button = memo(({ name, onClick, type }) => (
  <StyledButton type={type} onClick={onClick}>
    {name}
  </StyledButton>
));

const StyledButton = styled.button``;

Button.propTypes = {
  name: propTypes.string.isRequired,
  onClick: propTypes.func,
  type: propTypes.string,
};

export default Button;
