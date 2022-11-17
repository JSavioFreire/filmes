import { BrowserRouter, Routes, Route } from 'react-router-dom' 

import Home from './pages/Home'
import Tv from './pages/Tv'
import Dynamics from './pages/dynamics'
import DynamicsSeries from './pages/dynamicsSeries'

import Header from './components/header'
import NavBar from './components/NavBar'

import { GlobalStyle,theme } from './styled/globalStyled'
import { ThemeProvider } from 'styled-components'


function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Header/>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/tv' element={<Tv/>} />
          <Route path='/tvandmovie/:id' element={<Dynamics/>}/>
          <Route path='/tvandmovies/:id' element={<DynamicsSeries/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
