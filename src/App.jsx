import { useState,useEffect } from 'react'
import { Route,Router } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Card from './components/Card/Card.jsx'
import axios from 'axios'




function App() {
 

  return (
    <>
      <Header/>
      <Card/>
      <Footer/>
    </>
  )
}

export default App