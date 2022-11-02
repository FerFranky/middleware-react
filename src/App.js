import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { HOME, LOGIN, LOGOUT, PRIVATE } from './config/routes/paths';
import Home from './views/Home';
import Login from './views/Login';
import Logout from './views/Logout';
import Private from './views/Private';
import AuthContextProvider from './context/authContext';

function App() {
  return (
    <AuthContextProvider>
    <BrowserRouter>
      <Routes>
         <Route path={HOME} element={<Home />} />
         <Route path={LOGIN} element={<Login />} />
         <Route path={PRIVATE} element={<Private />} />
         <Route path={LOGOUT} element={<Logout />} />
      </Routes>
    </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
