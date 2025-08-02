function BottomFooter() {
  return (
    <div className="bg-[#1e1e1e] text-white py-8 
                   ">
      <div className="container mx-auto flex flex-col items-center text-center px-4">
        
        {/* Links (Responsive) */}
<div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 mb-4">
  <a href="#" className="text-sm hover:text-red-400 cursor-pointer">
    MAKE AN ENQUIRY
  </a>
  <a href="#" className="text-sm hover:text-red-400 cursor-pointer">
    BOOK AN APPOINTMENT
  </a>
  <a href="#" className="text-sm hover:text-red-400 cursor-pointer">
    TERMS AND CONDITIONS
  </a>
</div>


        {/* Copyright */}
<div className="text-sm md:text-base leading-tight px-2 text-center">
  © 2025 All Rights Reserved by CSB Hospital <br className="md:hidden" />
  Designed by{" "}
  <span className="text-red-400 font-semibold cursor-pointer">
    JBH Tech Innovation
  </span>
</div>

      </div>

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-5 right-5 bg-red-400 hover:bg-red-500 text-white w-10 h-10 rounded-md flex items-center justify-center shadow-lg"
      >
        <span className="text-xl">↑</span>
      </button>
    </div>
  );
}

export default BottomFooter;
