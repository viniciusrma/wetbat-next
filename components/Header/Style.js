import styled from 'styled-components'

export const HeaderWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #3c7ce1;
  padding: 0 2rem;

  @media (max-width: 414px) {
    img {
      width: 120px !important;
    }

    a {
      margin: 0.2rem;
      font-size: 12px;
    }
  }
`
