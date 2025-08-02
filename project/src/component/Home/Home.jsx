import React from "react";
import MainHeader from "./MainHeader";
    
import AboutSection from "./AboutSection";
import Crousel from "./crousel";
import CounterSection from "./CounterSection";
import MissionSection from "./MissionSection";
 
import Getfitcsb from "./Getfitcsb";
function HomePage() {
  return (
    <>
     
      <Crousel />
      <AboutSection />
      <CounterSection/>
      <MissionSection/>
       <Getfitcsb/>
     
    </>
  );
}

export default HomePage;
