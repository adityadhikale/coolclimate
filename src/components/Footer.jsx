import { Link } from "react-router-dom";
import { Home, Wrench, Phone, Info, MapPin, PhoneCall, Mail } from "lucide-react";
import logo from "../assets/logo.webp";
import { dataDetails } from "../data/data.jsx";

const Footer = () => {
  return (
    <footer className="bg-[#333333] text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">

        {/* Logo & Description */}
        <div className="text-center md:text-left">
          <img src={logo} alt="Logo" className="h-12 mx-auto md:mx-0" />
          <p className="mt-4 text-gray-300 text-sm">
            {dataDetails.aboutUs.footerDescription}
          </p>
        </div>

        {/* Navigation Links */}
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="flex items-center justify-center md:justify-start space-x-2 hover:text-gray-400">
              <Home size={18} /> <span>Home</span>
            </Link></li>
            <li><Link to="/" className="flex items-center justify-center md:justify-start space-x-2 hover:text-gray-400">
              <Wrench size={18} /> <span>Services</span>
            </Link></li>
            <li><Link to="/contact-us" className="flex items-center justify-center md:justify-start space-x-2 hover:text-gray-400">
              <Phone size={18} /> <span>Contact Us</span>
            </Link></li>
            <li><Link to="/about-us" className="flex items-center justify-center md:justify-start space-x-2 hover:text-gray-400">
              <Info size={18} /> <span>About Us</span>
            </Link></li>
          </ul>
        </div>

        {/* Contact Details */}
        <div className="text-center md:text-right">
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p className="flex items-center justify-center md:justify-end space-x-2 text-gray-300">
            <MapPin size={18} /> <span>{dataDetails.contactUs.location}</span>
          </p>
          <p className="flex items-center justify-center md:justify-end space-x-2 text-gray-300">
            <PhoneCall size={18} /> <span>{dataDetails.contactUs.phoneNumber[0]}</span>
          </p>
          <p className="flex items-center justify-center md:justify-end space-x-2 text-gray-300">
            <Mail size={18} /> 
            <a href={`mailto:${dataDetails.contactUs.emailId[0]}`} className="hover:text-gray-400">{dataDetails.contactUs.emailId[0]}</a>
          </p>
        </div>
      </div>
      <p className="text-center text-gray-400 text-sm mt-6">© 2025 CoolClimate. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
