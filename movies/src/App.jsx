import { ThemeProvider } from 'styled-components'
import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import Header from './components/header'
import Home from './pages/Home'
import { GlobalStyle,theme } from './styled/globalStyled'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
