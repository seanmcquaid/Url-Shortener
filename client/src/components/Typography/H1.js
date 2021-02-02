import { memo } from 'react';
import styled from 'styled-components';

const H1 = memo(({ children }) => <StyledH1>{children}</StyledH1>);

const StyledH1 = styled.h1`
  font-family: 'Asap', sans-serif;
  color: white;
`;

export default H1;
