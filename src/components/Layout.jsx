import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Noise from './Noise';
import SiteHeader from './SiteHeader';
import SideRail from './SideRail';
import SearchModal from './SearchModal';
import KeyboardHelp from './KeyboardHelp';
import { posts } from '../data/posts';

const Layout = ({ children }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't trigger shortcuts when typing in input fields
      const target = e.target;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        return;
      }

      // Ctrl+K or Cmd+K to open search
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        e.stopPropagation();
        setIsSearchOpen(true);
        return false;
      }

      // ? to toggle help
      if (e.key === '?' && !isSearchOpen) {
        e.preventDefault();
        setIsHelpOpen(prev => !prev);
        return;
      }

      // Escape to close modals
      if (e.key === 'Escape') {
        if (isSearchOpen) setIsSearchOpen(false);
        if (isHelpOpen) setIsHelpOpen(false);
        return;
      }

      // Navigation shortcuts (only when modals are closed)
      if (!isSearchOpen && !isHelpOpen) {
        if (e.key === 'h' || e.key === 'H') {
          e.preventDefault();
          navigate('/');
        } else if (e.key === 'a' || e.key === 'A') {
          e.preventDefault();
          navigate('/archive');
        } else if (e.key === 'b' || e.key === 'B') {
          e.preventDefault();
          navigate('/about');
        }
      }
    };

    // 使用 capture 模式，在事件捕获阶段就拦截
    window.addEventListener('keydown', handleKeyDown, true);
    return () => window.removeEventListener('keydown', handleKeyDown, true);
  }, [isSearchOpen, isHelpOpen, navigate]);

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white overflow-x-hidden">
      <Noise />
      <SiteHeader 
        onSearchClick={() => setIsSearchOpen(true)}
        onHelpClick={() => setIsHelpOpen(true)}
      />
      <SideRail />
      <main className="md:pl-12 pt-8 min-h-screen flex flex-col">{children}</main>
      <SearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
        posts={posts}
      />
      <KeyboardHelp 
        isOpen={isHelpOpen}
        onClose={() => setIsHelpOpen(false)}
      />
    </div>
  );
};

export default Layout;
