import { useEffect } from 'react';
import services from '../services';

const useRedirect = (id) => {
  useEffect(() => {
    services.getRedirectUrl(id).then(({ data }) => {
      window.location.replace(data.result.originalUrl);
    });
  }, [id]);

  return null;
};

export default useRedirect;
