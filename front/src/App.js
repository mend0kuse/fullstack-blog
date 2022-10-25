import './App.scss';
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter';
import Header from './components/header/Header';
import { authContext } from './context/authContext'
import { useState } from 'react';

function App() {
  const [jwtToken, setJwtToken] = useState('')

  return (
    <authContext.Provider value={{ jwtToken, setJwtToken }}>
      <BrowserRouter>
        <Header />
        <AppRouter />
      </BrowserRouter>
    </authContext.Provider>

  );
}

export default App;
