import { useState } from 'react';
import { motion } from 'framer-motion';
import home1 from '../../assets/photo/home.webp';
import home2 from '../../assets/photo/home2.webp';
import MainHeader from "../Home/MainHeader";
import Footer from "../Home/Footer/Footer";
import accident from '../../assets/photo/pngtree-doctor-with-blank-banner-medical-hospital-advertisement-photo-image_9001654.jpg';


function Homecare() {
  
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      } 
    }
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const imageHover = {
    hover: {
      scale: 1.03,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const cardHover = {
    hover: {
      y: -5,
      backgroundColor: "#fef2f2",
      boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const sectionHover = {
    hover: {
      backgroundColor: "#fef2f2",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  // State for View More functionality
  const [showMore, setShowMore] = useState(false);

  return (
   <div className="bg-gray-50">
      {/* Image Section with black opacity overlay */}
      <div className="relative h-[300px] md:h-[500px] lg:h-[600px] overflow-hidden">
        <img src={accident} alt="accident" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40"></div> {/* black overlay */}
      </div>

      {/* Hero Section Over Image */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative py-10 md:py-20 text-white -mt-[250px] md:-mt-[400px]"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
              Comprehensive Home Care Services in Faridabad at CSB Hospital
            </h1>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-base md:text-xl lg:text-2xl max-w-3xl mx-auto mb-8">
              Bringing Hospital-Quality Care to Your Doorstep
            </h4>
          </motion.div>
        </div>
    </motion.div>







      {/* Introduction Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="container mx-auto px-4 py-12 md:py-16"
      >
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <motion.div 
            variants={fadeIn}
            className="md:w-1/2"
          >
            <motion.div 
              whileHover={sectionHover}
              className="p-6 rounded-lg transition-all"
            >
              <p className="text-lg text-gray-600 mb-6">
                At CSB Hospital, we understand that recovery happens best in the comfort of one's home. That's why we offer top-rated homecare services in Faridabad, providing professional medical and nursing care right at your residence.
              </p>
            </motion.div>
            <motion.div 
              whileHover={sectionHover}
              className="p-6 rounded-lg transition-all"
            >
              <p className="text-lg text-gray-600">
                Our home healthcare in Faridabad is designed for patients who need ongoing medical attention but prefer to recover in familiar surroundings. Whether you need home nursing care in Faridabad for an elderly parent or doctor visit at home in Faridabad for chronic disease management, we bring comprehensive medical services to your doorstep.
              </p>
              
              {/* View More Button */}
              <div className="mt-6 text-center">
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "#e84946",
                    boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowMore(!showMore)}
                  className="bg-[#fd5753] text-white font-medium py-2 px-6 rounded-full shadow hover:shadow-md transition-all"
                >
                  {showMore ? 'View Less' : 'View More'}
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            variants={fadeIn}
            className="md:w-1/2 grid grid-cols-2 gap-4"
          >
            <motion.div
              variants={imageHover}
              whileHover="hover"
              className="rounded-lg overflow-hidden shadow-lg"
            >
              <img 
                src={home1} 
                alt="Home Care Services" 
                className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
            <motion.div
              variants={imageHover}
              whileHover="hover"
              className="rounded-lg overflow-hidden shadow-lg"
            >
              <img 
                src={home2} 
                alt="Home Care Services" 
                className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-12 md:py-16 bg-white"
      >
        <div className="container mx-auto px-4">
          <motion.div 
            variants={fadeIn}
            whileHover={sectionHover}
            className="p-6 rounded-lg mb-12 transition-all"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
              Why Choose Our Home Care Services?
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "1. Hospital-Grade Care at Home",
                items: [
                  "Same quality standards as our hospital",
                  "Sterilized equipment brought to your home",
                  "Medication management by professionals"
                ]
              },
              {
                title: "2. Experienced Care Team",
                items: [
                  "Board-certified physicians for doctor visits at home",
                  "Trained nurses with ICU experience",
                  "Certified caregivers for daily assistance"
                ]
              },
              {
                title: "3. Comprehensive Services",
                description: "From basic care to specialized medical support:",
                items: [
                  "Post-surgical care",
                  "Chronic disease management",
                  "Elderly care services",
                  "Palliative care"
                ]
              },
              {
                title: "4. Customized Care Plans",
                items: [
                  "Personalized to patient's medical condition",
                  "Flexible scheduling (daily/weekly visits)",
                  "24/7 emergency support"
                ]
              },
              {
                title: "5. Affordable Packages",
                items: [
                  "Transparent pricing",
                  "Insurance assistance",
                  "No hidden charges"
                ]
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                whileHover={cardHover}
                className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <motion.div whileHover={{ color: "#fd5753" }} className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                </motion.div>
                {item.description && (
                  <motion.div whileHover={{ backgroundColor: "#fee2e2" }} className="mb-3 p-2 rounded">
                    <p className="font-medium">{item.description}</p>
                  </motion.div>
                )}
                <ul className="space-y-3">
                  {item.items.map((point, i) => (
                    <motion.li 
                      key={i}
                      whileHover={{ x: 5, backgroundColor: "#fee2e2" }}
                      className="flex items-start p-2 rounded transition-all"
                    >
                      <span className="text-[#fd5753] mr-2">•</span>
                      <span>{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-12 md:py-16 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <motion.div 
            variants={fadeIn}
            whileHover={sectionHover}
            className="p-6 rounded-lg mb-12 text-center transition-all"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Our Homecare Services
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                category: "1. Medical Home Care Services",
                services: [
                  {
                    title: "Doctor Visits at Home",
                    items: [
                      "General physician consultations",
                      "Specialist visits (Cardiologist, Neurologist, etc.)",
                      "Regular health monitoring"
                    ]
                  },
                  {
                    title: "Nursing Care at Home",
                    items: [
                      "Wound dressing",
                      "Injection administration",
                      "IV fluid management",
                      "Catheter care",
                      "Stoma care"
                    ]
                  },
                  {
                    title: "Physiotherapy at Home",
                    items: [
                      "Post-stroke rehabilitation",
                      "Mobility training",
                      "Pain management"
                    ]
                  }
                ]
              },
              {
                category: "2. Patient Care Services",
                services: [
                  {
                    title: "Elder Care Services",
                    items: [
                      "Daily activity assistance",
                      "Medication reminders",
                      "Companionship",
                      "Mobility support"
                    ]
                  },
                  {
                    title: "Post-Hospitalization Care",
                    items: [
                      "Recovery monitoring",
                      "Vital signs tracking",
                      "Incision care",
                      "Diet supervision"
                    ]
                  },
                  {
                    title: "Chronic Disease Management",
                    items: [
                      "Diabetes care",
                      "Hypertension monitoring",
                      "COPD management",
                      "Dialysis support"
                    ]
                  }
                ]
              },
              {
                category: "3. Support Services",
                services: [
                  {
                    title: "Medical Equipment Rental",
                    items: [
                      "Oxygen concentrators",
                      "Hospital beds",
                      "Wheelchairs",
                      "Nebulizers"
                    ]
                  },
                  {
                    title: "Diagnostic Services at Home",
                    items: [
                      "Blood tests",
                      "ECG",
                      "Sample collection",
                      "Urine analysis"
                    ]
                  }
                ]
              }
            ].map((category, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                whileHover={cardHover}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                <motion.div whileHover={{ color: "#fd5753" }} className="mb-6">
                  <h3 className="text-xl font-semibold">{category.category}</h3>
                </motion.div>
                <div className="space-y-6">
                  {category.services.map((service, i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ backgroundColor: "#fee2e2" }}
                      className="p-3 rounded transition-all"
                    >
                      <motion.h4 whileHover={{ scale: 1.02 }} className="text-lg font-medium text-gray-800 mb-2">
                        {service.title}
                      </motion.h4>
                      <ul className="space-y-2">
                        {service.items.map((item, j) => (
                          <motion.li 
                            key={j}
                            whileHover={{ x: 5 }}
                            className="flex items-start"
                          >
                            <span className="text-[#fd5753] mr-2">•</span>
                            <span className="text-gray-600">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-12 md:py-16 bg-white"
      >
        <div className="container mx-auto px-4">
          <motion.div 
            variants={fadeIn}
            whileHover={sectionHover}
            className="p-6 rounded-lg mb-12 text-center transition-all"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Our Home Care Process
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "1. Initial Assessment",
                items: [
                  "Free consultation to evaluate needs",
                  "Medical history review",
                  "Home environment check"
                ]
              },
              {
                step: "2. Care Plan Creation",
                items: [
                  "Tailored to patient's condition",
                  "Frequency of visits determined",
                  "Special requirements noted"
                ]
              },
              {
                step: "3. Service Implementation",
                items: [
                  "Trained professional assigned",
                  "Continuous monitoring",
                  "Regular doctor updates"
                ]
              },
              {
                step: "4. Progress Evaluation",
                items: [
                  "Weekly health reports",
                  "Care plan adjustments",
                  "Family counseling"
                ]
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                whileHover={cardHover}
                className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                <motion.h3 
                  whileHover={{ color: "#fd5753" }}
                  className="text-xl font-semibold text-gray-800 mb-4"
                >
                  {item.step}
                </motion.h3>
                <ul className="space-y-3">
                  {item.items.map((point, i) => (
                    <motion.li 
                      key={i}
                      whileHover={{ x: 5, backgroundColor: "#fee2e2" }}
                      className="flex items-start p-2 rounded transition-all"
                    >
                      <span className="text-[#fd5753] mr-2">{String.fromCharCode(97 + i)}.</span>
                      <span>{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Who Needs Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-12 md:py-16 bg-gray-50"
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div 
            variants={fadeIn}
            whileHover={sectionHover}
            className="p-6 rounded-lg mb-8 text-center transition-all"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Who Needs Home Care Services?
            </h2>
          </motion.div>
          <motion.div 
            variants={fadeIn}
            whileHover={cardHover}
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Elderly patients needing daily assistance",
                "Post-surgical patients recovering at home",
                "Chronic illness patients (diabetes, arthritis, etc.)",
                "Terminally ill patients requiring palliative care",
                "New mothers needing postnatal support",
                "Disabled individuals requiring long-term care"
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ x: 5, backgroundColor: "#fee2e2" }}
                  className="flex items-start p-3 rounded transition-all"
                >
                  <span className="text-[#fd5753] mr-2">✔</span>
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-12 md:py-16 bg-[#fd5753] text-white"
      >
        <div className="container mx-auto px-4">
          <motion.div 
            variants={fadeIn}
            whileHover={sectionHover}
            className="p-6 rounded-lg mb-12 text-center transition-all"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Why CSB Hospital is Faridabad's Home Care Leader
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { stat: "Families served", value: "2000+", description: "since 2018" },
              { stat: "Patient satisfaction", value: "97%", description: "rate" },
              { stat: "Staff", value: "100%", description: "Trained & verified" },
              { stat: "Starting price", value: "₹299/day", description: "Affordable packages" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                whileHover={{ y: -5, backgroundColor: "#e84946" }}
                className="text-center p-6 rounded-lg transition-all"
              >
                <div className="text-4xl font-bold mb-2">{item.value}</div>
                <h3 className="text-xl font-semibold mb-2">{item.stat}</h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            variants={fadeIn}
            className="mt-12 max-w-3xl mx-auto text-center"
          >
            <p className="text-xl italic">
              "Our home health care in Faridabad has helped 85% of patients recover faster than hospital stays alone."
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-12 md:py-16 bg-white"
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div 
            variants={fadeIn}
            whileHover={sectionHover}
            className="p-6 rounded-lg mb-12 text-center transition-all"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Frequently Asked Questions
            </h2>
          </motion.div>
          
          <div className="space-y-6">
            {[
              {
                question: "How quickly can home care services start?",
                answer: "Within 24 hours of initial assessment in most cases."
              },
              {
                question: "Are your nurses qualified for medical procedures?",
                answer: "Yes, all our home nursing care in Faridabad staff are certified and hospital-trained."
              },
              {
                question: "What's included in basic patient care at home?",
                answer: "Vital monitoring, medication help, personal hygiene assistance, and companionship."
              },
              {
                question: "Do you provide 24/7 caretakers?",
                answer: "Yes, we offer live-in home caretakers for patients in Faridabad for round-the-clock care."
              },
              {
                question: "Is doctor consultation at home available?",
                answer: "Yes, our doctor visit at home in Faridabad service includes physician and specialist consultations."
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                whileHover={cardHover}
                className="border-b border-gray-200 pb-6 hover:bg-red-50 transition-colors duration-300 p-6 rounded-lg"
              >
                <motion.h3 
                  whileHover={{ color: "#fd5753" }}
                  className="text-xl font-semibold text-gray-800 mb-2"
                >
                  Q: {item.question}
                </motion.h3>
                <motion.p 
                  whileHover={{ x: 5 }}
                  className="text-gray-600"
                >
                  A: {item.answer}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-12 md:py-16 bg-gradient-to-r from-[#fd5753] to-[#e84946] text-white text-center"
      >
        <div className="container mx-auto px-4">
          <motion.div 
            whileHover={sectionHover}
            className="p-4 rounded-lg transition-all"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Home Care Services?</h2>
          </motion.div>
          <motion.div 
            whileHover={sectionHover}
            className="p-4 rounded-lg mb-8 transition-all"
          >
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">
              Get hospital-quality care in the comfort of your home
            </p>
          </motion.div>
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(0,0,0,0.2)"
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-[#fd5753] font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all"
          >
            Book Now: +91-XXXXXXXXXX
          </motion.button>
        </div>
      </motion.section>
    </div>
    
  );
}

export default Homecare;