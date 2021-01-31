import styled from 'styled-components';
import H1 from '../../components/Typography/H1';
import Form from './Form';

const Home = () => (
  <PageContainer>
    <Header>
      <H1>Url Shortener</H1>
    </Header>
    <Main>
      <Form />
    </Main>
  </PageContainer>
);

const PageContainer = styled.div``;

const Header = styled.header``;

const Main = styled.main``;

export default Home;
