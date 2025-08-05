import React from "react";
import MainHeader from "./MainHeader";   
import AboutSection from "./AboutSection";
import Crousel from "./crousel";
import CounterSection from "./CounterSection";
import MissionSection from "./MissionSection";
import Getfitcsb from "./Getfitcsb";
import Ourallservices from '../../component/Services/ourallservices.jsx'
import Gallery from "../Gallery/Gallery.jsx";
import Todaynews from "./Todaynews.jsx";
function HomePage() {
  return (
    <>
     
      <Crousel />
      <AboutSection />
      <CounterSection/>
       <Getfitcsb/>
     <Ourallservices />
     <Gallery />
      <MissionSection/>
      <Todaynews />
    </>
  );
}

export default HomePage;
