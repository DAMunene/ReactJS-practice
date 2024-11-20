import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
// import Services from './components/pages/Services';
import Articles from './components/pages/Articles';
import SignUp from './components/pages/Signup';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/services" element={<Services />} /> */}
          <Route path="/articles" element={<Articles />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Router>
      

    </>
  );
}

export default App;
