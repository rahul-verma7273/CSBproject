import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import crousel1 from "../../assets/photo/crousel.jpg";
import crousel2 from "../../assets/photo/crousel2.jpg";

function Crousel() {
  const images = [crousel1, crousel2];
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState(1);

  // Check screen size
  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Auto scroll for mobile
  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        handleNext();
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isMobile]);

  const handlePrev = () => {
    if (isAnimating) return;
    setDirection(-1);
    setIsAnimating(true);
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    if (isAnimating) return;
    setDirection(1);
    setIsAnimating(true);
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Animation Variants
  const bannerVariants = {
    enter: (dir) => ({ y: dir === 1 ? "100%" : "-100%" }),
    center: { y: 0 },
    exit: (dir) => ({ y: dir === 1 ? "-100%" : "100%" }),
  };

  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -40 },
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Carousel height */}
      <div className="relative w-full h-[100vh] sm:h-[90vh]">
        <AnimatePresence custom={direction}>
  <motion.div
    key={current}
    className="absolute top-0 left-0 w-full h-full flex flex-col"
    variants={bannerVariants}
    custom={direction}
    initial="enter"
    animate="center"
    exit="exit"
    transition={{ duration: 0.8, ease: "easeInOut" }}
    onAnimationComplete={() => setIsAnimating(false)}
  >
                {/* Text Content */}
            <motion.div
              className={`w-full flex flex-col justify-center px-4 sm:px-10 ${
                isMobile
                  ? "h-1/3 text-center items-center" 
                  : "absolute top-16 sm:top-28 left-4 sm:left-10 max-w-lg"
              } text-black z-20`}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              {current === 0 ? (
                <>
                  <h1 className="text-lg sm:text-2xl md:text-3xl font-bold mb-4 leading-snug sm:leading-tight">
                    YOUR HEALTHY LIFE IS OUR <br /> PRIORITY
                  </h1>
                  <p className="text-xs sm:text-base md:text-lg leading-relaxed max-w-md">
                    From Advanced Treatments To Personalized Care Plans, We’re
                    Here To Guide You Through Every Step Of Your Healing Journey.
                  </p>
                </>
              ) : (
                <>
                  <h1 className="text-lg sm:text-2xl md:text-3xl font-bold mb-4 leading-snug sm:leading-tight">
                    HEALTHY IS BIGGEST GIFT TO <br /> YOUR DEAR ONES
                  </h1>
                  <p className="text-xs sm:text-base md:text-lg leading-relaxed max-w-md">
                    Our Healthy Is Our Priority. And We Believe In Providing Care
                    That Goes Beyond The Ordinary.
                  </p>
                </>
              )}

              {/* Buttons */}
              <div
                className={`flex gap-4 mt-6 flex-wrap justify-center ${
                  isMobile ? "w-full" : ""
                }`}
              >
                <button className="relative h-10 w-32 sm:w-40 bg-[#fd5753] text-white hover:text-gray-600 sm:text-base group overflow-hidden">
                  <span className="relative z-10">READ MORE</span>
                  <span className="absolute inset-0 bg-white translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-500"></span>
                </button>

                <button className="relative h-10 w-32 sm:w-40 bg-white text-gray-600 hover:text-white text-xs sm:text-base overflow-hidden group">
                  <span className="relative z-10">OUR SERVICES</span>
                  <span className="absolute inset-0 bg-[#fd5753] scale-y-0 group-hover:scale-y-100 origin-center transition-transform duration-500"></span>
                </button>
              </div>
            </motion.div>


            {/* Banner Image */}
           <img
  src={images[current]}
  alt={`Slide ${current}`}
  className={`${
    isMobile
      ? "h-2/3 w-full object-cover" // Mobile view
      : "h-full w-full object-cover" // Desktop view
  }`}
  style={isMobile ? { objectPosition: "80% center" } : {}}
/>

          </motion.div>
        </AnimatePresence>
      </div>

      {/* Prev/Next Buttons */}
      {!isMobile && (
        <>
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-3 sm:left-6 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 sm:p-3 rounded-full z-30"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-3 sm:right-6 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 sm:p-3 rounded-full z-30"
          >
            <FaChevronRight />
          </button>
        </>
      )}

      {/* Dots */}
      {!isMobile && (
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-30">
          {images.map((_, index) => (
            <div
              key={index}
              onClick={() => !isAnimating && setCurrent(index)}
              className={`h-2.5 w-2.5 sm:h-4 sm:w-4 rounded-full border-2 border-white cursor-pointer ${
                current === index ? "bg-white" : "bg-black/50"
              }`}
            ></div>
            
          ))}
        </div>
        
      )}
    </div>
    
  );
}

export default Crousel;
