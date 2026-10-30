import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/home.jsx'
import ContactPage from './pages/contact.jsx'
import ServicesPage from './pages/services.jsx'
import AboutPage from './pages/about.jsx'
import LoginPage from './pages/login.jsx'
import NotFoundPage from './pages/notFound.jsx'


function App() {

  return (
    <BrowserRouter>
      <Header />
      <main className="container">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/services' element={<ServicesPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}


export default App


