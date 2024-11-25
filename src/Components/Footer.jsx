import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
    
        <div>
          <h3 className="text-xl font-bold mb-4">Pitutor</h3>
          <p className="mb-4">
            Jl. Veteran Ketawanggede, Kec. Lowokwaru, Kota Malang, Jawa Timur
          </p>
          <p>&copy;2024, Pitutor Development Tech Team</p>
        </div>

      
        <div>
          <h4 className="text-lg font-semibold mb-4">About Us</h4>
          <ul className="space-y-2">
            <li>
              <a href="#">
                What is a Pitutor
              </a>
            </li>
            <li>
              <a href="#">
                Terms and conditions
              </a>
            </li>
            <li>
              <a href="#">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" >
                Online Course
              </a>
            </li>
            <li>
              <a href="#">
                Join Pitutor
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">What we teach</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" >
                Marketing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Financial
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Human Resources
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Information System
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Computer Science
              </a>
            </li>
          </ul>
        </div>

        {/* Section 4: Contact Info and Social Media */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <p className="mb-2">+081234567890</p>
          <p className="mb-4">+081234567890</p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="p-2 bg-gray-700 hover:bg-gray-600 rounded-full"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-700 hover:bg-gray-600 rounded-full"
            >
              <FaTiktok />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-700 hover:bg-gray-600 rounded-full"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-700 hover:bg-gray-600 rounded-full"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
