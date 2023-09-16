import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { RepositoriesContext } from '../../context/RepositoriesContext';
import { GithubLogo } from 'phosphor-react';
import { Title } from '../Search/styles'
import { HistoryContainer, HistoryList, Enpty } from './styles';


export function History() {
  const { searchHistory, handleHistoryItemClick } = useContext(RepositoriesContext)

  return (
    <>
      <Title>Acompanhe o seu histórico de pesquisa.</Title>

      <HistoryContainer>
        {!searchHistory.length ?
          <Enpty>
            <GithubLogo size={32} color="#0046FF" />
            Seu histórico está vazio!
          </Enpty> :
          <HistoryList>
            <table>
              <thead>
                <tr>
                  <th>Usuário</th>
                  <th>Data/Hora</th>
                </tr>
              </thead>
              <tbody>
                {searchHistory.map((searchHistory, index) => (
                  <tr key={index} onClick={() => handleHistoryItemClick(searchHistory.user)}>
                    <td><Link to="/">{searchHistory.user}</Link></td>
                    <td><Link to="/">{searchHistory.timestamp}</Link></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </HistoryList>}
      </HistoryContainer>
    </>
  );
}