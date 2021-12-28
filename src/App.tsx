import React from 'react';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import { Admin, Detail, Home, Login, Movies, Series, Signup } from './Pages';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/series' element={<Series/>}/>
        <Route path='/detail' element={<Detail/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
