import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Admin,
  Detail,
  Home,
  Login,
  Movies,
  Series,
  Signup,
  Users,
} from "./pages";
import { QueryClient, QueryClientProvider } from "react-query";
import { UsersProvider } from "./contexts";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <UsersProvider>
        <Router>
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/series" element={<Series />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/users" element={<Users />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/" element={<Login />} />
          </Routes>
        </Router>
      </UsersProvider>
    </QueryClientProvider>
  );
};

export default App;
