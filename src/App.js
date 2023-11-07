import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import DevBlog from './pages/DevBlog';
import Investors from './pages/Investors';
import Footer from './components/Footer';
import ScrollToTop from './utils/ScrollToTop';

function App() {

  const title = "StretchVR";;

  return (
    <>
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <Navbar title={title} />
      <Routes>
        <Route path='/' exact Component={() => <Home title={title} /> }/>
        <Route path='/dev-blog' exact Component={DevBlog} />
        <Route path='/investors' exact Component={Investors} />
      </Routes>
      <Footer title={title} />
    </Router>
    </>
  );
}

export default App;
