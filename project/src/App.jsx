import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Gallery from './component/gallery/gallery';
import Ourallservices from './component/Services/ourallservices.jsx';
import EmergencyService from "./component/Services/emergencyservice.jsx";
import Healthcheck from './component/Services/healthcheck.jsx';
import Homecare from './component/Services/homecare.jsx';
import HomePage from './component/Home/Home.jsx';
import MainHeader from "./component/Home/MainHeader";
import Footer from './component/Home/Footer/Footer'
import BottomFooter from './component/Home/Footer/bottomfooter'
import Diabetes from './component/Services/Diabetes.jsx';
function App() {
  return (
    
     
    <Router>
       <> 
      <MainHeader/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/homecare" element={<Homecare />} />
        <Route path="/healthcheck" element={<Healthcheck />} />
        <Route path="/emergency" element={<EmergencyService />} />
        <Route path="/services" element={<Ourallservices />} />
        <Route path="/diabetes" element={<Diabetes />} />
        <Route path="/gallery" element={<Gallery />} />

      </Routes>
       <div className="w-full">
      <Footer />
      <BottomFooter />
    </div>
    </>
    </Router>
      
     
  );
}

export default App;
