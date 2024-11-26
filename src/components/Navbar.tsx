import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Heart, Search } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-gradient-to-r from-purple-500 via-purple-400 to-purple-500 fixed w-full z-50">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <Heart className="h-8 w-8 text-white" />
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/" className="text-white hover:bg-purple-400 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                <Link to="/projects" className="text-white hover:bg-purple-400 px-3 py-2 rounded-md text-sm font-medium">Find Projects</Link>
                <Link to="/non-profits" className="text-white hover:bg-purple-400 px-3 py-2 rounded-md text-sm font-medium">For Nonprofits</Link>
                <Link to="/impact-stories" className="text-white hover:bg-purple-400 px-3 py-2 rounded-md text-sm font-medium">Impact Stories</Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <button className="p-1 rounded-full text-white hover:bg-purple-400 focus:outline-none" title="Search">
                <Search className="h-6 w-6" />
              </button>
              <Link to="/get-started" className="ml-4 px-4 py-2 rounded-md text-white bg-purple-600 hover:bg-purple-700">
                Get Started
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-purple-400 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link to="/projects" className="text-white block px-3 py-2 rounded-md text-base font-medium">Find Projects</Link>
            <Link to="/nonprofits" className="text-white block px-3 py-2 rounded-md text-base font-medium">For Nonprofits</Link>
            <Link to="/impact" className="text-white block px-3 py-2 rounded-md text-base font-medium">Impact Stories</Link>
            <Link to="/get-started" className="block px-3 py-2 rounded-md text-base font-medium text-white bg-purple-600 hover:bg-purple-700">
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}