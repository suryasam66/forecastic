
import {  Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css'
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Weather from './components/Weather/Weather.jsx';
import Analytics from './components/Menu/Analytics.jsx';
import Calender from './components/Menu/Calender.jsx';
import Locations from './components/Menu/Locations.jsx';
import Settings from './components/Menu/Settings.jsx';
import Select from 'react-select';

export default function App() {
 

  return (

   
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/weather" element={<Weather/>}/>
        <Route path="/analytics" element={<Analytics/>}/>
        <Route path="/calender" element={<Calender />}/>
        <Route path="/locations" element={<Locations/>}/>
        <Route path="/settings" element={<Settings/>}/>
        

      </Routes>
    </BrowserRouter>   
  )
}


