import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-200 text-white px-5 lg:px-20 py-10 xl:mb-0 mb-[40px]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-black">Services</h3>
          <ul className="space-y-2 text-sm text-gray-800">
            <li>Game Store</li>
            <li>Online Multiplayer</li>
            <li>Customer Support</li>
            <li>Community</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-black">Contact</h3>
          <ul className="space-y-2 text-sm text-gray-800">
            <li>Email: support@gamingworld.com</li>
            <li>Phone: +1 (555) 123-4567</li>
            <li>Location: Tokyo, Japan</li>
          </ul>
        </div>

        {/* Pages */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-black">Pages</h3>
          <ul className="space-y-2 text-sm text-gray-800">
            <li>Home</li>
            <li>Characters</li>
            <li>News</li>
            <li>Best Sellers</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-5 text-center text-sm text-gray-600">
        &copy; {new Date().getFullYear()} GamingWorld. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
