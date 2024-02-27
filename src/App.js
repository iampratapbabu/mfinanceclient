import './App.css';

import AuthLayout from './layout/AuthLayout'
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import { Route, Routes } from 'react-router-dom';
import UserLayout from './layout/UserLayout';
import UserProfile from './pages/user/UserProfile';

const App = () => {

  const isLoggedIn = true;

  return (
    <>
      <div className="App">
        <p>TejTech</p>
      </div>
      <Routes>
        {
          isLoggedIn ? (
            <>
              <Route path="/" element={<UserLayout />}>
                <Route path="/profile" element={<UserProfile />} />
                <Route path="/home" element={<Login />} />
              </Route>
            </>
          ) : (
            <>
              <Route element={<AuthLayout />}>
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
              </Route>
            </>
          )
        }
      </Routes>
    </>
  );
}

export default App;
