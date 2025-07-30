import { useState } from 'react';
import './App.css';
import Footer from './footer'; 
import BottomFooter from './bottomfooter';
import Crousel from './crousel';
import Gallery from './gallery';
import Ourallservices from './ourallservices';
import EmergencyService from "./emergencyservice.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
   <EmergencyService />
    <Ourallservices />
     <Gallery />
    <Crousel />
     <div className="w-full">
      <Footer />
      <BottomFooter />
    </div>
    </>
  );
}

export default App;
