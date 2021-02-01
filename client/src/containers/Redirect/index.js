import { useParams } from 'react-router-dom';
import useRedirect from '../../hooks/useRedirect';

const Redirect = () => {
  const { id } = useParams();

  useRedirect(id);

  return null;
};

export default Redirect;
