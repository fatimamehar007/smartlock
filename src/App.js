import logo from './logo.svg';
import './App.css';

import { Route, Routes, Router } from 'react-router-dom';

import SmartLock from './main-page/main-page';
import Login from './login-page/login-page';
import SosCard from './sos-page/sos-page';
import SignUp from './sign-up-page/sign-up';
import AccessPage from './accesss-page/access-page';
import AboutAccount from './about-account/about-account';
import ProtectedRoute from './authentication/protecting-routes';

//------------------------------------------------------------------------------------------
function App() {
  return (
    <Routes>
      <Route path="/sos-card" element={<SosCard />} />
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/about" element={<AboutAccount/>} />
      <Route path="/main" element={<ProtectedRoute> <SmartLock/></ProtectedRoute>} />
      <Route path="/accesss-page" element={<AccessPage />} />
    </Routes>

  );
}

export default App;

