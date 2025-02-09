import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { X } from "lucide-react";
import { Icon } from "@iconify/react";

const Modal = ({ isOpen, onClose }) => {
  const [show, setShow] = useState(false);

  // Handle modal open/close animation
  useEffect(() => {
    if (isOpen) {
      setShow(true);
    } else {
      setTimeout(() => setShow(false), 200);
    }
  }, [isOpen]);

  if (!isOpen && !show) return null;

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center transition-opacity duration-200 ${
        isOpen ? "opacity-100" : "opacity-0"
      } z-50`}
      style={{ backgroundColor: "oklch(1 0 0 / 0.90)" }} // Apply oklch background
      onClick={onClose} // Close when clicking outside modal
    >
      <div
        className={`bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-md relative transform transition-all duration-200 ${
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        {/* Close Button */}
        <button className="absolute top-2 right-2 text-gray-600 hover:text-gray-800" onClick={onClose}>
          <X className="w-6 h-6" />
        </button>

        {/* Modal Title */}
        <h2 className="text-xl font-bold text-gray-800 mb-4">Book Your Service</h2>

        {/* Form Fields */}
        <form className="space-y-3">
          <div className="relative">
            <Icon icon="mdi:user" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input type="text" placeholder="Full Name" className="w-full p-2 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="relative">
            <Icon icon="mdi:email" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input type="email" placeholder="Email Address" className="w-full p-2 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="relative">
            <Icon icon="mdi:phone" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input type="tel" placeholder="Mobile Number" className="w-full p-2 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="relative">
            <Icon icon="mdi:message" className="absolute left-3 top-3 text-gray-400" />
            <textarea placeholder="Service / Message" rows="3" className="w-full p-2 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
          </div>
          <div className="relative">
            <Icon icon="mdi:map-marker" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input type="text" placeholder="Address" className="w-full p-2 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          {/* Send Button */}
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

// ✅ Add PropTypes validation
Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
