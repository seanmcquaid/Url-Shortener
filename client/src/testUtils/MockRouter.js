import { MemoryRouter } from 'react-router-dom';

const MockRouter = ({ children, initialRoute }) => (
  <MemoryRouter initialEntries={[initialRoute]}>{children}</MemoryRouter>
);

export default MockRouter;
