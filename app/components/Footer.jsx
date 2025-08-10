"use client"
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import {FaApple } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="bg-pink-50 text-gray-800 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Registered Office */}
          <div>
            <PlatinumRxLogo
              className="h-8 w-auto mb-4"
            />
            <h2>PlatinumRx</h2>
            <h4 className="font-semibold">Registered Office Address</h4>
            <p className="mt-2 text-sm">
              Afolife Retail Pvt. Ltd.<br />
              522, 24th Main Road, Parangi Palya, Sector 2 HSR Layout,<br />
              Bengaluru, Karnataka 560102
            </p>
            <p className="mt-2 text-sm">
              <strong>Drug License Number:</strong><br />
              1 Form 20B – KA-B21-277412<br />
              2 Form 21B – KA-B21-277414
            </p>
            <p className="mt-2 text-sm">
              <strong>GSTIN:</strong> 29ABBCA7096E1ZG<br />
              <strong>CIN:</strong> U47910KA2025PTC201566<br />
              <strong>Phone:</strong> +91 96069 75756
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-semibold mb-2">Know Us</h4>
              <ul className="space-y-1">
                <li><a href="#" className="hover:underline">About PlatinumRx</a></li>
                <li><a href="#" className="hover:underline">How to buy Medicines</a></li>
                <li><a href="#" className="hover:underline">All Medicines</a></li>
                <li><a href="#" className="hover:underline">FAQs</a></li>
                <li><a href="#" className="hover:underline">All Blogs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Policies</h4>
              <ul className="space-y-1">
                <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                <li><a href="#" className="hover:underline">Editorial Policy</a></li>
                <li><a href="#" className="hover:underline">Contact Us</a></li>
              </ul>
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="font-semibold mb-2">Contact Us</h4>
            <p className="text-sm">
              Our customer support team is available 7 days a week from 10:00 am - 7:00 pm.<br />
              <a href="mailto:care@platinumrx.in" className="text-pink-600 hover:underline">
                care@platinumrx.in
              </a><br />
              +91 96069 75756
            </p>
            <p className="mt-3 text-sm">
              <strong>Grievance Officer:</strong><br />
              Name: Abhishek Jain<br />
              Email: <a href="mailto:care@platinumrx.in" className="text-pink-600 hover:underline">
                care@platinumrx.in
              </a>
            </p>
          </div>
        </div>

        {/* App Download Section */}
        <div className="mt-8 border-t border-gray-300 pt-6 text-center">
          <h4 className="font-semibold">Download PlatinumRx App</h4>
          <p className="text-sm mt-1 mb-4">
            Download PlatinumRx today to save on medicines and take charge of your health — Seamlessly, Affordably, and Reliably
          </p>
          <div className="flex justify-center gap-4 mb-4">
            <a href="#"><FaApple size={40} className="h-10" /></a>
            <a href="#"><img src="/Icon.png" alt="Google Play" className="h-10" /></a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-4 text-pink-600">
            <a href="#"><FaYoutube size={20} /></a>
            <a href="#"><FaTwitter size={20} /></a>
            <a href="#"><FaInstagram size={20} /></a>
            <a href="#"><FaFacebookF size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/*import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaApple } from "react-icons/fa";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
//import platinumLogo from "@/assets/platinum-logo.png";
//import appleIcon from "@/assets/apple-icon.png";
//import playstoreIcon from "@/assets/playstore-icon.png";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
     
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
         
          <div className="space-y-4">
            <PlatinumRxLogo className="h-10" />
            <p className="text-gray-600 text-sm">
              Your trusted online pharmacy delivering quality medicines with complete safety and convenience.
            </p>
            <div className="flex gap-3">
              {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="p-2 rounded-full border border-gray-300 text-gray-600 hover:text-gray-900 hover:border-gray-400 transition"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

         
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["About Us", "How it Works", "Privacy Policy", "Terms & Conditions", "Return Policy"].map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">{item}</a>
                </li>
              ))}
            </ul>
          </div>

         
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
            <ul className="space-y-2">
              {["Diabetes Care", "Health Conditions", "Healthcare Devices", "Personal Care", "Vitamins & Supplements"].map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">{item}</a>
                </li>
              ))}
            </ul>
          </div>

         
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <FaPhoneAlt className="h-4 w-4 text-blue-600" />
                <span className="text-sm text-gray-600">+91 96069 73756</span>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="h-4 w-4 text-blue-600" />
                <span className="text-sm text-gray-600">info@platinumrx.in</span>
              </div>
              <div className="flex items-start gap-2">
                <FaMapMarkerAlt className="h-4 w-4 text-blue-600 mt-0.5" />
                <span className="text-sm text-gray-600">HSR Layout, Bangalore, India</span>
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-gray-900 mb-2">Download Our App</p>
              <div className="flex gap-2">
                <FaApple className="h-8 w-8" />
                <img src='/Icon.png' alt="Get it on Google Play" className="h-8 w-8" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold text-gray-900">Stay Updated</h3>
              <p className="text-gray-600 text-sm">Subscribe to our newsletter for health tips and offers</p>
            </div>
            <form className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="border border-gray-300 rounded-l px-3 py-2 w-full md:w-64 text-sm focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

     
      <div className="bg-gray-100 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
            <p>&copy; 2024 PlatinumRx. All rights reserved.</p>
            <div className="flex gap-6 mt-2 md:mt-0">
              {["License", "Security", "Sitemap"].map((link, idx) => (
                <a key={idx} href="#" className="hover:text-gray-900">{link}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
*/
// --- Logo SVG ---
function PlatinumRxLogo() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mr-2"
    >
      <g clipPath="url(#clip0_1455_1616)">
        <path
          d="M9.97551 31.2849H8.44265C3.78712 31.2849 -0.00468445 27.4994 -0.00468445 22.8411V22.7367C-0.00468445 18.0831 3.78238 14.2929 8.44265 14.2929H9.45823C10.1701 14.2929 10.7491 14.8716 10.7491 15.5832C10.7491 16.2947 10.1701 16.8735 9.45823 16.8735H8.44265C5.21083 16.8735 2.58172 19.5015 2.58172 22.732V22.8363C2.58172 26.0668 5.21083 28.6949 8.44265 28.6949H9.97551C10.6874 28.6949 11.2663 29.2736 11.2663 29.9851C11.2663 30.6967 10.6874 31.2754 9.97551 31.2754"
          fill="#F44D4D"
        />
        <path
          d="M23.6572 16.883H15.6038C14.892 16.883 14.313 16.3042 14.313 15.5927C14.313 14.8811 14.892 14.3024 15.6038 14.3024H23.6572C26.8891 14.3024 29.5182 11.6743 29.5182 8.44385C29.5182 5.21336 26.8891 2.58534 23.6572 2.58534H22.6512C19.4193 2.58534 16.7902 5.21336 16.7902 8.44385V10.5975C16.7902 11.3091 16.2113 11.8878 15.4994 11.8878C14.7876 11.8878 14.2086 11.3091 14.2086 10.5975V8.44385C14.2038 3.7855 17.9909 0 22.6512 0H23.6572C28.3128 0 32.1046 3.7855 32.1046 8.43911C32.1046 13.0927 28.3175 16.883 23.6572 16.883Z"
          fill="#F44D4D"
        />
        <path
          d="M37.5528 31.3376H36.447C35.7352 31.3376 35.1562 30.7589 35.1562 30.0473C35.1562 29.3357 35.7352 28.757 36.447 28.757H37.5528C40.7846 28.757 43.4137 26.129 43.4137 22.8985V22.7941C43.4137 19.5637 40.7846 16.9356 37.5528 16.9356H36.0342C35.3223 16.9356 34.7433 16.3569 34.7433 15.6453C34.7433 14.9338 35.3223 14.355 36.0342 14.355H37.5528C42.2083 14.355 46.0001 18.1405 46.0001 22.7989V22.9032C46.0001 27.5568 42.2131 31.3471 37.5528 31.3471"
          fill="#EA855E"
        />
        <path
          d="M23.4675 46H22.4851C17.8296 46 14.0378 42.2145 14.0378 37.5561C14.0378 32.8978 17.8248 29.117 22.4851 29.117H30.9752C31.687 29.117 32.266 29.6958 32.266 30.4073C32.266 31.1189 31.687 31.6976 30.9752 31.6976H22.4851C19.2533 31.6976 16.6242 34.3257 16.6242 37.5561C16.6242 40.7866 19.2533 43.4147 22.4851 43.4147H23.4675C26.6993 43.4147 29.3284 40.7866 29.3284 37.5561V35.4025C29.3284 34.6909 29.9074 34.1122 30.6192 34.1122C31.3311 34.1122 31.9101 34.6909 31.9101 35.4025V37.5561C31.9101 42.2098 28.123 46 23.4627 46"
          fill="#EA855E"
        />
      </g>
      <defs>
        <clipPath id="clip0_1455_1616">
          <rect width="46" height="46" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
