import './App.css';

import AuthLayout from './layout/AuthLayout'
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import { Navigate, Route, Routes } from 'react-router-dom';
import UserLayout from './layout/UserLayout';
import UserProfile from './pages/user/UserProfile';
import NotFound from './pages/NotFound';
import HomePage from './pages/HomePage';

const App = () => {

  const isLoggedIn = false;

  return (
    <>
      <Routes>
        {
          isLoggedIn ? (
            <>
              <Route path="/" element={<UserLayout />}>
              <Route path="home" element={<HomePage />} />
                <Route path="profile" element={<UserProfile />} />
              </Route>
              <Route path='*' element={<NotFound />} />
            </>
          ) : (
            <>
              <Route path="/" element={<AuthLayout />}>
                <Route path="signup" element={<Signup />} />
                <Route path="login" element={<Login />} />
              </Route>

              <Route path="*" element={<Navigate to="/login" replace={true} />} />
            </>
          )
        }
      </Routes>
    </>
  );
}

export default App;
