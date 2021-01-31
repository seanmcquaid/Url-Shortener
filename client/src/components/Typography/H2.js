import { memo } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const H2 = memo(({ children }) => <StyledH2>{children}</StyledH2>);

const StyledH2 = styled.h2``;

H2.propTypes = {
  children: propTypes.string.isRequired,
};

export default H2;
