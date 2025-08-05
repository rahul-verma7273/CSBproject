import React from 'react';
import { FaUserNinja } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { GiRoundTable } from "react-icons/gi";
import { FaRegThumbsUp } from "react-icons/fa";

function Getfitcsb() {
  return (
    <>
      <div className="relative mt-10 mb-20 px-4">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-semibold text-center mt-5">
          Let's Get Fit With CSB
        </h1>

        {/* Line + Dot */}
       <div className="relative flex justify-center items-center mt-5">
  <hr className="border-t-4 border-black w-3/4 md:w-1/6 " />
  <div className="h-4 w-4 rounded-full bg-black absolute 
                  ">
  </div>
</div>


        {/* Icon + Heading + Text Groups */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-20 mt-10 text-center">
          
          {/* Card 1 */}
          <div className="flex flex-col items-center w-[140px] md:w-[220px] ">
            <div className="h-20 w-20 md:h-24 md:w-24 rounded-full border border-black flex items-center justify-center">
              <FaUserNinja className="h-8 w-8 md:h-10 md:w-10 hover:animate-spin cursor-pointer" />
            </div>
            <h1 className="mt-3 text-base md:text-lg font-medium">OUR MISSION</h1>
            <p className="mt-2 text-xs md:text-sm font-serif ">
              "Compassionate care, excellence in treatment, patient well-being."
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center w-[140px] md:w-[220px]">
            <div className="h-20 w-20 md:h-24 md:w-24 rounded-full border border-black flex items-center justify-center">
              <FaReact className="h-8 w-8 md:h-10 md:w-10 hover:animate-spin cursor-pointer" />
            </div>
            <h1 className="mt-3 text-base md:text-lg font-medium">OUR HISTORY</h1>
            <p className="mt-2 text-xs md:text-sm font-serif">
              "Built on trust, dedicated to healing."
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center w-[140px] md:w-[220px]">
            <div className="h-20 w-20 md:h-24 md:w-24 rounded-full border border-black flex items-center justify-center">
              <GiRoundTable className="h-8 w-8 md:h-10 md:w-10 hover:animate-spin cursor-pointer" />
            </div>
            <h1 className="mt-3 text-base md:text-lg font-medium">OUR VISION</h1>
            <p className="mt-2 text-xs md:text-sm font-serif">
              "Empowering health, advancing care, improving lives."
            </p>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col items-center w-[140px] md:w-[220px]">
            <div className="h-20 w-20 md:h-24 md:w-24 rounded-full border border-black flex items-center justify-center">
              <FaRegThumbsUp className="h-8 w-8 md:h-10 md:w-10 hover:animate-spin cursor-pointer" />
            </div>
            <h1 className="mt-3 text-base md:text-lg font-medium">OUR SUCCESS</h1>
            <p className="mt-2 text-xs md:text-sm font-serif">
              "Delivering results, fostering health, achieving excellence."
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Getfitcsb;
