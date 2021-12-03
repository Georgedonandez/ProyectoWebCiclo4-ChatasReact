import React from 'react';

import Header from './components/Header'
import News from './components/Noticias'
import About from './components/About';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer'


function App() {
  return (
    <div>
      <Header></Header>
      <News/>
      <About></About>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </div>
  );
}

export default App;

/*
import React from 'react';
import {BrowserRouter as Router,Route, Routes,Redirect} from 'react-router-dom'

import './App.css';

import Admin from './Admin.jsx';

import Header from './components/Header'
import About from './components/About';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer'

const auth = () => {

  const token = sessionStorage.getItem('token');

  if (token) {
    return true;
  }
  else{
    return false;
  }

}

function App() {
  return (
    <div>
      <Header></Header>
      <About></About>
      <ContactForm /> 
      <Footer></Footer>
    </div>
  );
}

export default App;
*/