import img from '../../assets/photo/hidden.webp';
import image1 from '../../assets/photo/one.webp';
import image2 from '../../assets/photo/two.webp';
import image3 from '../../assets/photo/three.webp';
import image4 from '../../assets/photo/four.webp';
import image5 from '../../assets/photo/five.jpg';

function Ourallservices() {
    return (
        <>
            <div className="relative">
                {/* Hero section */}
                <div className="relative overflow-hidden h-[80px] md:h-[120px]">
                    <img 
                        src={img} 
                        className="w-full h-full object-cover"
                        alt="Gallery"
                    />
                    <div className="absolute inset-0 flex items-center px-6 md:px-10">
                        <h1 className="font-semibold text-3xl md:text-4xl text-black">
                            Our Services
                        </h1>
                    </div>
                </div>

                {/* Services grid */}
                <div className='container mx-auto px-4 py-10'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                        {/* Service card 1 */}
                        <div className='relative group'>
                            <div className='border border-gray-200 p-4 h-full transition-all duration-300 group-hover:bg-[#fd5753]'>
                                <div className='overflow-hidden mb-4 h-40'>
                                    <img src={image1} className='w-full h-full object-cover' alt="Accident & Emergency"/>
                                </div>
                                <h1 className='text-xl font-bold mb-2 group-hover:text-white transition-colors duration-300'>Accident & Emergency</h1>
                                <p className='text-gray-600 group-hover:text-white transition-colors duration-300'>Our hospital is equipped with the latest medical technology, enabling precise diagnoses, faster treatments, and improved patient outcomes. We prioritize emergency care with state-of-the-art facilities and expert medical staff available 24/7.</p>
                            </div>
                            <button className='absolute  left-1/4 transform -translate-x-1/2 h-10 w-32 bg-[#fd5753] text-white group-hover:bg-black transition-colors duration-300'>
                                Read More
                            </button>
                        </div>

                        {/* Service card 2 */}
                        <div className='relative group'>
                            <div className='border border-gray-200 p-4 h-full transition-all duration-300 group-hover:bg-[#fd5753]'>
                                <div className='overflow-hidden mb-4 h-40'>
                                    <img src={image2} className='w-full h-full object-cover' alt="Health checks"/>
                                </div>
                                <h1 className='text-xl font-bold mb-2 group-hover:text-white transition-colors duration-300'>Health checks</h1>
                                <p className='text-gray-600 group-hover:text-white transition-colors duration-300'>Regular health check-ups help detect potential health issues before they become serious. At our facility, we offer comprehensive health screenings tailored to your age, gender, and medical history, using advanced diagnostic tools.</p>
                            </div>
                            <button className='absolute  left-1/4 transform -translate-x-1/2 h-10 w-32 bg-[#fd5753] text-white group-hover:bg-black transition-colors duration-300'>
                                Read More
                            </button>
                        </div>

                        {/* Service card 3 */}
                        <div className='relative group'>
                            <div className='border border-gray-200 p-4 h-full transition-all duration-300 group-hover:bg-[#fd5753]'>
                                <div className='overflow-hidden mb-4 h-40'>
                                    <img src={image3} className='w-full h-full object-cover' alt="Home Care"/>
                                </div>
                                <h1 className='text-xl font-bold mb-2 group-hover:text-white transition-colors duration-300'>Home Care</h1>
                                <p className='text-gray-600 group-hover:text-white transition-colors duration-300'>Our home care services provide medical and personal assistance in the comfort of your home. Whether it's post-surgery care, elderly care, or chronic condition management, our trained professionals deliver compassionate care.</p>
                            </div>
                            <button className='absolute left-1/4 transform -translate-x-1/2 h-10 w-32 bg-[#fd5753] text-white group-hover:bg-black transition-colors duration-300'>
                                Read More
                            </button>
                        </div>

                        {/* Service card 4 */}
                        <div className='relative group'>
                            <div className='border border-gray-200 p-4 h-full transition-all duration-300 group-hover:bg-[#fd5753]'>
                                <div className='overflow-hidden mb-4 h-40'>
                                    <img src={image4} className='w-full h-full object-cover' alt="Diabetes & Endocrinology"/>
                                </div>
                                <h1 className='text-xl font-bold mb-2 group-hover:text-white transition-colors duration-300'>Diabetes & Endocrinology</h1>
                                <p className='text-gray-600 group-hover:text-white transition-colors duration-300'>Our Diabetes & Endocrinology department offers expert diagnosis, treatment, and long-term management of hormonal disorders including diabetes, thyroid issues, PCOS, and metabolic disorders with personalized care plans.</p>
                            </div>
                            <button className='absolute  left-1/4 transform -translate-x-1/2 h-10 w-32 bg-[#fd5753] text-white group-hover:bg-black transition-colors duration-300'>
                                Read More
                            </button>
                        </div>
                    </div>

                    {/* Additional small card at the end */}
                    <div className='flex justify-center mt-20  mb-12'>
                        <div className='relative group w-full max-w-md'>
                            <div className='border border-gray-200 p-4 h-full transition-all duration-300 group-hover:bg-[#fd5753]'>
                                <div className='overflow-hidden mb-4 h-40'>
                                    <img src={image5} className='w-full h-full object-cover' alt="ICU"/>
                                </div>
                                <h1 className='text-xl font-bold mb-2 group-hover:text-white transition-colors duration-300'>ICU</h1>
                                <p className='text-gray-600 group-hover:text-white transition-colors duration-300'>At CSB Hospital, we operate one of the most advanced ICU facilities in the region, providing round-the-clock intensive care for patients with critical conditions, staffed by highly trained specialists and equipped with cutting-edge life support systems.</p>
                            </div>
                            <button className='absolute left-1/7 transform -translate-x-1/2 h-10 w-32 bg-[#fd5753] text-white group-hover:bg-black transition-colors duration-300'>
                                Read More
                            </button>
                        </div>
                    </div>
                    <div className='flex justify-center mt-4'>
                        <div className='h-13 w-13 bg-[#fd5753] text-white flex items-center justify-center'>
                            <a href="" className=''>1</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Ourallservices;