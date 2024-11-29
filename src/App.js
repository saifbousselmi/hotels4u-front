import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import About from './pages/About';

import Home from './pages/Home';

import {Routes, Route} from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import Hotels from './pages/Hotels';
import EditHotel from './components/EditHotel';
import Login from './pages/Login';
import { useDispatch, useSelector } from 'react-redux';
import Profile from './pages/Profile';
import { useEffect } from 'react';
import { current } from './JS/Actions/AuthActions';
import Register from './pages/register';
import Contact from './pages/Contact';



function App() {
  const isAuth = useSelector(state => state.AuthReducer.isAuth);
  const dispatch = useDispatch()

  useEffect(() => {
      if (localStorage.getItem("token")) {
        dispatch(current())
      }
  }, [dispatch])
  return (
    <div>
    
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/*" element={<ErrorPage />} />
        <Route path="update-Hotel/:id" element={<EditHotel />} />
        {isAuth ? (
          <Route path="/profile" element={<Profile />} />
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </>
        )}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
