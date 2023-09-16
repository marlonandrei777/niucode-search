import styled from "styled-components";

export const HistoryContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 0.1rem;
`;

export const HistoryList = styled.div`
  flex: 1;

  overflow: auto;
  margin-top: 2rem;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;

    th {
      background-color: ${(props) => props.theme["gray-100"]};
      padding: 1rem;
      text-align: left;
      font-size: 1.25rem;
      line-height: 1.6;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }

      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }

    a {
      text-decoration: none;
      color: ${(props) => props.theme["gray-300"]};

      &:hover {
        color: ${(props) => props.theme["gray-400"]};
      }
    }

    td {
      background-color: ${(props) => props.theme["gray-100"]};
      border-top: 4px solid #fff;
      padding: 1rem;
      font-size: 1.125rem;
      line-height: 1.6;
      color: ${(props) => props.theme["gray-300"]};

      &:first-child {
        width: 50%;
        padding-left: 1.5rem;
      }

      &:last-child {
        padding-right: 1.5rem;
      }
    }
  }
`;

export const Enpty = styled.div`
  margin: 10rem auto;

  font-size: 30px;
  color: ${(props) => props.theme["gray-300"]};

  display: flex;
  align-items: center;
  gap: 1rem;
`;
