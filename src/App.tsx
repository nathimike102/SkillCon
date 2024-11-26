import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Features from './components/Features';
import GetStarted from './pages/GetStarted';
import Projects from './pages/Projects';
import ImpactStories from './pages/ImpactStories';
import Nonprofits from './pages/Nonprofits'; 
import AboutUs from './pages/AboutUs';
import Login from './pages/Login';

function Home() {
  return (
    <>
      <Hero />
      <Features />
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-purple-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/get-started" element={<GetStarted />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/impact-stories" element={<ImpactStories />} />
            <Route path="/non-profits" element={<Nonprofits />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;