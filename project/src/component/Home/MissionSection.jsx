import React from "react";
import bgimg from "../../assets/photo/bg_bg.png";
import image1 from "../../assets/photo/doct_1_6_qYkDNR2_vpWhyur_MNBu0hr.webp";
import image2 from "../../assets/photo/124_NmcozL5.webp";
import image3 from "../../assets/photo/3_DgHDcKU.webp";
import image4 from "../../assets/photo/doct_3_2_QtRtMsW.webp";

const doctors = [
  {
    name: "DR. AJAY NAGAR",
    image: image1,
    bio: "Dr. Ajay Nagar is a renowned with over 10 years of experience in cardiology with a track record of successful treatments.",
  },
  {
    name: "DR. PANKAJ CHHABRA",
    image: image3,
    bio: "Dr. Pankaj Chhabra is a renowned with over Dr Pankaj Chhabra has over 18 years of experience in treating respiratory & Sleep Disorders.",
  },
  {
    name: "DR. VISHAL KHURANA",
    image: image4,
    bio: "Dr. Vishal Khurana is a renowned with over over 10 years of eperience in diagnosing and treating gastrointestinal conditions.",
  },
  {
    name: "DR. GAURAV GUPTA",
    image: image2,
    bio: "Dr. Gaurav Gupta is a renowned with over Dr Gaurav Gupta has been more than 8 years of experience in treating patients with Respiratory illnesses..",
  },
];

const MissionSection = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgimg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0  z-0"></div>

      {/* Content */}
      <div className="relative z-10 px-4 py-16 md:py-24">
        {/* Heading and Description */}
        <div className="max-w-4xl mx-auto text-white text-center mb-12 px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-black px-2">Our</span> Specialities
          </h2>
          <div className="relative flex justify-center items-center mt-2 mb-4">
            <hr className="border-t-[2px] border-white w-[100px]" />
            <div className="h-3 w-3 rounded-full bg-white absolute left-1/2 -translate-x-1/2"></div>
          </div>
          <p className="text-sm md:text-base leading-relaxed font-serif">
            At our hospital, we take pride in having a dedicated team of highly
            skilled specialists across a wide range of medical fields. With
            years of experience and a commitment to patient-centered care, our
            specialists ensure that every patient receives the best possible
            treatment tailored to their unique needs.
          </p>
        </div>

        {/* Doctor Cards */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="relative w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1.5rem)] lg:w-[calc(25%-1.5rem)] overflow-hidden shadow-lg group bg-white bg-opacity-90 backdrop-blur-md rounded"
            >
              {/* Image section */}
              <div className="relative w-full h-[300px] overflow-hidden">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#fd5753] bg-opacity-95 text-white px-6 py-8 flex flex-col justify-center items-center text-center transition-transform duration-500 transform translate-y-full group-hover:translate-y-0">
                  <h5 className="text-lg font-semibold mb-3 w-full text-center border-b border-white pb-2">
                    About Doctor
                  </h5>
                  <p className="text-sm leading-relaxed mb-4">{doctor.bio}</p>
                  <button className="bg-white text-[#fd5753] px-4 py-2 rounded hover:bg-gray-100 font-semibold">
                    Get Appointment
                  </button>
                </div>
              </div>

              {/* Name section */}
              <div className="p-3 text-center">
                <h6 className="text-md font-bold text-gray-800 uppercase">
                  {doctor.name}
                </h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MissionSection;
