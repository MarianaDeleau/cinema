import React from 'react';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import { Admin, Detail, Home, Login, Movies, Series, Signup, Users } from './pages';
import { QueryClient, QueryClientProvider } from "react-query";
import { UsersProvider } from './contexts';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <UsersProvider>
        <Router>
          <Routes>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/admin' element={<Admin/>}/>
            <Route path='/movies' element={<Movies/>}/>
            <Route path='/series' element={<Series/>}/>
            <Route path='/detail' element={<Detail/>}/>
            <Route path='/users' element={<Users/>}/>
            <Route path='/' element={<Home/>}/>
          </Routes>
        </Router>
      </UsersProvider>
    </QueryClientProvider>
  );
}
//await apiCinema.get( `/movie/${id}/videos`);

export default App;
