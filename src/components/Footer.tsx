import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-screen-xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          
          {/* Exclusive Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Exclusive</h3>
            <p className="mb-4 text-sm">Get 10% off your first order</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 w-full rounded-l bg-gray-800 placeholder-gray-400 text-sm text-white border-none focus:outline-none"
              />
              <button
                type="submit"
                className="bg-white text-black px-4 py-2 rounded-r"
              >
                ➤
              </button>
            </form>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <p className="text-sm">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
            <p className="my-2 text-sm">exclusive@gmail.com</p>
            <p className="text-sm">+88015-88888-9999</p>
          </div>

          {/* Account Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Account</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:underline">My Account</a></li>
              <li><a href="#" className="text-sm hover:underline">Login / Register</a></li>
              <li><a href="#" className="text-sm hover:underline">Cart</a></li>
              <li><a href="#" className="text-sm hover:underline">Wishlist</a></li>
              <li><a href="#" className="text-sm hover:underline">Shop</a></li>
            </ul>
          </div>

          {/* Quick Link Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Link</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="text-sm hover:underline">Terms Of Use</a></li>
              <li><a href="#" className="text-sm hover:underline">FAQ</a></li>
              <li><a href="#" className="text-sm hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Download App Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Download App</h3>
            <p className="text-sm mb-4">Save $3 with App New User Only</p>
            <div className="flex space-x-4">
              
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="#" aria-label="Facebook" className="text-sm">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="Twitter" className="text-sm">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" aria-label="Instagram" className="text-sm">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="LinkedIn" className="text-sm">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-8 text-center border-t border-gray-700 pt-4 text-sm">
          <p>© Copyright Rimel 2022. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;