import logo from './logo.svg';

import './App.css';

import Home from './routes/home/home.component';
import About from './routes/about/about.component';
import Contact from './routes/contact/contact.component';
import Events from './routes/events/events.component';
import Mentors from './routes/mentors/mentors.component';

import { Routes, Route } from 'react-router-dom';
import  Navigation  from "./routes/navigation/navigation.component";

const App = () => {
  return (
   <Routes>
  <Route path='/' element = {<Navigation />} >
    <Route index element={<Home />} />
    <Route path='about' element={<About />} />
    <Route path='events' element={<Events />} />
    <Route path='peerMentors' element={<Mentors />} />
    <Route path='contacts' element={<Contact />} />
    
  </Route>
   </Routes>
  )
}

export default App;
