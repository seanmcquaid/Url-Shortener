import { useContext } from 'react';
import styled from 'styled-components';
import H1 from '../../components/Typography/H1';
import P from '../../components/Typography/P';
import { AppContext } from '../../context';
import Form from './Form';

const Home = () => {
  const { state } = useContext(AppContext);

  return (
    <PageContainer>
      <Header>
        <H1>Url Shortener</H1>
        <P>{state.error}</P>
      </Header>
      <Main>
        <Form />
      </Main>
    </PageContainer>
  );
};

const PageContainer = styled.div``;

const Header = styled.header``;

const Main = styled.main``;

export default Home;
