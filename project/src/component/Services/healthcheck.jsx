import { motion } from 'framer-motion';
import body2 from '../../assets/photo/bodycheck1.jpeg';

const Healthcheck = () => {
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

  const imageAnimation = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.02,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section with Image Background */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative py-12 md:py-16 text-white"
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#fd5753]/90 to-[#e84946]/90"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          >
            Full Body Health Checkup in Faridabad at CSB Hospital
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Your Health Matters - Preventive Care For a Better Tomorrow<br/>
            Premium healthcare solutions in Jasana, Faridabad (Haryana 121101)
          </motion.p>
        </div>
      </motion.div>

      {/* Introduction Section with Image */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="container mx-auto px-4 py-12"
      >
        <div className="flex flex-col md:flex-row items-center gap-8">
          <motion.div 
            variants={imageAnimation}
            whileHover="hover"
            className="md:w-1/2 rounded-xl overflow-hidden shadow-lg"
          >
            <img 
              src={body2} 
              alt="Health Checkup at CSB Hospital" 
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
          
          <motion.div 
            variants={fadeIn} 
            className="md:w-1/2 bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:bg-red-50 transition-all"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Comprehensive Health Checkups</h2>
            <p className="text-lg text-gray-600 mb-4">
              At CSB Hospital, we offer top-rated full health checkups in Faridabad designed to detect potential health issues before they become serious problems. Our complete health check-up in Faridabad combines advanced diagnostics with expert medical consultation.
            </p>
            <p className="text-lg text-gray-600">
              Recognized as Faridabad's leading health check up hospital, we provide affordable, comprehensive packages tailored to different age groups and health requirements.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="bg-white py-12"
      >
        <div className="container mx-auto px-4">
          <motion.h2 variants={fadeIn} className="text-3xl font-bold text-center text-gray-800 mb-12">
            Why Choose CSB Hospital for Your Health Checkup?
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Facility */}
            <motion.div 
              variants={fadeIn}
              whileHover={{ y: -5 }}
              className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg hover:bg-red-50 transition-all"
            >
              <h3 className="text-xl font-semibold text-[#fd5753] mb-4">1. State-of-the-Art Diagnostic Facilities</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#fd5753] mr-2">•</span>
                  <span>NABL-accredited pathology lab</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fd5753] mr-2">•</span>
                  <span>Advanced imaging center (CT, MRI, Digital X-Ray)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fd5753] mr-2">•</span>
                  <span>Fully automated analyzers for precise results</span>
                </li>
              </ul>
            </motion.div>

            {/* Team */}
            <motion.div 
              variants={fadeIn}
              whileHover={{ y: -5 }}
              className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg hover:bg-red-50 transition-all"
            >
              <h3 className="text-xl font-semibold text-[#fd5753] mb-4">2. Expert Preventive Care Team</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#fd5753] mr-2">•</span>
                  <span>Senior physicians for consultation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fd5753] mr-2">•</span>
                  <span>Dedicated health counselors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fd5753] mr-2">•</span>
                  <span>Nutritionists for diet planning</span>
                </li>
              </ul>
            </motion.div>

            {/* Packages */}
            <motion.div 
              variants={fadeIn}
              whileHover={{ y: -5 }}
              className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg hover:bg-red-50 transition-all"
            >
              <h3 className="text-xl font-semibold text-[#fd5753] mb-4">3. Customized Checkup Packages</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#fd5753] mr-2">•</span>
                  <span>From basic health checkup in Faridabad to comprehensive executive panels</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fd5753] mr-2">•</span>
                  <span>Gender-specific and age-appropriate packages</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fd5753] mr-2">•</span>
                  <span>Corporate wellness programs</span>
                </li>
              </ul>
            </motion.div>

            {/* Experience */}
            <motion.div 
              variants={fadeIn}
              whileHover={{ y: -5 }}
              className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg hover:bg-red-50 transition-all"
            >
              <h3 className="text-xl font-semibold text-[#fd5753] mb-4">4. Hassle-Free Experience</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#fd5753] mr-2">•</span>
                  <span>Morning slots for fasting tests</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fd5753] mr-2">•</span>
                  <span>Same-day reports for most tests</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fd5753] mr-2">•</span>
                  <span>Comfortable lounge area</span>
                </li>
              </ul>
            </motion.div>

            {/* Affordable */}
            <motion.div 
              variants={fadeIn}
              whileHover={{ y: -5 }}
              className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg hover:bg-red-50 transition-all"
            >
              <h3 className="text-xl font-semibold text-[#fd5753] mb-4">5. Affordable Preventive Care</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#fd5753] mr-2">•</span>
                  <span>Packages starting at just ₹999</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fd5753] mr-2">•</span>
                  <span>EMI options available</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fd5753] mr-2">•</span>
                  <span>Insurance tie-ups for cashless checkups</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Packages Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-16 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <motion.h2 variants={fadeIn} className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our Health Checkup Packages
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Basic Package */}
            <motion.div 
              variants={fadeIn}
              whileHover={{ scale: 1.03 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:bg-red-50 transition-all border-l-4 border-[#fd5753]"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">1. Basic Full Body Checkup (₹999)</h3>
              <p className="text-gray-600 mb-3">For young adults needing essential screening</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#fd5753] mr-2">•</span>
                  <span>Complete Blood Count (CBC)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fd5753] mr-2">•</span>
                  <span>Blood Sugar (Fasting)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fd5753] mr-2">•</span>
                  <span>Lipid Profile</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fd5753] mr-2">•</span>
                  <span>Liver Function Test</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fd5753] mr-2">•</span>
                  <span>Urine Routine</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fd5753] mr-2">•</span>
                  <span>Doctor Consultation</span>
                </li>
              </ul>
            </motion.div>

            {/* Comprehensive Package */}
            <motion.div 
              variants={fadeIn}
              whileHover={{ scale: 1.03 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:bg-red-50 transition-all border-l-4 border-[#fd5753]"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">2. Comprehensive Health Check (₹2,999)</h3>
              <p className="text-gray-600 mb-3">Our most popular whole body check up in Faridabad</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#fd5753] mr-2">•</span>
                  <span>Includes all Basic tests plus:</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fd5753] mr-2">•</span>
                  <span>Thyroid Profile (T3, T4, TSH)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fd5753] mr-2">•</span>
                  <span>Kidney Function Test</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fd5753] mr-2">•</span>
                  <span>Chest X-Ray</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fd5753] mr-2">•</span>
                  <span>ECG</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fd5753] mr-2">•</span>
                  <span>Abdominal Ultrasound</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fd5753] mr-2">•</span>
                  <span>Physician Consultation</span>
                </li>
              </ul>
            </motion.div>

            {/* Executive Package */}
            <motion.div 
              variants={fadeIn}
              whileHover={{ scale: 1.03 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:bg-red-50 transition-all border-l-4 border-[#fd5753]"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">3. Executive Health Package (₹5,999)</h3>
              <p className="text-gray-600 mb-3">For professionals needing thorough evaluation</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#fd5753] mr-2">•</span>
                  <span>All Comprehensive tests plus:</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fd5753] mr-2">•</span>
                  <span>Cardiac Risk Markers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fd5753] mr-2">•</span>
                  <span>Vitamin D & B12</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fd5753] mr-2">•</span>
                  <span>PSA (for men) / CA-125 (for women)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fd5753] mr-2">•</span>
                  <span>Treadmill Test (TMT)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fd5753] mr-2">•</span>
                  <span>Gastroenterologist Consultation</span>
                </li>
              </ul>
            </motion.div>

            {/* Senior Citizen */}
            <motion.div 
              variants={fadeIn}
              whileHover={{ scale: 1.03 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:bg-red-50 transition-all border-l-4 border-[#fd5753]"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">4. Senior Citizen Wellness (₹4,499)</h3>
              <p className="text-gray-600 mb-3">Specialized full body health check in Faridabad for ages 60+</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#fd5753] mr-2">•</span>
                  <span>Bone Mineral Density (BMD)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fd5753] mr-2">•</span>
                  <span>Arthritis Panel</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fd5753] mr-2">•</span>
                  <span>Cognitive Function Assessment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fd5753] mr-2">•</span>
                  <span>Ophthalmology Checkup</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fd5753] mr-2">•</span>
                  <span>Geriatric Specialist Consultation</span>
                </li>
              </ul>
            </motion.div>

            {/* Women's Package */}
            <motion.div 
              variants={fadeIn}
              whileHover={{ scale: 1.03 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:bg-red-50 transition-all border-l-4 border-[#fd5753]"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">5. Women's Health Package (₹3,999)</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#fd5753] mr-2">•</span>
                  <span>Pap Smear Test</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fd5753] mr-2">•</span>
                  <span>Mammography (for 40+)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fd5753] mr-2">•</span>
                  <span>Hormonal Profile</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fd5753] mr-2">•</span>
                  <span>Bone Density Scan</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fd5753] mr-2">•</span>
                  <span>Gynecologist Consultation</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Advanced Screening Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4">
          <motion.h2 variants={fadeIn} className="text-3xl font-bold text-center text-gray-800 mb-12">
            Advanced Screening Options
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Cardiac */}
            <motion.div 
              variants={fadeIn}
              className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg hover:bg-red-50 transition-all"
            >
              <h3 className="text-xl font-semibold text-[#fd5753] mb-4">1. Cardiac Risk Assessment</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#fd5753] mr-2">•</span>
                  <span>Stress Echocardiography</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fd5753] mr-2">•</span>
                  <span>Coronary Calcium Scoring</span>
                </li>
                 <li className="flex items-start">
                  <span className="text-[#fd5753] mr-2">•</span>
                  <span>Carotid Doppler</span>
                </li>
              </ul>
            </motion.div>

            {/* Cancer */}
            <motion.div 
              variants={fadeIn}
              className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg hover:bg-red-50 transition-all"
            >
              <h3 className="text-xl font-semibold text-[#fd5753] mb-4">2. Cancer Screening</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#fd5753] mr-2">•</span>
                  <span>Low Dose CT for Lung Cancer</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fd5753] mr-2">•</span>
                  <span>Tumor Marker Panels</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fd5753] mr-2">•</span>
                  <span>Colonoscopy Packages</span>
                </li>
              </ul>
            </motion.div>

            {/* Metabolic */}
            <motion.div 
              variants={fadeIn}
              className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg hover:bg-red-50 transition-all"
            >
              <h3 className="text-xl font-semibold text-[#fd5753] mb-4">3. Metabolic Workup</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#fd5753] mr-2">•</span>
                  <span>Insulin Resistance Testing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fd5753] mr-2">•</span>
                  <span>Advanced Thyroid Profile</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fd5753] mr-2">•</span>
                  <span>Cortisol Levels</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Included Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-16 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <motion.h2 variants={fadeIn} className="text-3xl font-bold text-center text-gray-800 mb-12">
            What's Included in Our Health Checkups?
          </motion.h2>
          
          <motion.div variants={fadeIn} className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-md">
              <thead className="bg-[#fd5753] text-white">
                <tr>
                  <th className="py-4 px-6 text-left">Component</th>
                  <th className="py-4 px-6 text-left">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  { component: "Blood Tests", details: "50+ parameters including sugar, cholesterol, vitamins" },
                  { component: "Imaging", details: "X-ray, ultrasound, echocardiography as per package" },
                  { component: "Cardiac Tests", details: "ECG, TMT, Echo for comprehensive packages" },
                  { component: "Consultations", details: "With physicians and specialists" },
                  { component: "Health Report", details: "Digital + printed copy with expert analysis" }
                ].map((item, index) => (
                  <motion.tr 
                    key={index}
                    variants={fadeIn}
                    whileHover={{ backgroundColor: "#fef2f2" }}
                    className="hover:bg-red-50 transition-colors"
                  >
                    <td className="py-4 px-6 font-medium">{item.component}</td>
                    <td className="py-4 px-6">{item.details}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4">
          <motion.h2 variants={fadeIn} className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our Health Checkup Process
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pre-Checkup */}
            <motion.div 
              variants={fadeIn}
              className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg hover:bg-red-50 transition-all"
            >
              <h3 className="text-xl font-semibold text-[#fd5753] mb-4">1. Pre-Checkup Preparation</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#fd5753] mr-2">a.</span>
                  <span>Fasting guidelines</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fd5753] mr-2">b.</span>
                  <span>Medication instructions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fd5753] mr-2">c.</span>
                  <span>Appointment scheduling</span>
                </li>
              </ul>
            </motion.div>

            {/* Checkup Day */}
            <motion.div 
              variants={fadeIn}
              className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg hover:bg-red-50 transition-all"
            >
              <h3 className="text-xl font-semibold text-[#fd5753] mb-4">2. Checkup Day</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#fd5753] mr-2">a.</span>
                  <span>Streamlined sample collection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fd5753] mr-2">b.</span>
                  <span>Comfortable waiting areas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fd5753] mr-2">c.</span>
                  <span>Priority processing</span>
                </li>
              </ul>
            </motion.div>

            {/* Post-Checkup */}
            <motion.div 
              variants={fadeIn}
              className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg hover:bg-red-50 transition-all"
            >
              <h3 className="text-xl font-semibold text-[#fd5753] mb-4">3. Post-Checkup</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#fd5753] mr-2">a.</span>
                  <span>Detailed report within 24-48 hours</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fd5753] mr-2">b.</span>
                  <span>Doctor consultation to explain results</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fd5753] mr-2">c.</span>
                  <span>Follow-up plan if abnormalities found</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Who Should Get Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-16 bg-gray-50"
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div 
            variants={fadeIn} 
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg hover:bg-red-50 transition-all"
          >
            <h3 className="text-2xl font-bold text-[#fd5753] mb-6 text-center">Who Should Get Regular Health Checkups?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "✔ Adults above 30 years (annual checks)",
                "✔ Individuals with family history of diseases",
                "✔ Professionals with stressful lifestyles",
                "✔ Those with existing chronic conditions",
                "✔ Pre-employment medicals",
                "✔ Pre-travel health screenings"
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-[#fd5753] mr-2">•</span>
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
          <motion.h2 
            variants={fadeIn}
            className="text-3xl font-bold text-center mb-12"
          >
            Why CSB Hospital is Faridabad's Health Checkup Leader
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { stat: "Accuracy rate", value: "98%", description: "in diagnostics" },
              { stat: "Health checks", value: "500+", description: "conducted monthly" },
              { stat: "Report time", value: "Same-day", description: "for urgent cases" },
              { stat: "Follow-up care", value: "Included", description: "in all packages" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className="text-center p-4 rounded-lg hover:bg-[#e84946] transition-all"
              >
                <div className="text-4xl font-bold mb-2">{item.value}</div>
                <h3 className="text-xl font-semibold mb-2">{item.stat}</h3>
                <p className="text-white/90">{item.description}</p>
              </motion.div>
            ))}
          </div>
          <motion.p variants={fadeIn} className="text-center text-xl mt-12 max-w-3xl mx-auto italic">
            "Early detection through our comprehensive health check has helped 70% of patients prevent serious complications."
          </motion.p>
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
        <div className="container mx-auto px-4">
          <motion.h2 variants={fadeIn} className="text-3xl font-bold text-center text-gray-800 mb-12">
            Frequently Asked Questions
          </motion.h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "How long does a full body checkup take?",
                answer: "Most packages take 2-3 hours; executive checks may take 4-5 hours."
              },
              {
                question: "Is fasting required for health checkups?",
                answer: "Yes, 10-12 hours fasting is needed for accurate sugar and lipid tests."
              },
              {
                question: "Can I customize my health package?",
                answer: "Absolutely! Our counselors can tailor packages based on your needs."
              },
              {
                question: "Are your health checkup packages affordable?",
                answer: "We offer the most affordable health packages in Faridabad without compromising quality."
              },
              {
                question: "How often should I get a checkup?",
                answer: "Annually for adults, every 6 months for those with existing conditions."
              },
              {
                question: "What makes CSB Hospital's health checkups different?",
                answer: "Our checkups combine advanced diagnostics with personalized doctor consultations and follow-up care, ensuring comprehensive preventive healthcare."
              }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg hover:bg-red-50 transition-all"
              >
                <h3 className="text-xl font-semibold text-[#fd5753] mb-3">Q: {faq.question}</h3>
                <p className="text-gray-600">A: {faq.answer}</p>
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
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Book Your Health Checkup Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Take charge of your health with Faridabad's best health checkup center</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={pulseAnimation}
            className="bg-white text-[#fd5753] font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all"
          >
            Book Now: +91-XXXXXXXXXX
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};

export default Healthcheck;