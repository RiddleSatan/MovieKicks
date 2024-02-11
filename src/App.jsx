import { useState } from 'react'
import { Route,Router } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Card from './components/Card/Card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Card/>
      <Footer/>
    </>
  )
}

export default App