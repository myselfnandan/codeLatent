import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './pages/Header.jsx'
import Landing from './pages/Landing.jsx'
import Footer from './pages/Footer.jsx'
import Card from './pages/Card.jsx'
import Testimonials from './pages/Testimonials.jsx'
import AboutSection from './pages/AboutSection.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Header /> */}
    <Landing/>
    <Card/>
    <AboutSection />
    <Testimonials/>
    <Footer/>
  </StrictMode>,
)
