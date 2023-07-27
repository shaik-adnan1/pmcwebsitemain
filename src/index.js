import React from "react";
import {createRoot} from 'react-dom/client';
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import ScrollToTop from "./scrollToTop";

import { HashRouter as BrowserRouter } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Footer from "./routes/footer/footer.component";

const root = createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navigation />
    <ScrollToTop />
      <App />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

// reportWebVitals();
