import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import hero from "@assets/Images/hero-section.svg";

const HeroSection = () => {
  return (
    <div className="bg-slate-50 flex items-center min-h-[90vh]">
      <div className="max-w-7xl w-full mx-auto px-4 grid grid-cols-5 items-center gap-2 ">
        <div className="col-span-2  space-y-4">
          <p className="text-pink-600 text-xs font-semibold">
            UNLEASH YOUR POTENTIAL
          </p>
          <p className="text-6xl font-bold text-slate-900 max-w-xl">
            Empowering Minds, Shaping Futures.
          </p>
          <p className="text-sm font-medium text-slate-400 max-w-lg">
            Education is the key that unlocks the doors of opportunity,
            empowering us to achieve our dreams and create a brighter future.
          </p>
          <div className="flex">
            <div className="flex bg-pink-600 text-white text-xs uppercase rounded-full font-medium px-4 py-2">
              Get Started
            </div>
          </div>
          <div className="flex flex-row items-center space-x-4">
            <div className="flex flex-row space-x-1 items-center py-1 px-2 bg-slate-100 rounded-full">
              <FaFacebook height={20} width={20} className="text-slate-400" />
              <p className="text-xs">Facebook</p>
            </div>
            <div className="flex flex-row space-x-1 items-center py-1 px-2 bg-slate-100 rounded-full">
              <FaLinkedin height={20} width={20} className="text-slate-400" />
              <p className="text-xs">LinkedIn</p>
            </div>
            <div className="flex flex-row space-x-1 items-center py-1 px-2 bg-slate-100 rounded-full">
              <FaInstagram height={20} width={20} className="text-slate-400" />
              <p className="text-xs">Instagram</p>
            </div>
          </div>
        </div>
        <div className="col-span-3 h-full">
          <img src={hero} alt="hero section" className="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
