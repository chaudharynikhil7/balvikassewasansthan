import React from "react";
import { Link } from "react-router-dom";
import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const Footer = () => {
  const handleSocialClick = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">Bal Vikas Sewa Sansthan</span>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Dedicated to transforming lives through education, nutrition, and care. We serve communities across Delhi
              and Bihar, bringing hope and opportunity to those who need it most.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={handleSocialClick}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                <Facebook className="h-6 w-6" />
              </button>
              <button
                onClick={handleSocialClick}
                className="text-gray-400 hover:text-pink-400 transition-colors duration-200"
              >
                <Instagram className="h-6 w-6" />
              </button>
              <button
                onClick={handleSocialClick}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                <Twitter className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <span className="text-lg font-semibold mb-4 block">Quick Links</span>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Our Programs
                </Link>
              </li>
              <li>
                <Link to="/get-involved" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Get Involved
                </Link>
              </li>
              <li>
                <Link to="/media" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Media Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <span className="text-lg font-semibold mb-4 block">Contact Info</span>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300 text-sm">Delhi & Bihar, India</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300 text-sm">+91 XXXXX XXXXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300 text-sm">info@balvikassewasansthan.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Bal Vikas Sewa Sansthan. All rights reserved. |
            <span className="ml-2">Registered NGO serving communities with love and dedication.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
