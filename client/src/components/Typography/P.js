import { memo } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const P = memo(({ children }) => <StyledP>{children}</StyledP>);

const StyledP = styled.p``;

P.propTypes = {
  children: propTypes.string.isRequired,
};

export default P;
