import { Link, useLocation } from 'react-router-dom';
import { Search, HelpCircle } from 'lucide-react';

const SiteHeader = ({
  statusText = ' ',
  brand = 'solarist',
  year = '2025',
  onSearchClick,
  onHelpClick,
}) => {
  const location = useLocation();
  
  return (
    <header className="fixed top-0 left-0 w-full border-b border-black bg-white z-40 flex justify-between items-center px-2 py-1 font-mono text-[10px] uppercase tracking-wider">
      <div className="flex gap-4 items-center">
        <span>{statusText}</span>
        {/* Search Button */}
        <button
          onClick={onSearchClick}
          className="flex items-center gap-1 hover:bg-black hover:text-white px-2 py-1 transition-all group"
          title="Press Ctrl+K to search"
        >
          <Search className="w-3 h-3" />
          <span className="hidden md:inline">SEARCH</span>
          <span className="hidden lg:inline ml-1 text-[8px] opacity-50 group-hover:opacity-100">⌘K</span>
        </button>
        {/* Help Button */}
        <button
          onClick={onHelpClick}
          className="flex items-center gap-1 hover:bg-black hover:text-white px-2 py-1 transition-all group"
          title="Press ? for keyboard shortcuts"
        >
          <HelpCircle className="w-3 h-3" />
          <span className="hidden md:inline">HELP</span>
          <span className="hidden lg:inline ml-1 text-[8px] opacity-50 group-hover:opacity-100">?</span>
        </button>
      </div>
      
      {/* Navigation */}
      <nav className="flex items-center gap-3">
        <Link 
          to="/"
          className={`hover:bg-black hover:text-white px-2 py-1 transition-all ${
            location.pathname === '/' ? 'bg-black text-white' : ''
          }`}
        >
          HOME
        </Link>
        <Link 
          to="/archive"
          className={`hover:bg-black hover:text-white px-2 py-1 transition-all ${
            location.pathname === '/archive' ? 'bg-black text-white' : ''
          }`}
        >
          ARCHIVE
        </Link>
        <Link 
          to="/about"
          className={`hover:bg-black hover:text-white px-2 py-1 transition-all ${
            location.pathname === '/about' ? 'bg-black text-white' : ''
          }`}
        >
          ABOUT
        </Link>
      </nav>
      
      <div className="flex items-center gap-2">
        <span className="hidden md:inline text-gray-400">
          &copy;{year} {brand}
        </span>
      </div>
    </header>
  );
};

export default SiteHeader;
