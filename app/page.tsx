"use client";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import AboutPage from '@/pages/AboutPage/AboutPage';
// import AboutPage from '../pages/AboutPage/AboutPage';
// import WorkPage from '../pages/WorkPage/WorkPage';
// import ExperiencePage from '../pages/ExperiencePage/ExperiencePage';
// import ContactPage from '../pages/ContactPage/ContactPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        {/* <Route path="/work" component={WorkPage} />
        <Route path="/experience" component={ExperiencePage} />
        <Route path="/contact" component={ContactPage} /> */}
      </Routes>
    </Router>
  );
}
