import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from './Pages/Register'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Nav from './component/Nav'
import { UserContext } from './context/UserContext'

const App = () => {
  const {user} = useContext(UserContext)
  return (
    <div>
     { user && <Nav />}
      <Routes>
        <Route  path='/sign-up' element = {<Register />}/>
        <Route path='/' element = {<Home />}/>
        <Route path='/login' element = {<Login />}/>

      </Routes>
      
    </div>
  )
}

export default App
