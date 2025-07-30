import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import photo from "./assets/photo/slide1.webp";
import { MdOutlineLocationOn } from "react-icons/md";
import { RiMessageFill } from "react-icons/ri";
import { BsTelephoneForward } from "react-icons/bs";
import { LuClock9 } from "react-icons/lu";
import { CiLocationArrow1 } from "react-icons/ci";

function Footer() {
  const contents = [
    {
      title: "Need To Know About Scoliosis?",
      text: `Scoliosis is a sideways bend of the 
      spine which usually occurs in children, 
      but can also sometimes affect adults.
      A normal spine is curved on the top of the shoulder.`,
    },
    {
      title: "How to Prevent Eye Injuries?",
      text: `People at work are equally at risk of eye injuries as those at home. Fortunately, 90 percent of all eye injuries are preventable. Learn how to prevent eye injuries.`,
    },
    {
      title: "Need To Know About Scoliosis?",
      text: `Scoliosis is a sideward bend of the spine which usually occurs in children, but can also sometimes affect adults. A normal spine is curved on the top of the shoulder.`,
    },
  ];

  const [index, setIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const intervalRef = useRef(null);

  // Function to start scrolling
  const startScrolling = () => {
    if (isScrolling) return; // Already running
    setIsScrolling(true);

    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % contents.length);
    }, 4000);
  };

  // Clear interval on unmount
  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <footer className="relative w-full">
      {/* Background Image */}
      <img
        src={photo}
        className="absolute inset-0 w-full h-full md:h-[500px] object-cover z-0"
        alt="footer background"
      />

      {/* Content Overlay */}
      <div className="relative z-10 bg-black/70 text-white px-6 pt-10 pb-10 min-h-[600px] md:min-h-[500px]">
        <div className="flex flex-wrap justify-between gap-8 pl-4 md:pl-8">
          
          {/* Column 1 */}
          <div className="w-full md:w-[22%]">
            <h2 className="text-xl font-bold mb-4">ABOUT US</h2>
            <p className="Raleway sans-serif text-base mt-5">
              CSB Hospitals offers expert <br />
              care with dedicated doctors, <br />
              advanced facilities, and <br />
              personalized treatment for <br />
              every patient.<br />
              Manage your health the easier way<br /> with the CSB Hospital Website.
            </p>
          </div>

          {/* Column 2 */}
          <div className="w-full md:w-[22%]">
            <h2 className="text-xl font-bold mb-4">OUR ASSOCIATES</h2>
            <ul className="text-sm space-y-2 mt-5">
              <li><a href="" className="hover:text-[#fd5753]">Education</a></li>
              <li><a href="" className="hover:text-[#fd5753]">Research</a></li>
              <li><a href="" className="hover:text-[#fd5753]">Healthcare Services</a></li>
              <li><a href="" className="hover:text-[#fd5753]">CSB Foundation</a></li>
            </ul>
            <h1 className="text-xl font-bold mt-8">GET CONNECTED</h1>
          </div>

          {/* Column 3 - Auto scroll on click */}
          <div
            className="w-full md:w-[22%] md:relative md:left-[-85px] overflow-hidden cursor-pointer"
            onClick={startScrolling}
          >
            <h2 className="text-xl font-bold mb-4">WHAT'S NEW</h2>
            <div className="relative h-[150px]">
              <AnimatePresence initial={false}>
                <motion.div
                  key={index}
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 50, opacity: 0 }}
                  transition={{ duration: 0.7 }}
                  className="absolute w-full"
                >
                  <h3 className="text-lg font-medium">
                    {contents[index].title}
                  </h3>
                  <p className="Raleway sans-serif text-base mb-5 mt-2">
                    {contents[index].text}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
            {!isScrolling && (
              <p className="text-xs text-gray-300 mt-2">
                
              </p>
            )}
          </div>

          {/* Column 4 */}
          <div className="w-full md:w-[22%] md:relative md:left-[-85px]">
            <h2 className="text-xl font-bold mb-4">STAY WITH US</h2>
            <div className="space-y-2 text-sm">
              <a href="#" className="flex items-start gap-2 Raleway sans-serif text-base hover:text-[#fd5753]">
                <MdOutlineLocationOn className="mt-1" />
                Jasana Road, Faridabad, Haryana, 121101
              </a>

              <a href="mailto:support@csbhospital.com" className="flex items-start gap-2 Raleway sans-serif text-base hover:text-[#fd5753]">
                <RiMessageFill className="mt-1" />
                support@csbhospital.com
              </a>

              <a href="mailto:ajay@csbhospital.com" className="flex items-start gap-2 Raleway sans-serif text-base hover:text-[#fd5753]">
                <RiMessageFill className="mt-1" />
                ajay@csbhospital.com
              </a>

              <a href="tel:9718888056" className="flex items-start gap-2 Raleway sans-serif text-base hover:text-[#fd5753]">
                <BsTelephoneForward className="mt-1" />
                9718888056
              </a>

              <a href="#" className="flex items-start gap-2 Raleway sans-serif text-base hover:text-[#fd5753]">
                <LuClock9 className="mt-1" />
                Open: Mon to Sat: 9AM to 5PM
              </a>
            </div>

            <h1 className="text-xl font-bold mt-8">GET UPDATED</h1>
            <div className="flex flex-row mt-5">
              <input
                type="email"
                placeholder="Your Email Here.."
                className="w-full h-9 px-4 text-white border border-red-400 text-sm focus:outline-none focus:border-red-400"
              />
              <div className="h-9 w-13 bg-red-400 flex items-center justify-center cursor-pointer flex-shrink-0">
                <CiLocationArrow1 className="text-white h-5 w-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
