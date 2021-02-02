import { memo } from 'react';
import styled from 'styled-components';

const P = memo(({ children }) => <StyledP>{children}</StyledP>);

const StyledP = styled.p`
  font-family: 'Asap', sans-serif;
  color: white;
  margin: 0.5rem;
`;

export default P;
