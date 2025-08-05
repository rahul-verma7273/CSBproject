import banner from '../../assets/photo/pngtree-hospital-banner-background-image_545707.jpg';
function Diabetes() {
    return (
        <div className="relative w-full overflow-hidden">
  {/* Full banner image visible */}
  <img src={banner} alt="Banner" className="w-full h-80 object-cover " />

  {/* Partial gradient overlay only on top area */}
  <div className="absolute top-0 left-0 w-full h-64 md:h-80  animate-fadeOut z-0 backdrop-blur-sm bg-black/10"></div>

  {/* Text only in color area */}
  <div className="absolute top-0 left-0 w-full h-64 md:h-80 flex flex-col justify-center items-center px-4 md:px-6 text-center z-10">
    <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg animate-fadeInDown">
      Diabetes And Endocrinology Services in Faridabad at CSB Hospital
    </h1>
    <p className="text-white mt-2 text-lg md:text-2xl font-light animate-fadeInDown delay-200">
      Expert Care for Diabetes and Hormonal Disorders
    </p>
  
</div>

            {/* Intro Paragraph with floating animation */}
            <div className="p-6 md:p-10 text-lg md:text-xl font-serif w-full bg-slate-100 hover:bg-slate-300 transition-all duration-500 group">
                <div className="container mx-auto animate-floatIn">
                    <p className="group-hover:scale-[1.01] transition-transform duration-300">
                        At CSB Hospital, we provide top-rated diabetes & endocrinology treatment in Faridabad, offering complete care for metabolic and hormonal conditions. Our team of the best diabetologists and endocrinologists in Faridabad combines advanced medical expertise with personalized treatment approaches to help patients manage diabetes, thyroid disorders, and other endocrine conditions effectively.
                        Recognized as the best diabetes hospital in Faridabad, our endocrinology & diabetes treatment in Faridabad follows international protocols while addressing the unique needs of our community. Whether you're newly diagnosed or seeking better management of a chronic condition, our diabetes specialists and endocrinology specialists deliver compassionate, evidence-based care.
                    </p>
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="container mx-auto px-4 md:px-6 py-8 animate-fadeIn">
                <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center animate-fadeIn">
                    Why Choose Our Diabetes & Endocrinology Services?
                </h1>
                
                {/* Features Grid with staggered animations */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        {
                            title: "1. Expert Specialist Team",
                            items: [
                                "Best endocrinologist in Faridabad with 15+ years experience",
                                "Top diabetes doctors in Faridabad trained at premier institutions",
                                "Dedicated hormone specialists for complex endocrine cases"
                            ]
                        },
                        {
                            title: "2. Comprehensive Diagnostic Facilities",
                            items: [
                                "Advanced HbA1c testing",
                                "Continuous Glucose Monitoring (CGM)",
                                "Thyroid ultrasound and FNAC",
                                "Hormonal assay lab"
                            ]
                        },
                        {
                            title: "3. Personalized Treatment Plans",
                            items: [
                                "Individualized diabetes management programs",
                                "Precision-based hormone therapy",
                                "Lifestyle modification counseling"
                            ]
                        },
                        {
                            title: "4. Multidisciplinary Approach",
                            items: [
                                "Collaboration with nutritionists, ophthalmologists, and podiatrists",
                                "Cardiac risk assessment for diabetic patients",
                                "Pregnancy diabetes management program"
                            ]
                        }
                    ].map((feature, index) => (
                        <div 
                            key={index}
                            className={`rounded-lg p-6 bg-red-200 hover:bg-[#fd5753] transition-all duration-500 hover:scale-[1.02] shadow-md hover:shadow-xl animate-slideIn delay-${(index+1)*100}`}
                        >
                            <h2 className="text-xl md:text-2xl font-semibold mb-3">{feature.title}</h2>
                            <ul className="space-y-2">
                                {feature.items.map((item, i) => (
                                    <li key={i} className="flex items-start group">
                                        <span className="text-red-400 mr-2 group-hover:text-white transition-colors">•</span>
                                        <span className="group-hover:text-white transition-colors">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Services Section with wave animation */}
            <div className="bg-slate-100 py-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-20 bg-wave bg-repeat-x opacity-10 animate-wave"></div>
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center animate-fadeIn">
                        Our Comprehensive Services
                    </h1>
                    
                    {/* Service Cards with 3D hover effect */}
                    {[
                        {
                            title: "1. Diabetes Care & Management",
                            description: "Our diabetes specialists in Faridabad provide:",
                            subsections: [
                                {
                                    title: "• Type 1 & Type 2 Diabetes Treatment",
                                    items: ["o Insulin pump therapy", "o Advanced oral medications"]
                                },
                                {
                                    title: "• Gestational Diabetes Care",
                                    items: ["o Special prenatal-endocrine care", "o Post-delivery monitoring"]
                                },
                                {
                                    title: "• Diabetic Complications Management",
                                    items: ["o Neuropathy treatment", "o Retinopathy screening", "o Diabetic foot care clinic"]
                                }
                            ]
                        },
                        {
                            title: "2. Thyroid Disorders",
                            items: [
                                "Hypothyroidism/Hyperthyroidism treatment",
                                "Thyroid nodule evaluation",
                                "Radioiodine therapy",
                                "Post-thyroidectomy care"
                            ]
                        },
                        {
                            title: "3. Other Endocrine Conditions",
                            subsections: [
                                {
                                    title: "• PCOS & Infertility",
                                    items: ["o Hormonal imbalance correction", "o Insulin resistance management"]
                                },
                                {
                                    title: "• Osteoporosis & Metabolic Bone Diseases",
                                    items: ["o DEXA scans", "o Calcium metabolism disorders"]
                                },
                                {
                                    title: "• Pituitary & Adrenal Disorders",
                                    items: ["o Cushing's syndrome", "o Addison's disease"]
                                },
                                {
                                    title: "• Growth Disorders",
                                    items: ["o Pediatric endocrinology", "o Growth hormone therapy"]
                                }
                            ]
                        }
                    ].map((service, index) => (
                        <div 
                            key={index}
                            className={`mb-8 bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fadeInUp delay-${(index+1)*100}`}
                        >
                            <h2 className="text-xl md:text-2xl font-bold mb-4 text-[#fd5753] group">
                                <span className="group-hover:underline decoration-2 underline-offset-4">{service.title}</span>
                            </h2>
                            {service.description && <p className="mb-4">{service.description}</p>}
                            
                            {service.subsections ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {service.subsections.map((subsection, i) => (
                                        <div key={i} className="group">
                                            <h3 className="font-semibold mb-2 group-hover:text-[#fd5753] transition-colors">
                                                {subsection.title}
                                            </h3>
                                            <ul className="ml-6 space-y-1">
                                                {subsection.items.map((item, j) => (
                                                    <li key={j} className="group-hover:translate-x-1 transition-transform">
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <ul className="space-y-2 ml-4">
                                    {service.items.map((item, i) => (
                                        <li key={i} className="flex items-start group">
                                            <span className="text-red-400 mr-2 group-hover:text-[#fd5753] transition-colors">•</span>
                                            <span className="group-hover:font-medium transition-all">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Technologies Section with animated table */}
            <div className="py-8 bg-[#fd5753] bg-opacity-10 animate-gradientBg">
                <div className="container mx-auto px-4 md:px-6">
                    <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center animate-fadeIn">
                        Advanced Treatment Technologies
                    </h1>
                    <div className="overflow-x-auto animate-slideInRight">
                        <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
                            <thead className="bg-[#fd5753] text-white">
                                <tr>
                                    <th className="py-3 px-4 text-left animate-fadeIn delay-100">Technology</th>
                                    <th className="py-3 px-4 text-left animate-fadeIn delay-200">Application</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {[
                                    ["Continuous Glucose Monitoring", "Real-time sugar tracking"],
                                    ["Insulin Pump Therapy", "Precise insulin delivery"],
                                    ["Thyroid Ultrasound Elastography", "Nodule characterization"],
                                    ["Bone Densitometry", "Osteoporosis diagnosis"],
                                    ["Hormonal Profiling", "Endocrine disorder diagnosis"]
                                ].map(([tech, app], index) => (
                                    <tr 
                                        key={index}
                                        className="hover:bg-red-50 transition-colors duration-200 group"
                                    >
                                        <td className="py-3 px-4 group-hover:font-medium group-hover:text-[#fd5753] animate-fadeIn delay-300">
                                            {tech}
                                        </td>
                                        <td className="py-3 px-4 group-hover:font-medium animate-fadeIn delay-400">
                                            {app}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Programs Section with card flip animation */}
            <div className="py-8 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center animate-fadeIn">
                        Our Diabetes Management Programs
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                title: "1. Diabetes Reversal Program",
                                items: [
                                    "For early-stage Type 2 diabetes",
                                    "Combines medication, diet, and lifestyle changes",
                                    "82% success rate in reducing medication dependence"
                                ]
                            },
                            {
                                title: "2. Diabetes Education Workshop",
                                items: [
                                    "Weekly sessions on:",
                                    "o Carb counting",
                                    "o Insulin administration",
                                    "o Complication prevention"
                                ]
                            },
                            {
                                title: "3. Corporate Diabetes Screening",
                                items: [
                                    "On-site HbA1c testing for companies",
                                    "Executive health packages",
                                    "Workplace wellness talks"
                                ]
                            }
                        ].map((program, index) => (
                            <div 
                                key={index}
                                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group perspective-1000 animate-flipIn delay-600"
                            >
                                <div className="relative preserve-3d group-hover:rotate-y-180 transition-transform duration-700 h-full">
                                    <div className="backface-hidden h-full">
                                        <h3 className="text-xl font-bold mb-3 text-[#fd5753]">{program.title}</h3>
                                        <ul className="space-y-2">
                                            {program.items.map((item, i) => (
                                                <li 
                                                    key={i} 
                                                    className="flex items-start group-hover:text-[#fd5753] transition-colors"
                                                >
                                                    {item.startsWith("o ") ? (
                                                        <>
                                                            <span className="text-red-400 mr-2">o</span>
                                                            <span>{item.substring(2)}</span>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <span className="text-red-400 mr-2">•</span>
                                                            <span>{item}</span>
                                                        </>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="absolute top-0 left-0 w-full h-full bg-[#fd5753] text-white rounded-lg p-6 flex flex-col justify-center backface-hidden rotate-y-180">
                                        <h3 className="text-xl font-bold mb-3 text-white">Learn More</h3>
                                        <p className="mb-4">Click to contact us about our {program.title.toLowerCase()}</p>
                                        <button className="mt-auto bg-white text-[#fd5753] font-bold py-2 px-4 rounded-full self-start">
                                            Enquire Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Recognition Section with particle animation */}
            <div className="py-8 bg-[#fd5753] text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 animate-particle">
                    {[...Array(20)].map((_, i) => (
                        <div 
                            key={i}
                            className="absolute bg-white rounded-full"
                            style={{
                                width: `${Math.random() * 10 + 5}px`,
                                height: `${Math.random() * 10 + 5}px`,
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                                animationDelay: `${Math.random() * 5}s`
                            }}
                        ></div>
                    ))}
                </div>
                <div className="container mx-auto px-4 md:px-6 text-center relative z-10 animate-fadeIn">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4">
                        Why CSB Hospital is Faridabad's Endocrinology Leader
                    </h1>
                    <div className="max-w-3xl mx-auto">
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            {[
                                "Highest patient satisfaction rates in NCR",
                                "Latest diabetes technologies available",
                                "Affordable treatment packages",
                                "Holistic care approach"
                            ].map((item, index) => (
                                <li 
                                    key={index}
                                    className="flex items-center justify-center animate-bounceIn delay-700"
                                >
                                    <span className="mr-2 text-2xl">✓</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="italic animate-fadeIn delay-800">
                            Our endocrinology department has been recognized as the best endocrinology hospital in Faridabad by Health Times 2023.
                        </p>
                    </div>
                </div>
            </div>

            {/* CTA Section with pulse animation */}
            <div className="py-12 bg-slate-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 animate-shine"></div>
                <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 animate-pulse">
                        Schedule Your Consultation
                    </h2>
                    <p className="text-lg mb-6 max-w-2xl mx-auto animate-fadeIn delay-100">
                        Take control of your metabolic health today with Faridabad's top diabetes and endocrinology doctors.
                    </p>
                    <button className="bg-[#fd5753] hover:bg-[#e04a47] text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 animate-bounce delay-300">
                        Book an Appointment
                    </button>
                </div>
            </div>

            {/* FAQ Section with accordion animation */}
            <div className="py-8 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center animate-fadeIn">
                        Frequently Asked Questions
                    </h1>
                    
                    <div className="max-w-3xl mx-auto space-y-4">
                        {[
                            {
                                question: "Q: How often should diabetics see an endocrinologist?",
                                answer: "A: Every 3-6 months for stable cases, more frequently if adjusting treatment."
                            },
                            {
                                question: "Q: Do you offer diabetes diet plans?",
                                answer: "A: Yes, our nutritionists create customized meal plans as part of treatment."
                            },
                            {
                                question: "Q: What's the difference between a diabetologist and endocrinologist?",
                                answer: "A: All diabetologists are endocrinologists, but endocrinologists also treat other hormone disorders."
                            },
                            {
                                question: "Q: How do I know if I need to see a hormone specialist?",
                                answer: "A: Consult if you have: unexplained weight changes, abnormal hair growth, irregular periods, or chronic fatigue."
                            }
                        ].map((faq, index) => (
                            <div 
                                key={index}
                                className="border-b border-gray-200 pb-4 overflow-hidden animate-accordion"
                                style={{ animationDelay: `${index * 100 + 300}ms` }}
                            >
                                <h3 className="text-lg font-semibold mb-2 cursor-pointer group">
                                    <span className="group-hover:text-[#fd5753] transition-colors">{faq.question}</span>
                                </h3>
                                <p className="text-gray-700 transition-all duration-300 ease-in-out">
                                    {faq.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Diabetes;