import React from 'react';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import { Route, Routes } from 'react-router';
import Jobs from './components/Jobs';
import Profile from './components/Profile';
const App = () => {
  return (
    <div>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/jobs' element={<Jobs/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
      
    </Routes>

    </div>
  )
}

export default App