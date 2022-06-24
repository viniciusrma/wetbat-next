import styled from 'styled-components'

export const QuotesTableWrapper = styled.table`
  border-collapse: collapse;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  margin: 2rem auto;
  overflow-wrap: break-word;

  thead tr {
    background-color: #009879;
    color: #ffffff;
    text-align: left;
  }

  td {
    max-width: 250px;
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
`
