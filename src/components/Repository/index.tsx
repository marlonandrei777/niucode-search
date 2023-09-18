import { useContext } from 'react'
import { CaretRight } from 'phosphor-react';
import { RepositoryDetail } from "./styles";
import { RepositoriesContext } from '../../context/RepositoriesContext';

export function Repository() {
  const { repositories } = useContext(RepositoriesContext)

  return (
    <RepositoryDetail>
      {repositories.map(repo => (
        <a key={repo.id} href={repo.html_url} target="blank">
          <div>
            <strong>{repo.name}</strong>

            <p>{repo.description}</p>
            <p>{repo.html_url}</p>
          </div>

          <ul>
            <li>
              <strong>{repo.stargazers_count}</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>{repo.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{repo.open_issues_count}</strong>
              <span>Issues</span>
            </li>

          </ul>
          <CaretRight size={24} />
        </a>
      ))}
    </RepositoryDetail>
  );
}