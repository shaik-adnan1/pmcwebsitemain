import logo from "./logo.svg";

// import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

// // Specify all properties: name, family, style
// icon({ name: "user", family: "classic", style: "solid" });
// icon({ name: "user", family: "classic", style: "regular" });


import "./App.css";

import Home from "./routes/home/home.component";
import About from "./routes/about/about.component";
import Contact from "./routes/contact/contact.component";
import Events from "./routes/events/events.component";
import Mentors from "./routes/mentors/mentors.component";

import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Footer from "./routes/footer/footer.component";

const App = () => {
  return (
    
    <Routes>
      {/* <Route path='/' element={<Navigation />}>  */}
      
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='events' element={<Events />} />
        <Route path='peerMentors' element={<Mentors />} />
        <Route path='contacts' element={<Contact />} />
        {/* <Route path="/" element={<Footer />}></Route> */}
      {/* </Route> */}
    </Routes>
  );
};

export default App;
