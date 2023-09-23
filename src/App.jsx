
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Timelinee';
// import About from './pages/About';
import Navbar from './components/navbar/Navbar';
import './App.css'
import TimeLinee from './pages/Timelinee';
import Register from './container/register/Register';
import Contact from './container/contact/Contact';

function App() {

  return (
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<TimeLinee/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='register' element={<Register/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
