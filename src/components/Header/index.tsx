import { NavLink } from 'react-router-dom'
import { HeaderContainer } from './styles';
import { Scroll, MagnifyingGlass } from 'phosphor-react';

export function Header() {
  return (
    <HeaderContainer>
      <h1>Niu<span>code</span> Search</h1>

      <nav>
        <NavLink to="/" title='Pesquisar usuário'>
          <MagnifyingGlass size={24} />
        </NavLink>

        <NavLink to="history" title='Histórico'>
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}