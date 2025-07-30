import gallery from './assets/photo/hidden.webp';
import { IoReorderFourSharp } from "react-icons/io5";
import { IoWomanOutline } from "react-icons/io5";
import { GiMedicines } from "react-icons/gi";
import { GiRomanToga } from "react-icons/gi";
import first from './assets/photo/first.webp';
import second from './assets/photo/2.webp';
import third from './assets/photo/10051.webp';
import four from './assets/photo/4.webp';
import five from './assets/photo/7.webp';
import six from './assets/photo/9.webp';
import seven from './assets/photo/10.webp';
import { BsArrowsFullscreen } from "react-icons/bs";
import { FaLink } from "react-icons/fa6";

function Gallery() {
    // Separate the first image
    const firstImage = { src: first, title: "MEMORIES", subtitle: "Together For Better Health" };
    
    // Remaining images in groups of three
    const remainingImages = [
        { src: second, title: "MEMORIES", subtitle: "Together For Better Health" },
        { src: third, title: "MEMORIES", subtitle: "Together For Better Health" },
        { src: four, title: "MEMORIES", subtitle: "Together For Better Health" },
        { src: five, title: "MEMORIES", subtitle: "Together For Better Health" },
        { src: six, title: "MEMORIES", subtitle: "Together For Better Health" },
        { src: seven, title: "MEMORIES", subtitle: "Together For Better Health" }
    ];

    // Split remaining images into groups of three
    const imageGroups = [];
    for (let i = 0; i < remainingImages.length; i += 3) {
        imageGroups.push(remainingImages.slice(i, i + 3));
    }

    return (
       <div className="relative">
  {/* Hero section */}
 <div className="relative overflow-hidden h-[80px] md:h-[120px]">
  <img 
    src={gallery} 
    className="w-full h-full object-cover"
    alt="Gallery"
  />
  <div className="absolute inset-0 flex items-center px-6 md:px-10">
    <h1 className="font-semibold text-3xl md:text-4xl text-black">
      Image Gallery
    </h1>
  </div>
</div>

            {/* Filter buttons - Modified as requested */}
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-wrap justify-center gap-4 animate-buttonsFade">
                    <FilterButton icon={<IoReorderFourSharp className="text-xl text-black" />} text="SHOW ALL IMAGE" />
                    <FilterButton icon={<IoWomanOutline className="text-xl text-black" />} text="HOME CARE" />
                    <FilterButton icon={<GiMedicines className="text-xl text-black" />} text="DIABETES SOLUTION" />
                    <FilterButton icon={<GiRomanToga className="text-xl text-black" />} text="BARIATRIC SURGERY" />
                    <FilterButton icon={<IoWomanOutline className="text-xl text-black" />} text="DENTAL MEDICINE" />
                </div>
            </div>

            {/* First single centered image */}
            <div className="container mx-auto px-4 py-8 flex justify-center">
                <div className="w-full sm:w-2/3 lg:w-1/2">
                    <ImageCard 
                        src={firstImage.src}
                        title={firstImage.title}
                        subtitle={firstImage.subtitle}
                    />
                </div>
            </div>

            {/* Remaining images in groups of three */}
            {imageGroups.map((group, groupIndex) => (
                <div key={groupIndex} className="container mx-auto px-4 py-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {group.map((image, index) => (
                            <ImageCard 
                                key={index}
                                src={image.src}
                                title={image.title}
                                subtitle={image.subtitle}
                            />
                        ))}
                    </div>
                </div>
                
            ))}
           <div className="flex justify-center my-10">
  <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-5">
    {/* PREV Button */}
    <div className="relative group bg-white h-8 sm:h-10 w-16 sm:w-20 border border-gray-300 flex items-center justify-center cursor-pointer transition-all duration-300 overflow-hidden ">
      <span className="text-black group-hover:text-white z-10 transition-colors duration-300 text-sm sm:text-base">PREV</span>
      <div className="absolute top-0 left-0 h-full w-0 bg-[#fd5753] group-hover:w-full transition-all duration-500"></div>
    </div>
    
    {/* Page Numbers */}
    {[1, 2, 3, 4].map((num) => (
      <div key={num} className="relative group bg-white h-8 sm:h-10 w-8 sm:w-10 border border-gray-300 flex items-center justify-center cursor-pointer transition-all duration-300 overflow-hidden ">
        <span className="text-black group-hover:text-white z-10 transition-colors duration-300 text-sm sm:text-base">{num}</span>
        <div className="absolute top-0 left-0 h-full w-0 bg-[#fd5753] group-hover:w-full transition-all duration-500"></div>
      </div>
    ))}
    
    {/* NEXT Button */}
    <div className="relative group bg-white h-8 sm:h-10 w-16 sm:w-20 border border-gray-300 flex items-center justify-center cursor-pointer transition-all duration-300 overflow-hidden ">
      <span className="text-black group-hover:text-white z-10 transition-colors duration-300 text-sm sm:text-base">NEXT</span>
      <div className="absolute top-0 left-0 h-full w-0 bg-[#fd5753] group-hover:w-full transition-all duration-500"></div>
    </div>
  </div>
</div>
</div>
        
    );
}

// Image card component with hover effects (same as before)
function ImageCard({ src, title, subtitle }) {
    return (
        <div className="relative group overflow-hidden rounded-lg shadow-md transition-all duration-500 hover:shadow-xl">
            <img 
                src={src} 
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Gallery item"
            />
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-4">
                <div className="absolute top-0 left-0 h-1 w-0 bg-[#fd5753] group-hover:w-full transition-all duration-500"></div>
                <h3 className="text-white text-xl font-bold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{title}</h3>
                <p className="text-white/80 mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{subtitle}</p>
                <div className="flex gap-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                    <FaLink className="text-white text-xl hover:text-[#fd5753] cursor-pointer" />
                    <BsArrowsFullscreen className="text-white text-xl hover:text-[#fd5753] cursor-pointer" />
                </div>
            </div>
            
        </div>
        
    );
}

// Updated FilterButton component with requested changes
function FilterButton({ icon, text }) {
    return (
        <button className="relative group flex items-center px-6 py-2 h-[80px] w-[200px] border border-gray-300  overflow-hidden transition-all duration-500">
            <span className="mr-2 z-10 text-black">{icon}</span>
            <span className="z-10 text-black">{text}</span>
            
            {/* Top border animation only */}
            <span className="absolute top-0 left-0 h-0.5 w-0 bg-[#fd5753] group-hover:w-full transition-all duration-500"></span>
        </button>
    );
}

export default Gallery;