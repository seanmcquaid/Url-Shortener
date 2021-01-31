import { memo } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const H1 = memo(({ children }) => <StyledH1>{children}</StyledH1>);

const StyledH1 = styled.h1``;

H1.propTypes = {
  children: propTypes.string.isRequired,
};

export default H1;
