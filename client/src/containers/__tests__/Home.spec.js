import axios from 'axios';

describe('<Home/>', () => {
  it('Submitting url redirects user to Final Url Page', () => {
    jest.spyOn(axios, 'post').mockResolvedValue({});
  });
});
