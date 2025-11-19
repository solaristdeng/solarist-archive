import React, { useState, useEffect } from 'react';
import { ArrowUpRight, ArrowLeft, Maximize2, Disc, CornerDownLeft } from 'lucide-react';

// --- 辅助组件：噪点背景 (Noise Overlay) ---
const Noise = () => (
  <div className="fixed inset-0 pointer-events-none opacity-[0.08] z-50 mix-blend-overlay"
       style={{
         backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
       }}
  />
);

// --- 辅助组件：跑马灯 (Marquee) ---
const Marquee = ({ text, direction = 'left', speed = 20 }) => {
  return (
    <div className="relative flex overflow-hidden py-2 border-y border-black bg-black text-white select-none">
      <div className={`animate-marquee whitespace-nowrap flex gap-8 ${direction === 'right' ? 'flex-row-reverse' : ''}`}>
        {Array(10).fill(0).map((_, i) => (
          <span key={i} className="text-sm font-mono uppercase tracking-widest mx-4">
            {text} <span className="mx-4 text-gray-500">///</span>
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee ${speed}s linear infinite;
        }
      `}</style>
    </div>
  );
};

// --- 辅助组件：故障文字 (Glitch Text) ---
const GlitchText = ({ text, className = "" }) => {
  const [display, setDisplay] = useState(text);
  const chars = "!@#$%^&*()_+-=[]{}|;:,.<>?/";

  const handleHover = () => {
    let iterations = 0;
    const interval = setInterval(() => {
      setDisplay(
        text
          .split("")
          .map((letter, index) => {
            if (index < iterations) return text[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );
      if (iterations >= text.length) clearInterval(interval);
      iterations += 1 / 3;
    }, 30);
  };

  return (
    <span onMouseEnter={handleHover} className={`cursor-pointer inline-block ${className}`}>
      {display}
    </span>
  );
};

// --- 页面组件：作品列表项 ---
const ListItem = ({ title, id, index, setView, isFocused, setListFocus }) => {
  return (
    <div 
      onClick={() => setView(id)}
      onMouseEnter={() => setListFocus(index)}
      // 如果被键盘选中 (isFocused)，则应用黑色背景样式
      className={`group border-b border-black py-8 px-4 relative overflow-hidden cursor-none transition-colors duration-0 ${
        isFocused ? 'bg-black text-white' : 'hover:bg-black hover:text-white'
      }`}
    >
      <div className="flex justify-between items-start relative z-10">
        <div className={`w-12 font-mono text-xs pt-2 transition-opacity duration-0 ${isFocused ? 'opacity-100' : 'opacity-50 group-hover:opacity-100'}`}>
          {`(00${index + 1})`}
        </div>
        <div className="flex-1">
          <h2 className={`text-6xl md:text-8xl font-black uppercase leading-[0.8] tracking-tighter transition-transform duration-100 ease-linear ${isFocused ? 'translate-x-4' : 'group-hover:translate-x-4'}`}>
            {title}
          </h2>
          <div className={`mt-2 font-mono text-xs tracking-widest uppercase transition-opacity duration-0 delay-75 ${isFocused ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
            [ Read Article ]
            {isFocused && <span className="ml-4 animate-pulse">PRESS ENTER ↵</span>}
          </div>
        </div>
        <ArrowUpRight className={`w-12 h-12 transition-opacity duration-0 ${isFocused ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
      </div>
    </div>
  );
};

// --- 主页面 ---
const App = () => {
  const [view, setView] = useState('list'); // 'list' | 'detail-id'
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  // 键盘操控状态 (仅用于列表)
  const [listFocusIndex, setListFocusIndex] = useState(0);

  // 模拟数据
  const DATA = [
    { 
      id: 'entropy', 
      title: 'ENTROPY', 
      tag: 'CHAOS THEORY',
      content: [
        "Entropy is not just a measure of disorder; it is the inevitable direction of time itself. In the context of digital brutalism, we embrace this decay. We do not hide the seams or polish the rough edges. We let the structure show, raw and unfiltered.",
        "Traditional design seeks to comfort the user, to guide them gently through a curated experience. But art is not always about comfort. Sometimes, it is about confrontation. It is about stripping away the veneer of perfection to reveal the underlying machinery.",
        "When we allow the glitch to exist, we acknowledge the fragility of the digital systems we rely on. It is a reminder that control is an illusion.",
        "The user interface becomes a battlefield between order and chaos. Every pixel that is out of place is a victory for the organic over the synthetic.",
        "To design with entropy is to design for the end of the world. It is to say: 'Look, it is all falling apart, isn't it beautiful?'"
      ]
    },
    { 
      id: 'silence', 
      title: 'SILENCE', 
      tag: 'VOID STRUCTURE',
      content: [
        "Silence in visual design is usually equated with whitespace (negative space). But true silence is heavier. It is the presence of an absence. It is the black screen before the movie starts, charged with potential.",
        "In a world of constant notification and algorithmic noise, choosing to present stark, unadorned text is a radical act. It forces the reader to slow down. There are no colorful buttons to click, no dopamine loops to feed on.",
        "There is only the text, and the void that surrounds it.",
        "We strip away the navigation, the footer, the social links. We leave you alone with the idea. Uncomfortable? Good.",
        "That discomfort is the sound of your own attention returning to you."
      ]
    },
    { 
      id: 'plastic', 
      title: 'PLASTIC', 
      tag: 'SYNTHETIC LIFE',
      content: [
        "We live in a synthetic reality. The materials of our digital lives—pixels, vectors, code—are infinitely malleable yet ultimately hollow. Brutalism exposes this artificiality.",
        "By using default system fonts and high-contrast colors, we stop pretending that a website is a physical space. It is not a desk, it is not a folder, it is not a cloud. It is light emitted from a screen.",
        "Let us celebrate the plastic nature of the web. Let it be flat. Let it be raw.",
        "Texture is a lie. Drop shadow is a lie. Gradient is a lie. The only truth is the hex code #FFFFFF and #000000.",
        "Embrace the plastic. It will last longer than we will."
      ]
    },
    { 
      id: 'error', 
      title: 'ERROR', 
      tag: 'SYSTEM FAILURE',
      content: [
        "The error is the only moment of truth in a computer system. When things work, they are simulating a reality designed by humans. When they break, they reveal their true nature.",
        "A crash, a glitch, a 404—these are the moments the machine speaks for itself. In this design, we aestheticize the error. We make the breakdown the focal point.",
        "Perfection is boring. Failure is interesting.",
        "We deliberately introduce friction. We make the text hard to read, the navigation hard to find. Why? To wake you up.",
        "Sleepwalking users are profitable users. We do not want profit. We want awareness."
      ]
    },
  ];

  const currentPost = DATA.find(d => d.id === view);

  // 自定义光标逻辑
  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // 键盘事件监听
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (view === 'list') {
        // --- 列表模式：接管键盘 ---
        if (['ArrowUp', 'ArrowDown'].includes(e.key)) {
           e.preventDefault(); // 阻止列表页的滚动
        }

        if (e.key === 'ArrowDown') {
          setListFocusIndex(prev => Math.min(prev + 1, DATA.length - 1));
        } else if (e.key === 'ArrowUp') {
          setListFocusIndex(prev => Math.max(prev - 1, 0));
        } else if (e.key === 'Enter') {
          setView(DATA[listFocusIndex].id);
        }
      } else {
        // --- 文章模式：仅监听 ESC，其余交给原生滚动 ---
        if (e.key === 'Escape' || e.key === 'Backspace') {
          setView('list');
        }
        // 注意：这里不再阻止 ArrowUp/ArrowDown，允许浏览器默认滚动
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [view, listFocusIndex, DATA]);

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white cursor-none overflow-x-hidden">
      <Noise />
      
      {/* 自定义光标 */}
      <div 
        className="fixed w-6 h-6 bg-white rounded-full mix-blend-difference pointer-events-none z-[9999] transform -translate-x-1/2 -translate-y-1/2 border border-black/20"
        style={{ left: mousePos.x, top: mousePos.y }}
      />

      {/* 顶部状态栏 */}
      <header className="fixed top-0 left-0 w-full border-b border-black bg-white z-40 flex justify-between items-center px-2 py-1 font-mono text-[10px] uppercase tracking-wider">
        <div className="flex gap-4">
          <span>MODE: {view === 'list' ? 'NAVIGATION' : 'READING'}</span>
          <span>KBD: {view === 'list' ? 'LOCKED' : 'SCROLL'}</span>
        </div>
        <div className="flex items-center gap-2">
           <span className="hidden md:inline text-gray-400">
             {view === 'list' ? 'USE [↑] [↓] TO NAVIGATE' : 'SCROLL TO READ / ESC TO BACK'}
           </span>
           <div className="animate-pulse text-red-600">● LIVE</div>
        </div>
      </header>

      {/* 侧边栏 */}
      <div className="fixed left-0 top-0 bottom-0 w-12 border-r border-black flex flex-col justify-between items-center py-16 z-30 bg-white hidden md:flex">
        <Disc className="animate-spin duration-[5000ms]" />
        <div className="writing-mode-vertical rotate-180 font-mono text-xs tracking-[0.5em] uppercase">
          Modern Art Minimalism
        </div>
        <div className="h-24 w-[1px] bg-black"></div>
      </div>

      <main className="md:pl-12 pt-8 min-h-screen flex flex-col">
        
        {/* 首页视图 */}
        {view === 'list' && (
          <div className="animate-in fade-in duration-500">
            {/* Hero 区域 */}
            <div className="p-4 md:p-12 border-b border-black min-h-[50vh] flex flex-col justify-end relative">
               <div className="absolute top-4 right-4 md:top-12 md:right-12 w-32 h-32 border border-black rounded-full flex items-center justify-center animate-spin-slow bg-white z-10">
                 <span className="font-mono text-[10px] text-center leading-tight">
                   USE KEYS<br/>TO MOVE
                 </span>
               </div>
               
               <h1 className="text-[12vw] leading-[0.8] font-black tracking-tighter uppercase break-all">
                 <GlitchText text="MINIMAL" /><br/>
                 <span className="outline-text text-transparent stroke-black stroke-2" style={{ WebkitTextStroke: '2px black' }}>MADNESS</span>
               </h1>
               
               <div className="flex justify-between items-end mt-8 font-mono text-sm md:w-1/2">
                 <p>
                   KEYBOARD NAVIGATION ENABLED.<br/>
                   USE ARROW KEYS TO SELECT.<br/>
                   PRESS ENTER TO VIEW.
                 </p>
                 <ArrowUpRight className="w-8 h-8" />
               </div>
            </div>

            <Marquee text="ART DOES NOT NEED TO BE UNDERSTOOD / IT NEEDS TO BE FELT / REJECT TRADITION / EMBRACE THE GLITCH /" speed={15} />

            {/* 列表区域 */}
            <div className="flex flex-col border-l border-black ml-0 md:ml-[20%]">
              {DATA.map((item, idx) => (
                <ListItem 
                  key={item.id} 
                  {...item} 
                  index={idx} 
                  setView={setView} 
                  isFocused={listFocusIndex === idx}
                  setListFocus={setListFocusIndex}
                />
              ))}
            </div>
          </div>
        )}

        {/* 详情页视图 - 恢复正常滚动 */}
        {view !== 'list' && currentPost && (
          <div className="bg-white text-black min-h-screen flex flex-col relative animate-in slide-in-from-bottom-0 duration-300">
             {/* 顶部导航栏 */}
             <div className="sticky top-0 left-0 w-full border-b border-black/10 bg-white/90 backdrop-blur-sm z-50 flex justify-between items-center p-4 md:px-12">
                <button 
                   onClick={() => setView('list')}
                   className="group flex items-center gap-2 font-mono text-xs uppercase tracking-widest hover:bg-black hover:text-white px-3 py-1 transition-all"
                 >
                   <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                   Back [ESC]
                 </button>
                 <div className="font-mono text-xs text-gray-500">
                    DOC_TYPE: PLAIN_TEXT
                 </div>
             </div>

             <div className="flex-1 flex flex-col md:flex-row">
                {/* 左侧：标题区域 */}
                <div className="w-full md:w-1/3 p-6 md:p-12 border-b md:border-b-0 md:border-r border-black flex flex-col justify-center bg-gray-50">
                  <h1 className="text-6xl md:text-7xl font-black uppercase leading-none break-words tracking-tighter mb-4">
                    {currentPost.title}
                  </h1>
                  <div className="w-12 h-2 bg-black mb-6"></div>
                  <p className="font-mono text-xs text-gray-500 space-y-2">
                    <span className="block">ID: {currentPost.id.toUpperCase()}</span>
                    <span className="block">TAG: {currentPost.tag}</span>
                    <span className="block pt-4 text-black">
                       SCROLL FREELY
                    </span>
                  </p>
                </div>

                {/* 右侧：正文阅读区域 - 正常排版 */}
                <div className="w-full md:w-2/3 p-6 md:p-16 md:pt-24 pb-48">
                  <article className="max-w-2xl mx-auto">
                    {currentPost.content.map((paragraph, idx) => (
                        <p key={idx} className="font-sans text-xl md:text-2xl leading-relaxed font-medium text-black mb-8">
                          {paragraph}
                        </p>
                    ))}
                    
                    <div className="mt-24 pt-8 border-t border-black flex justify-between items-center text-black font-mono text-xs">
                      <span>END OF STREAM</span>
                      <div className="flex gap-1">
                         <div className="w-2 h-2 bg-black"></div>
                         <div className="w-2 h-2 bg-transparent border border-black"></div>
                         <div className="w-2 h-2 bg-black"></div>
                      </div>
                    </div>
                  </article>
                </div>
             </div>
          </div>
        )}

      </main>
      
      {/* 全局样式注入 */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;900&family=JetBrains+Mono:wght@400&display=swap');
        .font-sans { font-family: 'Inter', sans-serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }
        
        /* 隐藏默认滚动条 */
        ::-webkit-scrollbar {
          width: 0px;
          background: transparent; 
        }
        
        .animate-spin-slow {
          animation: spin 10s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .writing-mode-vertical {
          writing-mode: vertical-rl;
        }
      `}</style>
    </div>
  );
};

export default App;