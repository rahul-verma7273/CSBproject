import React, { useState } from 'react';
import '../../../assets/css/Home.css';
import { IoSchool } from "react-icons/io5";
import { IoIosMan } from "react-icons/io";
import { GrUserWorker } from "react-icons/gr";
import { FaRegHandshake, FaHistory, FaMicroscope, FaRegLightbulb } from "react-icons/fa"; // For mission, history, vision, success

function Topbaar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      {/* Top Navigation */}
      <div className="topbaar-header">
        <ul className="nav justify-content-center">
          <li className="nav-item"><a className="nav-link" href="#">Account</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Login</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Register</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Appointment</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
        </ul>
      </div>
      {/* Logo + Info Section */}
      <div className="topbar-main container-fluid">
        <div className="row align-items-center">
          <div className="col-6 col-md-3 logo">
            <img src="src/assets/image/csb_logo.jpg" alt="CSB Logo" />
          </div>
          <div className="col-md-3 d-none d-md-flex contact-info">
            <i className="fa-solid fa-phone"></i>
            <div className="icon_space">
              <p className="label">Customer Support & Sales</p>
              <h6 className="value">9718888056</h6>
            </div>
          </div>
          <div className="col-md-3 d-none d-md-flex contact-info">
            <i className="fa-solid fa-location-dot"></i>
            <div>
              <p className="label">Opening Hours</p>
              <h6 className="value">24 X 7</h6>
            </div>
          </div>
          <div className="col-md-3 d-none d-md-flex search-box">
            <input type="search" placeholder="Search..." />
            <i className="fa-solid fa-magnifying-glass search-icon"></i>
          </div>

          {/* Toggle Button */}
          <div className="col-6 d-md-none text-end">
            <button className="menu-toggle-btn" onClick={toggleMenu}>
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>
      </div>
      {/* Main Navigation */}
      <nav className={`csb-navbar ${menuOpen ? 'open' : ''}`} id="csb-main-navbar">
        <ul className="csb-nav-list">
          <li className="csb-nav-item csb-active" id="lefts">
            <a className="csb-nav-link" href="#" >Home</a>
          </li>

          <li className="csb-nav-item csb-dropdown">
            <a className="csb-nav-link" href="#">Services <i className="fa-solid fa-chevron-down"></i></a>
            <ul className="csb-dropdown-menu">
              <li><a href="#">General Checkup</a></li>
              <li><a href="#">Lab Test</a></li>
              <li><a href="#">Health Packages</a></li>
            </ul>
          </li>

          <li className="csb-nav-item">
            <a className="csb-nav-link" href="#">Gallery</a>
          </li>

          <li className="csb-nav-item csb-dropdown">
            <a className="csb-nav-link" href="#">About Us <i className="fa-solid fa-chevron-down"></i></a>
            <ul className="csb-dropdown-menu">
              <li><a href="#">About CSB</a></li>
              <li><a href="#">Our Doctors</a></li>
              <li><a href="#">Appointment</a></li>
              <li><a href="#">Testimonial</a></li>
              <li><a href="#">FAQ's</a></li>
              <li><a href="#">Blood Test</a></li>
            </ul>
          </li>

          <li className="csb-nav-item csb-dropdown">
            <a className="csb-nav-link" href="#">Blog <i className="fa-solid fa-chevron-down"></i></a>
            <ul className="csb-dropdown-menu">
              <li><a href="#">Latest News</a></li>
              <li><a href="#">Health Tips</a></li>
            </ul>
          </li>

          <li className="csb-nav-item">
            <a className="csb-nav-link" href="#">Contact</a>
          </li>

          <li className="csb-nav-item csb-active" id="right">
            <a className="csb-nav-link" href="#">I Want To <i className="fa-solid fa-chevron-down"></i></a>
          </li>
        </ul>
      </nav>
      <section id="about" className="section-padding mb-0 l-curve-animation mt-5 position-relative">
  {/* Red stars background */}
  <div className="container position-relative">
    <div className="row">
      <div className="col-lg-6 sparkle-effect col-md-6 col-sm-12 col-12 pr-lg-5 pr-md-5 pr-sm-0 pr-0 mb-lg-0 mb-md-0 mb-sm-5 mb-5 about-us-into">
        <h6>Since 2020, Jasana, Faridabad</h6>
        <h1>Welcome to <span>CSB Hospital</span></h1>
        <p className="font-color">
          Because Life is Precious – is a premier healthcare institution
          committed to setting the highest standards in patient care. With a
          focus on excellence, CSB Hospital integrates advanced medical
          technologies with a compassionate, patient-centered approach. Our
          team of highly skilled doctors, specialists, and healthcare
          professionals is dedicated to providing comprehensive and
          personalized care across a wide range of specialties.
        </p>
      </div>
      <div className="col-lg-6 sparkle-effect col-md-6 col-sm-12 col-12">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12">
            <img className="img-fluid mb-4" src="src/assets/image/1.webp" alt="Service 1" />
            <img className="img-fluid" src="src/assets/image/3.webp" alt="Service 3" />
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <img className="img-fluid mb-4" src="src/assets/image/2.webp" alt="Service 2" />
            <img className="img-fluid" src="src/assets/image/4.webp" alt="Service 4" />
          </div>
        </div>
      </div>
    </div>
    <div className="row mt-5">
      <div className="col-lg-6 col-md-6 col-12 mt-2">
        <div className="emergency-feature feature-box">
          <div className="feature-icon">
            <i className="fa-solid fa-truck-medical pulse-animation"></i>
          </div>
          <div className="feature-content">
            <h5>Emergency Treatment</h5>
            <p>
              Our hospital provides immediate emergency treatment for a wide
              range of medical conditions, ensuring prompt and expert care.
              With a dedicated team and state-of-the-art facilities, we
              prioritize critical care to stabilize and support patients in
              urgent need.
            </p>
            <a href="/about/" className="read-more">Read More</a>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-12 mt-2">
        <div className="lab-feature feature-box">
          <div className="feature-icon">
            <i className="fa-solid fa-flask vial-animation"></i>
          </div>
          <div className="feature-content">
            <h5>High Quality Laboratory</h5>
            <p>
              Our hospital features a high-quality laboratory equipped with
              advanced diagnostic tools for accurate and timely test
              results. With a team of skilled professionals, we ensure
              reliable analysis to support effective treatment and patient
              care.
            </p>
            <a href="/about/" className="read-more">Read More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section id="counter" className="counter-section overlay section-padding section-back-image mb-4">
  <div className="container">
    <div className="row wow fadeInDown">
      <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-lg-0 mb-md-4 mb-sm-4 mb-4">
        <div className="single-counter">
          <div className="single-counter-icon">
          <IoSchool  class="single-count-size"/>           </div>
          <div className="single-counter-text">
            <h5 className="timer">16</h5>
            <p>Medical Experience</p>
          </div>
        </div>
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-lg-0 mb-md-4 mb-sm-4 mb-4">
        <div className="single-counter">
          <div className="single-counter-icon">
          <IoIosMan class="single-count-size"/>

            </div>
          <div className="single-counter-text">
            <h5 className="timer">10</h5>
            <p>Total Doctors</p>
          </div>
        </div>
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-lg-0 mb-md-4 mb-sm-4 mb-4">
        <div className="single-counter">
          <div className="single-counter-icon">
          <GrUserWorker class="single-count-size"/>

          </div>
          <div className="single-counter-text">
            <h5 className="timer">50</h5>
            <p>Medical Workers</p>
          </div>
        </div>
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-lg-0 mb-md-4 mb-sm-4 mb-4">
        <div className="single-counter">
          <div className="single-counter-icon">
          <IoIosMan class="single-count-size"/>
          </div>
          <div className="single-counter-text">
            <h5 className="timer">550</h5>
            <p>Happy Patients</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="csb-mission-section py-5 text-center">
  <div className="container">
    <h2 className="mb-4">Let's Get Fit <span className="highlight">With CSB</span></h2>
    <div className="divider-icon mb-5">━●━</div>
    <div className="row">
      <div className="col-md-3 col-6 mb-4">
        <div className="mission-box">
          <FaRegHandshake size={50} className="mb-3 text-primary" />
          <h5 className="font-weight-bold">OUR MISSION</h5>
          <p>"Compassionate care, excellence in treatment, patient well-being."</p>
        </div>
      </div>
      <div className="col-md-3 col-6 mb-4">
        <div className="mission-box">
          <FaHistory size={50} className="mb-3 text-primary" />
          <h5 className="font-weight-bold">OUR HISTORY</h5>
          <p>"Built on trust, dedicated to healing."</p>
        </div>
      </div>
      <div className="col-md-3 col-6 mb-4">
        <div className="mission-box">
          <FaMicroscope size={50} className="mb-3 text-primary" />
          <h5 className="font-weight-bold">OUR VISION</h5>
          <p>"Empowering health, advancing care, improving lives."</p>
        </div>
      </div>
      <div className="col-md-3 col-6 mb-4">
        <div className="mission-box">
          <FaRegLightbulb size={50} className="mb-3 text-primary" />
          <h5 className="font-weight-bold">OUR SUCCESS</h5>
          <p>"Delivering results, fostering health, achieving excellence."</p>
        </div>
      </div>
    </div>
  </div>
</section>
<section>
</section>
    </>
  );
}
export default Topbaar;