import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header'
import Login from './component/Login'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './component/Home';
import Register from './component/Register'
function App() {
  

  return (
    <>
 <BrowserRouter>
 <Header></Header>
  
 <Routes>
  <Route path='/' element={  <Login></Login>}></Route>
  <Route path='/register' element ={<Register></Register>}></Route>
  <Route path='/Home' element={<Home></Home>}></Route>
 </Routes>
 </BrowserRouter>
    </>
  )
}

export default App
