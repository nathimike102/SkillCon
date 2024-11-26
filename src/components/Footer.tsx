import { Heart, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-purple-500">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <Heart className="h-8 w-8 text-white" />
              <span className="ml-2 text-xl font-bold text-white">SkillCon</span>
            </div>
            <p className="mt-4 text-white">Connecting skilled volunteers with meaningful opportunities worldwide.</p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-white hover:text-purple-200">About Us</Link></li>
              <li><Link to="/projects" className="text-white hover:text-purple-200">Browse Projects</Link></li>
              <li><Link to="/non-profits" className="text-white hover:text-purple-200">For Nonprofits</Link></li>
              <li><Link to="/impact-stories" className="text-white hover:text-purple-200">Impact Stories</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-white hover:text-purple-200">Blog</Link></li>
              <li><Link to="/faq" className="text-white hover:text-purple-200">FAQ</Link></li>
              <li><Link to="/privacy" className="text-white hover:text-purple-200">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-white hover:text-purple-200">Terms of Service</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-white">
                <Mail className="h-5 w-5 mr-2" />
                <a href="mailto:contact@skillcon.org" className="hover:text-purple-200">contact@skillcon.org</a>
              </li>
              <li className="flex items-center text-white">
                <Phone className="h-5 w-5 mr-2" />
                <a href="tel:+12563754207" className="hover:text-purple-200">+1 (256) 375-4207</a>
              </li>
              <li className="flex items-center text-white">
                <MapPin className="h-5 w-5 mr-2" />
                <span>San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-purple-400">
          <p className="text-center text-white">© {new Date().getFullYear()} SkillCon.org. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}