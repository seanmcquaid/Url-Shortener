import { memo } from 'react';
import styled from 'styled-components';

const H2 = memo(({ children }) => <StyledH2>{children}</StyledH2>);

const StyledH2 = styled.h2``;

export default H2;
