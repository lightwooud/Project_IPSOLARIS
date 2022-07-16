import { ThemeProvider } from 'styled-components'
import Header from './components/Header'
import Footer from './components/Footer'
import Formulario from './components/Formulario'
import { Container } from './components/styles/Container.styled'
import GlobalStyles from './components/styles/Global'
import content from './components/content'
import React from 'react'
import Home from './components/Home'



const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  },
  mobile: '768px',
}


  function App() {
    return (
      <>
      <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Header />
          <Container>
            
            <Home />
          </Container>
          <Footer />  
      </ThemeProvider>
      </>
    )
  }


export default App;
