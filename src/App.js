import './App.css';
import Nav from './Component/Nav';
import About from './Component/About';
import Gallery from './Component/Gallery';
import Contact from './Component/Contact';
import { BrowserRouter, Navigate, Outlet, Route, Router, Routes } from 'react-router-dom';
import Menu from './Component/Menu';
import Home from './Component/Home';
import Login from './Component/Login';
import Signup from './Component/Signup';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/jquery/dist/jquery.slim";
import Scroll from './Component/Scroll';

function App() {
  return (
    <>
      <BrowserRouter>
        <Scroll />
        <Routes>
          <Route path='/' element={<Nav />}>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
