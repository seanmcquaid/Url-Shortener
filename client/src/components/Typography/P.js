import { memo } from 'react';
import styled from 'styled-components';

const P = memo(({ children }) => <StyledP>{children}</StyledP>);

const StyledP = styled.p``;

export default P;
