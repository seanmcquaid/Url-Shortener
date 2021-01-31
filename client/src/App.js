import { BrowserRouter } from 'react-router-dom';
import GlobalContext from './context';
import Routes from './Routes';

const App = () => (
  <GlobalContext>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </GlobalContext>
);

export default App;
