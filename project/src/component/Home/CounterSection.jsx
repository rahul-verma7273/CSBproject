import React from 'react';
import { IoSchool, IoPerson } from "react-icons/io5";  // Correct imports
import { GrUserWorker } from "react-icons/gr";

function CounterSection() {
  return (
    <>
      {/* Counter Section */}
      <section id="counter" className="py-12 bg-gradient-to-r from-[#fd5753] to-[#fd5753] text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            {/* Medical Experience */}
            <div className="w-full md:w-1/2 lg:w-1/4 px-2 mb-8">
              <div className="flex items-center">
                <div className="w-20 h-20 border border-white rounded-bl-4xl  hover:rounded-tr-4xl hover:rounded-bl flex items-center justify-center mr-4 transition-colors duration-300 hover:bg-white hover:text-red-700">
                  <IoSchool className="text-3xl" />
                </div>
                <div>
                  <h5 className="text-3xl font-bold">16</h5>
                  <p>Medical Experience</p>
                </div>
              </div>
            </div>

            {/* Total Doctors */}
            <div className="w-full md:w-1/2 lg:w-1/4 px-2 mb-8">
              <div className="flex items-center">
                <div className="w-20 h-20 border border-white rounded-bl-4xl hover:rounded-tr-4xl hover:rounded-bl flex items-center justify-center mr-4 transition-colors duration-300 hover:bg-white hover:text-red-700">
                  <IoPerson className="text-3xl" />
                </div>
                <div>
                  <h5 className="text-3xl font-bold">10</h5>
                  <p>Total Doctors</p>
                </div>
              </div>
            </div>

            {/* Medical Workers */}
            <div className="w-full md:w-1/2 lg:w-1/4 px-2 mb-8">
              <div className="flex items-center">
                <div className="w-20 h-20 border border-white rounded-bl-4xl hover:rounded-tr-4xl hover:rounded-bl flex items-center justify-center mr-4 transition-colors duration-300 hover:bg-white hover:text-red-700">
                  <GrUserWorker className="text-3xl" />
                </div>
                <div>
                  <h5 className="text-3xl font-bold">50</h5>
                  <p>Medical Workers</p>
                </div>
              </div>
            </div>

            {/* Happy Patients */}
            <div className="w-full md:w-1/2 lg:w-1/4 px-2 mb-8">
              <div className="flex items-center">
                <div className="w-20 h-20 border border-white rounded-bl-4xl hover:rounded-tr-4xl hover:rounded-bl flex items-center justify-center mr-4 transition-colors duration-300 hover:bg-white hover:text-red-700">
                  <IoPerson className="text-3xl" />
                </div>
                <div>
                  <h5 className="text-3xl font-bold">550</h5>
                  <p>Happy Patients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CounterSection;
