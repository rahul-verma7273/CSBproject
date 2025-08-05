import React from "react";
import { FaTruckMedical } from "react-icons/fa6";  // FontAwesome 6
import { FaFlask, FaPhoneAlt } from "react-icons/fa";  // FontAwesome 5


 {/* About Section */}
function AboutSection(){
    return(
        <>
         {/* About Section */}
      <section id="about" className="py-12 relative">
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
              <h6 className="text-gray-600">Since 2020, Jasana, Faridabad</h6>
              <h1 className="text-3xl font-bold mt-2 mb-4">Welcome to <span className="text-red-500">CSB Hospital</span></h1>
               <p className="text-gray-500 font-serif"> 
                Because Life is Precious – is a premier healthcare institution
                committed to setting the highest standards in patient care. With a
                focus on excellence, CSB Hospital integrates advanced medical
                technologies with a compassionate, patient-centered approach. Our
                team of highly skilled doctors, specialists, and healthcare
                professionals is dedicated to providing comprehensive and
                personalized care across a wide range of specialties.
              </p>
            </div>
            <div className="w-full lg:w-1/2 md:w-1/2">
              <div className="flex flex-wrap">
                <div className="w-1/2 px-1">
                  <img className="w-full mb-4 rounded" src="src/assets/image/1.webp" alt="Service 1" />
                  <img className="w-full rounded" src="src/assets/image/3.webp" alt="Service 3" />
                </div>
                <div className="w-1/2 px-1">
                  <img className="w-full mb-4 rounded" src="src/assets/image/2.webp" alt="Service 2" />
                  <img className="w-full rounded" src="src/assets/image/4.webp" alt="Service 4" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap mt-8 md:mt-12">
  {/* Emergency Treatment Card */}
  <div className="w-full md:w-1/2 px-2 mb-4">
    <div className="flex p-4 md:p-5 hover:bg-red-50 hover:shadow-lg rounded-lg transition-all duration-300">
      {/* Icon */}
      <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-gray-100 rounded-full flex items-center justify-center mr-4 md:mr-5">
        <FaTruckMedical className="text-red-500 text-xl md:text-2xl animate-pulse" />
      </div>

      {/* Content */}
      <div>
        <h5 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">
          Emergency Treatment
        </h5>
        <p className="text-sm md:text-base text-gray-600 mb-2 md:mb-3 leading-relaxed font-serif">
          Our hospital provides immediate emergency treatment for a wide
          range of medical conditions, ensuring prompt and expert care.
          With a dedicated team and state-of-the-art facilities, we
          prioritize critical care to stabilize and support patients in
          urgent need.
        </p>
        <a
          href="/about/"
          className="text-sm md:text-base text-gray-600 font-semibold hover:text-red-500 transition-colors duration-300"
        >
          Read More
        </a>
      </div>
    </div>
  </div>

  {/* High Quality Laboratory Card */}
  <div className="w-full md:w-1/2 px-2 mb-4">
    <div className="flex p-4 md:p-5 hover:bg-red-50 hover:shadow-lg rounded-lg transition-all duration-300">
      {/* Icon */}
      <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-gray-100 rounded-full flex items-center justify-center mr-4 md:mr-5">
        <FaFlask className="text-red-500 text-xl md:text-2xl animate-bounce" />
      </div>

      {/* Content */}
      <div>
        <h5 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">
          High Quality Laboratory
        </h5>
        <p className="text-sm md:text-base text-gray-600 mb-2 md:mb-3 leading-relaxed font-serif">
          Our hospital features a high-quality laboratory equipped with
          advanced diagnostic tools for accurate and timely test results.
          With a team of skilled professionals, we ensure reliable
          analysis to support effective treatment and patient care.
        </p>
        <a
          href="/about/"
          className="text-sm md:text-base text-gray-600 font-semibold hover:text-red-500 transition-colors duration-300"
        >
          Read More
        </a>
      </div>
    </div>
  </div>
</div>

        </div>
      </section>
        </>

    );
}
export default AboutSection;