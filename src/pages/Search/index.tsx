import { useContext } from 'react'
import { Repository } from '../../components/Repository';
import { RepositoriesContext } from '../../context/RepositoriesContext';
import { Title, Form, RepositoryUser, Error } from "./styles";

export function Search() {
  const {
    newRepo,
    handleAddRepository,
    handleNewUserChange,
    inputError,
    users,
    repositories
  } = useContext(RepositoriesContext)

  return (
    <>
      <Title>Procure por repositórios de usuários do GitHub.</Title>

      <Form onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={handleNewUserChange}
          type="text"
          placeholder="Digite o nome do usuário"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      {!users.length ? "" :
        <RepositoryUser>
          {users.map(user => (
            <header key={user.login}>
              <img
                src={user.avatar_url}
                alt={user.login}
              />

              <div>
                <strong>{user.login}</strong>
                <p>{user.bio}</p>
                <p>{user.email}</p>
                <p>{user.location}</p>
              </div>
            </header>
          ))}

          <Repository repository={repositories} />
        </RepositoryUser>
      }
    </>
  );
}
