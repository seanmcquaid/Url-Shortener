import axios from 'axios';

const services = {
  getRedirectUrl: (id) =>
    axios.get(`${process.env.REACT_APP_API_URL}/getRedirectUrl/${id}`),
  shortenUrl: (url) =>
    axios.post(`${process.env.REACT_APP_API_URL}/shortenUrl`, { url }),
};

export default services;
