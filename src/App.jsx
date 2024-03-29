import { useState, useEffect } from "react";
import { Outlet, Route, Router } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Card from "./components/Card/Card.jsx";
import axios from "axios";
import UserContextProvider from "./context/UserContextProvider.jsx";

function App() {  
  return (
    <UserContextProvider>
      <Header />
      <Outlet />
      <Footer />
    </UserContextProvider> 
  );
}

export default App;
