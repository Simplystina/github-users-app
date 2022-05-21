import React from 'react'
import {Link, Routes, Route, BrowserRouter as Router} from 'react-router-dom'
import Dashboard from './Pages/Dashboard/Dashboard'
import Login from './Pages/Login/Login'
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact={true} path='/' element={<Login/>}></Route>
          <Route exact={true} path='dashboard' element={<Dashboard/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
