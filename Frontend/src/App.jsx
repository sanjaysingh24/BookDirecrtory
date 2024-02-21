import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header'
import Login from './component/Login'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  

  return (
    <>
 <BrowserRouter>
 <Header></Header>
  
 <Routes>
  <Route path='/' element={  <Login></Login>}>
     
  </Route>
 </Routes>
 </BrowserRouter>
    </>
  )
}

export default App
