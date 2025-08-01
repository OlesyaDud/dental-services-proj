import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      {/* Top Contact Bar */}
      <div className="hidden md:flex items-center justify-between px-20 py-2 text-sm text-gray-500 border-b border-gray-200">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4" />
            <span>(555) 123-4567</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4" />
            <span>123 Main St, City, ST 12345</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4" />
            <span>Mon-Fri: 8AM-6PM</span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="flex items-center justify-between px-20 py-4 bg-white">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
            D
          </div>
          <span className="text-xl font-semibold text-gray-800">
            DentalCare
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-gray-700 text-sm font-medium">
          <a href="#home" className="hover:text-blue-600 transition-colors">
            Home
          </a>
          <a href="#services" className="hover:text-blue-600 transition-colors">
            Services
          </a>
          <a href="#about" className="hover:text-blue-600 transition-colors">
            About
          </a>
          <a
            href="#testimonials"
            className="hover:text-blue-600 transition-colors"
          >
            Testimonials
          </a>
          <a href="#contact" className="hover:text-blue-600 transition-colors">
            Contact
          </a>
        </nav>

        {/* ShadCN Button */}
        <Button className="hidden md:flex bg-gradient-to-r from-blue-500 to-blue-800 text-white hover:opacity-90 px-6 py-2 rounded-md font-semibold shadow">
          Book Appointment
        </Button>

        {/* Mobile Menu Icon */}
        <Button variant="ghost" size="icon" className="md:hidden">
          <span className="sr-only">Open menu</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </Button>
      </div>
    </header>
  );
};

export default Header;
