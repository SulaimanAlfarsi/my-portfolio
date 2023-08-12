import React from 'react';
import './index.css';
import Home from './routes/Home';
import About from './routes/About';
import Project from './routes/Project';
import Contact from './routes/Contact';
import Video from './components/Video';
import PictureGallery from './components/PictureGallery ';
import TacGame from './routes/TacGame';
import { Route , Routes } from 'react-router-dom';
import CandyCursh from './routes/CandyCursh';
import Rigister from './routes/Rigister';
import Log from './routes/Log';
import Admin from './routes/Admin';




function App() {
  return (
    <>
    <Routes>
    <Route  path="/" element={<Home/>}/>
    <Route  path="/login" element={<Log/>}/>
    <Route  path="/admin" element={<Admin/>}/>
    <Route  path="/register" element={<Rigister />}/>
    <Route  path="/project" element={<Project/>}/>
    <Route  path="/about" element={<About/>}/>
    <Route  path="/contact" element={<Contact/>}/>
    <Route  path="/video" element={<Video/>}/>
    <Route  path="/picturegallery" element={<PictureGallery/>}/>
    <Route  path="/tacgame" element={<TacGame/>}/>
    <Route  path="/Candycrush" element={<CandyCursh/>}/>
    </Routes>
    </>
  );
}

export default App;
