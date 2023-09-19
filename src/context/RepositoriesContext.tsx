import {
  createContext,
  ChangeEvent,
  FormEvent,
  ReactNode,
  useEffect,
  useState,
  useCallback
} from "react";

import { api } from "../services/api";

type UserData = {
  login: string;
  avatar_url: string;
  bio: string;
  email: string;
  location: string;
}

type HistoryProps = {
  user: string
  timestamp: string
}

type RepositoryData = {
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  html_url: string;
}

type RepositoryContextType = {
  newRepo: string;
  users: UserData[];
  inputError: string;
  repositories: RepositoryData[];
  searchHistory: HistoryProps[];
  handleNewUserChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleAddRepository: (event: FormEvent<HTMLFormElement>) => void;
  handleHistoryItemClick: (user: string) => void;
}

type RepositoriesContextProviderProps = {
  children: ReactNode
}

export const RepositoriesContext = createContext({} as RepositoryContextType)

export function RepositoriesContextProvider({ children }: RepositoriesContextProviderProps) {
  const [newRepo, setNewRepo] = useState('');
  const [users, setUsers] = useState<UserData[]>([]);
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<RepositoryData[]>([]);
  const [searchClicked, setSearchClicked] = useState(false);
  // pegando os dados do localStorage apos o carregamento
  const [searchHistory, setSearchHistory] = useState<HistoryProps[]>(() => {
    const storagedHistory = localStorage.getItem('@NiucodeSearch:searchHistory')

    if (storagedHistory) {
      return JSON.parse(storagedHistory)
    } else {
      return []
    }
  });

  /* funcao q pega todo conteudo digitado no textarea */
  function handleNewUserChange(event: ChangeEvent<HTMLInputElement>) {
    setNewRepo(event.target.value)
  }

  // colocando no localStorage
  useEffect(() => {
    localStorage.setItem(
      '@NiucodeSearch:searchHistory',
      JSON.stringify(searchHistory)
    );
  }, [searchHistory])

  const addRepository = useCallback(async () => {
    if (!newRepo) {
      setInputError('Digite o nome do Usuário')
      return;
    }

    try {
      const response = await api.get(`users/${newRepo}`)
      const repos = await api.get(response.data.repos_url)
      const timestamp = new Date().toLocaleString();

      const user = response.data
      const repository = repos.data

      setUsers([user])
      setRepositories(repository)
      setSearchHistory((state) => [
        { user: newRepo, timestamp },
        ...state,
      ]);
      setNewRepo('');
      setInputError('')
    } catch (error) {
      setInputError('Erro na busca por esse usuário')
    }
  }, [newRepo])

  // adicionando usuario e repositorio
  function handleAddRepository(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    addRepository()
  }

  /* observando as mudanças em searchClicked */
  useEffect(() => {
    if (searchClicked) {
      addRepository()
      setSearchClicked(false);
    }
  }, [searchClicked, addRepository]);

  // Preenche o campo de entrada com o nome do user clicado
  function handleHistoryItemClick(user: string) {
    setNewRepo(user);
    setSearchClicked(true)
  }

  return (
    <RepositoriesContext.Provider
      value={{
        newRepo,
        users,
        inputError,
        repositories,
        searchHistory,
        handleNewUserChange,
        handleAddRepository,
        handleHistoryItemClick,
      }}
    >
      {children}
    </RepositoriesContext.Provider>
  );
}
