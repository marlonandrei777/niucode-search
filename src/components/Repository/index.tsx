import { CaretRight } from 'phosphor-react';
import { RepositoryDetail } from "./styles";

type RepositoryData = {
  id: number
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  html_url: string;
}

type RepositoryProps = {
  repository: RepositoryData[];
}

export function Repository({ repository }: RepositoryProps) {
  return (
    <RepositoryDetail>
      {repository.map(repo => (
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
              <span>Issues abertas</span>
            </li>
          </ul>
          <CaretRight size={24} />
        </a>
      ))}
    </RepositoryDetail>
  );
}