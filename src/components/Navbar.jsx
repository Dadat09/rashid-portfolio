import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Terminal } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const isActive = (path) => 
    location.pathname === path 
      ? 'text-teal-400 font-semibold border-b-2 border-teal-400 pb-1' 
      : 'text-slate-400 hover:text-slate-200 transition-colors';

  return (
    <nav className="border-b border-slate-800 bg-slate-900/80 backdrop-blur sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-lg font-bold text-slate-100 flex items-center gap-2">
          <Terminal className="text-teal-400" size={20} />
          <span>Rashid<span className="text-teal-400">.dev</span></span>
        </Link>
        <div className="flex gap-6 text-sm font-medium">
          <Link to="/" className={isActive('/')}>Home</Link>
          <Link to="/about" className={isActive('/about')}>About</Link>
          <Link to="/works" className={isActive('/works')}>Works</Link>
          <Link to="/contact" className={isActive('/contact')}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}