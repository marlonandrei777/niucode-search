import styled from "styled-components";

export const Title = styled.h1`
  font-size: 3rem;
  max-width: 37.5rem; //break
  line-height: 56px;
  margin-top: 6.38rem;
`;

export const Form = styled.form`
  margin-top: 2.5rem;

  display: flex;
  align-items: center;

  border: 1px solid ${(props) => props.theme["gray-200"]};
  border-radius: 5px;
  background: ${(props) => props.theme["gray-100"]};

  input {
    flex: 1;
    height: 4.5rem;
    padding: 0 1.56rem;
    border: 0;
    font-size: 1.25rem;
    background-color: transparent;

    @media (max-width: 526px) {
      font-size: 1rem;
    }
  }

  button {
    width: 14.125rem;
    height: 4rem;
    margin-right: 4px;

    background: ${(props) => props.theme["blue-100"]};
    border-radius: 5px;
    border: 0;
    color: ${(props) => props.theme["white"]};

    font-weight: bold;
    font-size: 1.125rem;

    transition: background-color 0.2s;

    &:hover {
      background: #003edb;
    }
  }
`;

export const Error = styled.span`
  display: block;
  margin-top: 0.5rem;
  color: ${(props) => props.theme.error};
`;

export const RepositoryUser = styled.div`
  margin-top: 7.5rem;
  background: ${(props) => props.theme["gray-100"]};
  border-radius: 5px;
  width: 100%;
  padding: 1.5rem;

  header {
    display: flex;
    align-items: center;

    img {
      width: 7.5rem;
      height: 7.5rem;
      border-radius: 50%;
    }

    div {
      margin-left: 1.5rem;

      strong {
        font-size: 2.25rem;
      }

      p {
        font-size: 1.125rem;
        color: ${(props) => props.theme["gray-300"]};
        margin-top: 0.25rem;
      }
    }
  }
`;
