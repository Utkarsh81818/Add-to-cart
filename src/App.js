import React,{useState} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './components/Cart/Cart';
import Dashboard from './components/Dashboard/Dashboard';
import Error from './components/error/Error';
import Home from './components/home/Home';
import Navbar from './components/Navbar/Navbar';
import Signin from './components/Signin/Signin'
import Signup from './components/Signup/Signup'

const App = () => {

  const [view, setView ] = useState(0)
  const onSetView = (data) => {
        setView(data);
  }

  return (
    <>
    <BrowserRouter>
    {view===1 ? (<Dashboard onSetView={onSetView}/>) :
    (<Navbar />)}
      <Routes>
        <Route path="/" element={<Signup />} />
          <Route path="signin" element={<Signin onSetView={onSetView} />} />
          <Route path="home" element={<Home onSetView={onSetView} />} />
          <Route path="cart" element={<Cart />} />
        <Route path="*" element={<Error />} / >
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App