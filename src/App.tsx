import { ThemeProvider } from "styled-components"
import { Search } from "./pages/Search/index"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <Search />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
