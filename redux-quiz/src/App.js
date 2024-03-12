import React, {createContext} from 'react';
import './App.css';
import Home from "./components/Home/home"
import Login from './components/Login/login';
import Result from './components/Result/result';
import NotFound from './components/NotFound/notfound';




import ProtectedRoute from './components/ProtectedRoute/protectedRoute';

import {BrowserRouter, Routes, Route} from "react-router-dom"

import { Provider } from 'react-redux';
import store from './reduxContainer/store';




export const quizState = createContext()
function App() {
  
  
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route exact path='/login' Component={Login} />
        <Route exact path="/" element={<ProtectedRoute Component={Home}  />  } />
        <Route exact path='/results' element={<ProtectedRoute Component={Result}/>} />
        <Route path='*' Component={NotFound} />
      </Routes>
      
    </BrowserRouter>
    </Provider>
    
  );
}

export default App;
