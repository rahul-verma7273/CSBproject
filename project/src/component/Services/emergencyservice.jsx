import { motion } from 'framer-motion';
import emergencyImg1 from '../../assets/photo/emergency.jpg';
import emergencyImg2 from '../../assets/photo/emergency2.webp';
import emergencyImg3 from '../../assets/photo/doctor.jpg';
import MainHeader from "../Home/MainHeader";
 



const EmergencyService = () => {
  
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

  const fadeInScale = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { 
        duration: 0.5,
        ease: "backOut"
      } 
    }
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const pulseAnimation = {
    initial: { scale: 1 },
    animate: { 
      scale: [1, 1.02, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
   
    
    <div className="bg-gray-50 overflow-hidden">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-r from-[#fd5753] to-[#e84946] py-16 md:py-24 text-white"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              duration: 0.6,
              delay: 0.2,
              ease: "backOut"
            }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight hover:bg-[#e84946] transition-colors duration-300"
          >
            Accident & Emergency Services in Faridabad at CSB Hospital
          </motion.h1>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.4,
              ease: "easeOut"
            }}
            className="text-xl md:text-2xl max-w-3xl mx-auto font-light hover:bg-[#e84946] transition-colors duration-300"
          >
            Immediate, Life-Saving Emergency Care When You Need It Most<br/>
            Premium healthcare solutions in Jasana, Faridabad (Haryana 121101)
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-10 hover:bg-[#e84946] transition-colors duration-300"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(0,0,0,0.2)"
              }}
              whileTap={{ scale: 0.98 }}
              animate={pulseAnimation}
              className="bg-white text-[#fd5753] font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all"
            >
              Emergency Helpline: +91-XXXXXXXXXX
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Introduction Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="container mx-auto px-4 py-12 md:py-20"
      >
        <motion.div variants={fadeIn} className="max-w-4xl mx-auto text-center mb-16 hover:bg-red-50 transition-colors duration-300">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 hover:bg-red-50 transition-colors duration-300">
            Advanced Emergency Care at CSB Hospital
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed hover:bg-red-50 transition-colors duration-300">
            At CSB Hospital, we operate one of Faridabad's most advanced accident and emergency services, providing 24/7 critical care for trauma victims and medical emergencies. Our emergency department in Faridabad is staffed by board-certified emergency physicians and equipped with cutting-edge technology to handle everything from road accidents to cardiac arrests. Recognized as the best emergency care in Faridabad, we maintain a "golden hour" protocol that gives patients the highest chance of survival and recovery.
          </p>
        </motion.div>

        {/* Three Images Gallery */}
        <motion.div variants={fadeIn} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div 
            whileHover={{ y: -10 }}
            className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl hover:bg-red-50 transition-all duration-300"
          >
            <img 
              src={emergencyImg1} 
              alt="Emergency Team" 
              className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500" 
            />
          </motion.div>
          
          <motion.div 
            whileHover={{ y: -10 }}
            className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl hover:bg-red-50 transition-all duration-300"
          >
            <img 
              src={emergencyImg2} 
              alt="Emergency Equipment" 
              className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500" 
            />
          </motion.div>
          
          <motion.div 
            whileHover={{ y: -10 }}
            className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl hover:bg-red-50 transition-all duration-300"
          >
            <img 
              src={emergencyImg3} 
              alt="Emergency Room" 
              className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500" 
            />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="bg-white py-12 md:py-20"
      >
        <div className="container mx-auto px-4">
          <motion.h2 variants={fadeIn} className="text-3xl font-bold text-center text-gray-800 mb-12 hover:bg-red-50 transition-colors duration-300">
            Why Choose CSB Hospital's Emergency Services?
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Immediate Response */}
            <motion.div 
              variants={fadeIn}
              whileHover={{ y: -5 }}
              className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg hover:bg-red-50 transition-all"
            >
              <h3 className="text-xl font-semibold text-[#fd5753] mb-4 hover:bg-red-50 transition-colors duration-300">1. Immediate Response Team</h3>
              <ul className="space-y-3">
                <li className="flex items-start hover:bg-red-50 transition-colors duration-300">
                  <span className="text-[#fd5753] mr-2">•</span>
                  <span>Dedicated critical care doctors in Faridabad available 24/7</span>
                </li>
                <li className="flex items-start hover:bg-red-50 transition-colors duration-300">
                  <span className="text-[#fd5753] mr-2">•</span>
                  <span>Specialized trauma surgeons on standby</span>
                </li>
                <li className="flex items-start hover:bg-red-50 transition-colors duration-300">
                  <span className="text-[#fd5753] mr-2">•</span>
                  <span>90-second average response time for code blue cases</span>
                </li>
              </ul>
            </motion.div>

            {/* Facilities */}
            <motion.div 
              variants={fadeIn}
              whileHover={{ y: -5 }}
              className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg hover:bg-red-50 transition-all"
            >
              <h3 className="text-xl font-semibold text-[#fd5753] mb-4 hover:bg-red-50 transition-colors duration-300">2. State-of-the-Art Facilities</h3>
              <p className="mb-3 font-medium hover:bg-red-50 transition-colors duration-300">Our emergency care unit features:</p>
              <ul className="space-y-3">
                <li className="flex items-start hover:bg-red-50 transition-colors duration-300">
                  <span className="text-[#fd5753] mr-2">•</span>
                  <span>Level II trauma center capabilities</span>
                </li>
                <li className="flex items-start hover:bg-red-50 transition-colors duration-300">
                  <span className="text-[#fd5753] mr-2">•</span>
                  <span>Dedicated shock rooms with warming systems</span>
                </li>
                <li className="flex items-start hover:bg-red-50 transition-colors duration-300">
                  <span className="text-[#fd5753] mr-2">•</span>
                  <span>In-house CT scan & digital X-ray</span>
                </li>
                <li className="flex items-start hover:bg-red-50 transition-colors duration-300">
                  <span className="text-[#fd5753] mr-2">•</span>
                  <span>Point-of-care ultrasound (POCUS)</span>
                </li>
              </ul>
            </motion.div>

            {/* Comprehensive Care */}
            <motion.div 
              variants={fadeIn}
              whileHover={{ y: -5 }}
              className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg hover:bg-red-50 transition-all"
            >
              <h3 className="text-xl font-semibold text-[#fd5753] mb-4 hover:bg-red-50 transition-colors duration-300">3. Comprehensive Emergency Care</h3>
              <p className="mb-3 font-medium hover:bg-red-50 transition-colors duration-300">We handle all types of emergencies:</p>
              <ul className="space-y-3">
                <li className="flex items-start hover:bg-red-50 transition-colors duration-300">
                  <span className="text-[#fd5753] mr-2">•</span>
                  <span>Trauma emergencies: Road accidents, falls, industrial injuries</span>
                </li>
                <li className="flex items-start hover:bg-red-50 transition-colors duration-300">
                  <span className="text-[#fd5753] mr-2">•</span>
                  <span>Medical emergencies: Heart attacks, strokes, seizures</span>
                </li>
                <li className="flex items-start hover:bg-red-50 transition-colors duration-300">
                  <span className="text-[#fd5753] mr-2">•</span>
                  <span>Pediatric emergencies: Febrile seizures, respiratory distress</span>
                </li>
                <li className="flex items-start hover:bg-red-50 transition-colors duration-300">
                  <span className="text-[#fd5753] mr-2">•</span>
                  <span>Environmental emergencies: Burns, poisoning, heat stroke</span>
                </li>
              </ul>
            </motion.div>

            {/* Ambulance Care */}
            <motion.div 
              variants={fadeIn}
              whileHover={{ y: -5 }}
              className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg hover:bg-red-50 transition-all"
            >
              <h3 className="text-xl font-semibold text-[#fd5753] mb-4 hover:bg-red-50 transition-colors duration-300">4. Ambulance & Pre-Hospital Care</h3>
              <ul className="space-y-3">
                <li className="flex items-start hover:bg-red-50 transition-colors duration-300">
                  <span className="text-[#fd5753] mr-2">•</span>
                  <span>GPS-enabled advanced life support ambulances</span>
                </li>
                <li className="flex items-start hover:bg-red-50 transition-colors duration-300">
                  <span className="text-[#fd5753] mr-2">•</span>
                  <span>Paramedics trained in pre-hospital trauma care</span>
                </li>
                <li className="flex items-start hover:bg-red-50 transition-colors duration-300">
                  <span className="text-[#fd5753] mr-2">•</span>
                  <span>"Scoop & run" protocol for critical cases</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services Breakdown */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-16 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <motion.h2 variants={fadeIn} className="text-3xl font-bold text-center text-gray-800 mb-12 hover:bg-red-50 transition-colors duration-300">
            Our Emergency Services Breakdown
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Trauma Emergency Services",
                content: "As a leading trauma care hospital in Faridabad, we specialize in:",
                items: [
                  "Road accident emergency: Immediate fracture stabilization, hemorrhage control",
                  "Poly-trauma management (ATLS protocols)",
                  "Damage control surgery for critical injuries"
                ]
              },
              {
                title: "Cardiac Emergency Care",
                content: "Comprehensive cardiac emergency services including:",
                items: [
                  "24/7 STEMI protocol for heart attacks",
                  "Thrombolysis within 30 minutes of arrival",
                  "Defibrillation & advanced cardiac life support"
                ]
              },
              {
                title: "Neuro Emergency Services",
                content: "Specialized neurological emergency care:",
                items: [
                  "Stroke code team (golden 4.5-hour window)",
                  "CT angiography for brain hemorrhage",
                  "Neurosurgical backup available"
                ]
              },
              {
                title: "Pediatric Emergency Care",
                content: "Child-focused emergency services:",
                items: [
                  "Dedicated pediatric emergency zone",
                  "Child-sized equipment & medications",
                  "Pediatric advanced life support (PALS)"
                ]
              }
            ].map((service, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                whileHover={{ scale: 1.03 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:bg-red-50 transition-all border-l-4 border-[#fd5753]"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-3 hover:bg-red-50 transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-600 mb-3 hover:bg-red-50 transition-colors duration-300">{service.content}</p>
                <ul className="space-y-2">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start hover:bg-red-50 transition-colors duration-300">
                      <span className="text-[#fd5753] mr-2">•</span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Infrastructure Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4">
          <motion.h2 variants={fadeIn} className="text-3xl font-bold text-center text-gray-800 mb-12 hover:bg-red-50 transition-colors duration-300">
            Our Emergency Department Infrastructure
          </motion.h2>
          
          <motion.div variants={fadeIn} className="overflow-x-auto hover:bg-red-50 transition-colors duration-300">
            <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-md">
              <thead className="bg-[#fd5753] text-white">
                <tr>
                  <th className="py-4 px-6 text-left hover:bg-[#e84946] transition-colors duration-300">Facility</th>
                  <th className="py-4 px-6 text-left hover:bg-[#e84946] transition-colors duration-300">Benefit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  { facility: "Separate Trauma Bays", benefit: "Isolated treatment areas for critical cases" },
                  { facility: "Negative Pressure Room", benefit: "For infectious disease cases" },
                  { facility: "Emergency OR", benefit: "For immediate life-saving surgeries" },
                  { facility: "Central Monitoring Station", benefit: "Tracks all patients simultaneously" },
                  { facility: "Pharmacy & Blood Bank", benefit: "In-house for instant access" }
                ].map((item, index) => (
                  <motion.tr 
                    key={index}
                    variants={fadeIn}
                    whileHover={{ backgroundColor: "#fef2f2" }}
                    className="hover:bg-red-50 transition-colors duration-300"
                  >
                    <td className="py-4 px-6 font-medium hover:bg-red-50 transition-colors duration-300">{item.facility}</td>
                    <td className="py-4 px-6 hover:bg-red-50 transition-colors duration-300">{item.benefit}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </motion.section>

      {/* Patient Journey */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-16 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <motion.h2 variants={fadeIn} className="text-3xl font-bold text-center text-gray-800 mb-12 hover:bg-red-50 transition-colors duration-300">
            Patient Journey in Our Emergency Ward
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { step: "1. Triage", description: "Immediate severity assessment by trained nurses" },
              { step: "2. Stabilization", description: "ABCDE protocol (Airway, Breathing, Circulation, etc.)" },
              { step: "3. Diagnostics", description: "Bedside ultrasound, X-ray, and lab tests" },
              { step: "4. Specialist Consultation", description: "On-call specialists connected via teleconsult" },
              { step: "5. Disposition", description: "Admission, observation, or discharge with instructions" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:bg-red-50 transition-all text-center"
              >
                <div className="w-12 h-12 bg-[#fd5753] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 hover:bg-[#e84946] transition-colors duration-300">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 hover:bg-red-50 transition-colors duration-300">{item.step}</h3>
                <p className="text-gray-600 hover:bg-red-50 transition-colors duration-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Specialists Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4">
          <motion.h2 variants={fadeIn} className="text-3xl font-bold text-center text-gray-800 mb-12 hover:bg-red-50 transition-colors duration-300">
            Our Emergency Specialists
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { 
                name: "Dr. [Name]", 
                specialty: "Emergency Medicine", 
                qualification: "US-trained, 10+ years experience" 
              },
              { 
                name: "Dr. [Name]", 
                specialty: "Trauma Surgeon", 
                qualification: "Former AIIMS faculty" 
              },
              { 
                name: "Dr. [Name]", 
                specialty: "Pediatric Emergency Specialist", 
                qualification: "PALS certified, 8+ years experience" 
              }
            ].map((doctor, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                whileHover={{ y: -5 }}
                className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg hover:bg-red-50 transition-all text-center"
              >
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 hover:bg-red-50 transition-colors duration-300"></div>
                <h3 className="text-xl font-semibold text-gray-800 hover:bg-red-50 transition-colors duration-300">{doctor.name}</h3>
                <p className="text-[#fd5753] font-medium mb-2 hover:bg-red-50 transition-colors duration-300">{doctor.specialty}</p>
                <p className="text-gray-600 hover:bg-red-50 transition-colors duration-300">{doctor.qualification}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div variants={fadeIn} className="mt-12 max-w-3xl mx-auto hover:bg-red-50 transition-colors duration-300">
            <h3 className="text-xl font-semibold text-center text-gray-800 mb-4 hover:bg-red-50 transition-colors duration-300">
              Supported by:
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "Emergency nurses (ACLS/PALS certified)",
                "Radiology technicians",
                "Respiratory therapists",
                "Lab technicians",
                "Pharmacists",
                "Social workers"
              ].map((item, index) => (
                <div key={index} className="flex items-center hover:bg-red-50 transition-colors duration-300">
                  <span className="text-[#fd5753] mr-2">•</span>
                  <span className="text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* When to Visit */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-16 bg-gray-50"
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.h2 variants={fadeIn} className="text-3xl font-bold text-center text-gray-800 mb-12 hover:bg-red-50 transition-colors duration-300">
            When to Visit Our Emergency Department?
          </motion.h2>
          
          <motion.div variants={fadeIn} className="bg-white p-8 rounded-xl shadow-md hover:bg-red-50 transition-colors duration-300">
            <p className="text-lg font-medium text-gray-800 mb-6 hover:bg-red-50 transition-colors duration-300">
              Seek immediate care for:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Chest pain lasting >5 minutes",
                "Difficulty breathing",
                "Severe head injury",
                "Uncontrolled bleeding",
                "Sudden weakness/numbness",
                "Major burns",
                "Poisoning/overdose",
                "Loss of consciousness"
              ].map((item, index) => (
                <div key={index} className="flex items-start hover:bg-red-50 transition-colors duration-300">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span className="text-gray-600">{item}</span>
                </div>
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
        className="py-16 bg-[#fd5753] text-white"
      >
        <div className="container mx-auto px-4">
          <motion.h2 variants={fadeIn} className="text-3xl font-bold text-center mb-12 hover:bg-[#e84946] transition-colors duration-300">
            Why CSB Hospital is Faridabad's Emergency Care Leader
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { stat: "Fastest response time", value: "8 minutes", description: "Average ambulance arrival time" },
              { stat: "Trauma survival rate", value: "95%", description: "For trauma cases" },
              { stat: "Emergency cases", value: "15,000+", description: "Treated with 98% satisfaction" },
              { stat: "Direct ICU pathway", value: "Immediate", description: "For critical patients" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className="text-center hover:bg-[#e84946] transition-colors duration-300 p-4 rounded-lg"
              >
                <div className="text-4xl font-bold mb-2 hover:bg-[#e84946] transition-colors duration-300">{item.value}</div>
                <h3 className="text-xl font-semibold mb-2 hover:bg-[#e84946] transition-colors duration-300">{item.stat}</h3>
                <p className="text-white/90 hover:bg-[#e84946] transition-colors duration-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.h2 variants={fadeIn} className="text-3xl font-bold text-center text-gray-800 mb-12 hover:bg-red-50 transition-colors duration-300">
            Frequently Asked Questions
          </motion.h2>
          
          <div className="space-y-6">
            {[
              {
                question: "How quickly can I see a doctor in emergency?",
                answer: "Critical cases are seen immediately - we follow a strict triage system."
              },
              {
                question: "Do you handle industrial accident cases?",
                answer: "Yes, we're equipped for workplace injuries with ortho-trauma specialists on call."
              },
              {
                question: "Is the emergency ward open 24 hours?",
                answer: "Yes, we provide 24x7 emergency hospital services in Faridabad."
              },
              {
                question: "What payment options are available?",
                answer: "We accept cashless insurance, corporate tie-ups, and government health schemes."
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className="border-b border-gray-200 pb-6 hover:bg-red-50 transition-colors duration-300 p-4 rounded-lg"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2 hover:bg-red-50 transition-colors duration-300">{item.question}</h3>
                <p className="text-gray-600 hover:bg-red-50 transition-colors duration-300">{item.answer}</p>
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
        className="py-16 bg-gradient-to-r from-[#fd5753] to-[#e84946] text-white text-center"
      >
        <div className="container mx-auto px-4 hover:bg-[#e84946] transition-colors duration-300">
          <h2 className="text-3xl font-bold mb-6 hover:bg-[#e84946] transition-colors duration-300">Need Emergency Care?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto hover:bg-[#e84946] transition-colors duration-300">Our emergency team is ready 24/7 to provide immediate, life-saving care.</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={pulseAnimation}
            className="bg-white text-[#fd5753] font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all"
          >
            Call Emergency: +91-XXXXXXXXXX
          </motion.button>
        </div>
      </motion.section>
    </div>
    
  );
};

export default EmergencyService;