import React, {useEffect }from 'react';
import { BrowserRouter as Router, Routes, Route,useLocation } from "react-router-dom";
import Layout from "./Components/Layout";
import Landing from "./pages/Landing/Landing.jsx";
import PrivacyPage from "./pages/Landing/PrivacyPolicy.jsx";
import About from "./pages/Landing/About.jsx";
import Bootcamp from "./pages/Landing/Bootcamp.jsx";
import Course from "./pages/Landing/Course.jsx";
import Form from "./pages/Landing/Form.jsx";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Login from "./pages/Landing/Login.jsx";


function Scroll() {
    const location = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0); 
    }, [location]);
    return null;
}  
  
  function App(){  
  return (
    <Router>
      <Scroll/>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Landing />
            </Layout>
          }
        />
        <Route
        path="/privacy"
        element={
          <Layout>
            <PrivacyPage />
          </Layout>
        }
        />
        <Route
        path="/about" 
        element={
          <Layout>
            <About/>
          </Layout>
        }
        />
        <Route
        path="/bootcamp"
        element={
          <Layout>
            <Bootcamp/>
          </Layout>
        }
        />
        <Route
        path="/course"
        element={
          <Layout>
            <Course/>
          </Layout>
        }/>
        <Route
        path="/form"
        element={
          <Layout>
            <Form/>
          </Layout>
        }
        />
        <Route
        path="/login"
        element={
          <Layout>
            <Login/>
          </Layout>
        }
        />
      </Routes>
    </Router> 
  );
}

export default App;
