import { useCallback, useContext, useState } from 'react';
import styled from 'styled-components';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import services from '../../services';
import { AppContext } from '../../context';
import {
  addUrlLoading,
  addUrlSuccess,
  addUrlError,
} from '../../context/actions';
import { useHistory } from 'react-router-dom';

const Form = () => {
  const { dispatch } = useContext(AppContext);
  const [url, setUrl] = useState('');
  const history = useHistory();

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(addUrlLoading());
    services
      .shortenUrl(url)
      .then(({ data }) => {
        dispatch(addUrlSuccess({ id: data.result.id, url: data.result.url }));
        history.push('/finalUrl');
      })
      .catch((err) => {
        dispatch(
          addUrlError({
            errorMessage: 'There was a problem trying to shorten this url',
          })
        );
      });
  };

  const onChange = useCallback((event) => {
    const { value } = event.target;
    setUrl(value);
  }, []);

  return (
    <StyledForm onSubmit={onSubmit}>
      <TextInput
        onChange={onChange}
        value={url}
        name='url'
        placeholder='Enter your URL here'
      />
      <Button name='Submit' type='submit' />
    </StyledForm>
  );
};

const StyledForm = styled.form``;

export default Form;
