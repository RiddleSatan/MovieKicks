import { useState,useEffect } from 'react'
import { Route,Router } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Card from './components/Card/Card.jsx'
import axios from 'axios'




function App() {
  useEffect(()=>{
    axios({
      method: 'GET',
      url: 'https://imdb8.p.rapidapi.com/auto-complete',
      params: {q: 'game of thr'},
      headers: {
        'X-RapidAPI-Key': '1026cea75bmsh3d6c23b626ef8f8p1ca301jsnd209f88f37f8',
        'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
      }
    })
    .then(
  (res)=>{console.log(res.data)}
    )
    .catch((err)=>{
     console.error("Error in fetching the data ",err)
    })
  },[])
  

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