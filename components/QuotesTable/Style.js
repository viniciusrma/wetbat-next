import styled from 'styled-components'

export const QuotesTableWrapper = styled.div`

  table {
    border-collapse: collapse;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    margin: 2rem auto;
    overflow-wrap: break-word;
    font-size: 16px;
  }

  thead tr {
    background-color: #237e7a;
    color: #ffffff;
    text-align: left;
  }

  td {
    max-width: 160px;
    white-space: nowrap;
    overflow: hidden;
  }

  td:hover {
    white-space: normal;
  }

  th,
  td {
    padding: 12px 15px;
  }

  tbody tr {
    border-bottom: 1px solid #dddddd;
  }

  button {
    font-size: 24px;
    border: none;
  }

  button:hover {
    cursor: pointer;
  }

  @media (max-width: 414px) {
    overflow-x: auto !important;
  }
`
