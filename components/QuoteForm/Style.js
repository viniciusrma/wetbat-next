import styled from 'styled-components'

export const QuoteFormWrapper = styled.div`
  align-items: center;
  text-align: center;

  h2 {
    margin-top: 2rem;
  }

  label,
  h2 {
    color: #237e7a;
  }

  form {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 300px;
    text-align: left;
    padding: 2rem 0rem;
  }

  input {
    max-width: 300px;
    margin: 0.5rem 0 1rem 0;
    height: 1.6rem;
    border-radius: 4px;
    border: 1px solid #5f6caf;
    padding: 0.8rem 0.4rem;
  }

  input:focus {
    outline: none;
    border: 2px solid #5f6caf;
  }

  button {
    border-radius: 4px;
    padding: 1rem 2rem;
    background: #5f6caf;
    color: #ebf1f2;
    border: none;
    font-weight: 600;
  }

  button:hover {
    background: #3d4d9f;
    cursor: pointer;
  }

  #transport-checkbox {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }

  #transport-checkbox input {
    margin: 0;
    padding: 0;
    transform: scale(2);
    padding: 10px;
    -ms-transform: scale(2);
    -moz-transform: scale(2);
    -webkit-transform: scale(2);
    -o-transform: scale(2);
  }

  #transport-checkbox label {
    margin-right: 2rem;
  }
`
