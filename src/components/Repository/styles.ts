import styled from "styled-components";

/* export const RepositoryDetail = styled.div`
  margin-top: 2.5rem;

  strong {
    font-size: 2rem;
  }
`; */

export const RepositoryDetail = styled.div`
  margin-top: 2.5rem;

  a {
    background: ${(props) => props.theme.white};
    border-radius: 5px;
    width: 100%;
    padding: 0.625rem;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 1rem;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 1.25rem;
        color: ${(props) => props.theme["gray-400"]};
      }

      p {
        font-size: 1.125rem;
        color: ${(props) => props.theme["gray-300"]};
        margin-top: 4px;
      }
    }

    ul {
      display: flex;
      list-style: none;
      margin-right: 2rem;

      li {
        & + li {
          margin-left: 80px;
        }

        strong {
          display: block;
          font-size: 2.25rem;
          color: ${(props) => props.theme["gray-400"]};
        }

        span {
          display: block;
          margin-top: 0.25rem;
          color: ${(props) => props.theme["gray-300"]};
        }
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
