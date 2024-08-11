import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient()

ReactDOM.render(
  <React.StrictMode>
      <Router>
      <Routes>
    <Route path='/*' element={
  <QueryClientProvider client={queryClient}>       
      
      <App />
  </QueryClientProvider>} />
    </Routes>
    </Router>
  </React.StrictMode>
  ,
  document.getElementById('root')
);
