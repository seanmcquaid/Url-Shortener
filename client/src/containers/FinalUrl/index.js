import { useContext, useMemo } from 'react';
import styled from 'styled-components';
import H1 from '../../components/Typography/H1';
import P from '../../components/Typography/P';
import { AppContext } from '../../context';

const FinalUrl = () => {
  const { state } = useContext(AppContext);
  const charactersSaved = useMemo(() => {
    const newUrlLength = `${process.env.REACT_APP_BASE_URL}/${state.urlId}`
      .length;
    const oldUrlLength = state.originalUrl.length;
    return oldUrlLength - newUrlLength;
  }, [state.urlId, state.originalUrl]);

  return (
    <PageContainer>
      <Header>
        <H1>Final Url</H1>
      </Header>
      <Main>
        <P>New Url : {`${process.env.REACT_APP_BASE_URL}/${state.urlId}`}</P>
        <P>Old Url : {state.originalUrl}</P>
        <P>Characters Saved : {charactersSaved}</P>
      </Main>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.header`
  padding: 1rem;
`;

const Main = styled.main`
  padding: 1rem;
`;

export default FinalUrl;
