import { RepositoriesContextProvider } from "./context/RepositoriesContext"
import { ThemeProvider } from "styled-components"
import { Router } from "./routes"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <RepositoriesContextProvider>
        <Router />
      </RepositoriesContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
