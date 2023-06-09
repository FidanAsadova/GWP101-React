import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';


const App = () => {
  return (
    <div className='App'>
      <Header/>
      <Outlet/>
      {/* <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/blog' element={<Blog/>}/>
      </Routes> */}
      <Footer/>
    </div>
  )
}

export default App