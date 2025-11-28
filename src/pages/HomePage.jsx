import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import GlitchText from '../components/GlitchText';
import ListItem from '../components/ListItem';
import { EditableText } from '../components/AdminMode';

const HomePage = ({ posts = [] }) => {
  const navigate = useNavigate();
  const [listFocusIndex, setListFocusIndex] = useState(-1);
  const [isKeyboardMode, setIsKeyboardMode] = useState(false);
  
  // 只显示最近的几篇文章（不超过10篇）
  const recentPosts = posts.slice(0, 10);

  useEffect(() => {
    if (listFocusIndex < 0) return;
    const element = document.getElementById(`list-item-${listFocusIndex}`);
    if (!element) return;

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest'
    });
  }, [listFocusIndex]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!['ArrowUp', 'ArrowDown', 'Enter'].includes(event.key)) return;
      if (!recentPosts.length) return;

      if (['ArrowUp', 'ArrowDown'].includes(event.key)) {
        event.preventDefault();
        setIsKeyboardMode(true);
        
        // Initialize focus index if not set
        if (listFocusIndex === -1) {
          setListFocusIndex(0);
          return;
        }
      }

      if (event.key === 'ArrowDown') {
        setListFocusIndex((prev) => {
          if (prev === -1) return 0;
          return (prev + 1) % recentPosts.length;
        });
      } else if (event.key === 'ArrowUp') {
        setListFocusIndex((prev) => {
          if (prev === -1) return recentPosts.length - 1;
          return (prev - 1 + recentPosts.length) % recentPosts.length;
        });
      } else if (event.key === 'Enter' && listFocusIndex !== -1) {
        event.preventDefault();
        navigate(`/post/${recentPosts[listFocusIndex].id}`);
      }
    };

    const handleMouseMove = () => {
      if (isKeyboardMode) {
        setIsKeyboardMode(false);
        setListFocusIndex(-1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [listFocusIndex, recentPosts, isKeyboardMode, navigate]);

  return (
    <div className={`fade-in-content ${isKeyboardMode ? 'keyboard-mode' : ''}`}>
      <div className="p-4 md:p-12 border-b border-black min-h-[40vh] flex flex-col justify-end relative">
        <h1 className="text-[12vw] leading-[0.8] font-black tracking-tighter uppercase break-all">
          <GlitchText text="SOLARIST" />
          <br />
          <span className="outline-text text-transparent stroke-black stroke-2" style={{ WebkitTextStroke: '2px black' }}>
            ARCHIVE
          </span>
        </h1>
        <div className="flex justify-between items-end mt-8 font-mono text-sm md:w-1/2">
          <p>
            <EditableText 
              id="home-keyboard-hint" 
              defaultValue="KEYBOARD NAVIGATION ENABLED." 
            />
            <br />
            <EditableText 
              id="home-keyboard-hint-2" 
              defaultValue="PRESS ? FOR SHORTCUTS." 
            />
          </p>
        </div>
      </div>

      {/* Recent Posts */}
      <div className="p-4 md:px-12 pt-8 pb-4">
        <h2 className="text-3xl font-black uppercase">
          <EditableText 
            id="home-recent-title" 
            defaultValue="RECENT POSTS" 
          />
        </h2>
      </div>

      <div className="flex flex-col border-l border-black ml-0 md:ml-[20%]">
        {recentPosts.map((item, idx) => (
          <ListItem 
            key={item.id} 
            {...item} 
            index={idx} 
            isFocused={listFocusIndex === idx} 
            onHover={isKeyboardMode ? undefined : setListFocusIndex}
            disableHover={isKeyboardMode}
          />
        ))}
      </div>

      {posts.length > 10 && (
        <div className="p-4 md:px-12 pb-12 flex justify-center">
          <Link
            to="/archive"
            className="group border-2 border-black px-6 py-3 font-mono text-sm uppercase hover:bg-black hover:text-white transition-all"
          >
            View All {posts.length} Articles →
          </Link>
        </div>
      )}
    </div>
  );
};

export default HomePage;
