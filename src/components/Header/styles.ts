import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    color: ${(props) => props.theme["gray-300"]};
  }

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      width: 3rem;
      height: 3rem;

      display: flex;
      justify-content: center;
      align-items: center;

      color: ${(props) => props.theme["gray-400"]};

      //  voltar pro centro mesmo q a borda n apareça
      border-top: 3px solid transparent;
      //  nao ir pra cima quando usar hover
      border-bottom: 3px solid transparent;

      &:hover {
        border-bottom: 3px solid ${(props) => props.theme["gray-300"]};
      }

      &.active {
        color: ${(props) => props.theme["blue-100"]};
      }
    }
  }
`;
