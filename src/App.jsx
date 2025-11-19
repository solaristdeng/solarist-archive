import React, { useState, useEffect } from 'react';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { HashRouter, Routes, Route, Link, useParams, useLocation } from 'react-router-dom';
import remarkGfm from 'remark-gfm'; // 引入插件
import { MarkdownLink } from './components/MarkdownComponents'; // 引入组件
// 引入外部 CSS
import './article.css';



// ==============================================================================
//  1. 内置默认数据 (Fallback)
// ==============================================================================
const SAMPLE_POSTS = [
  { 
    id: 'entropy', 
    title: 'ENTROPY', 
    tag: 'CHAOS THEORY',
    content: `
Entropy is not just a measure of disorder; it is the *inevitable direction of time itself*. 

## The Illusion of Control

Traditional design seeks to comfort the user. But art is not always about comfort.

> "Every pixel that is out of place is a victory for the organic over the synthetic."

### Design Principles
- Reject perfectionism
- Embrace raw HTML structure
- Use system fonts
    `
  }
];

// ==============================================================================
//  2. 自动文件读取 (零依赖版)
// ==============================================================================
const mdFiles = import.meta.glob('./posts/*.md', { query: '?raw', import: 'default', eager: true });

// 这是一个更加健壮的内置解析器，兼容 Windows (\r\n) 和 Unix (\n) 换行符
// 不需要 npm install front-matter 即可工作
const parseFrontMatter = (text) => {
  if (!text) return { attributes: {}, body: '' };
  const cleanText = text.trimStart();
  
  // 匹配 --- 开始和结束的 YAML 块
  // [\s\S]*? 非贪婪匹配中间内容
  const pattern = /^---\s*[\r\n]+([\s\S]*?)[\r\n]+---\s*[\r\n]+([\s\S]*)$/;
  const match = cleanText.match(pattern);
  
  if (!match) return { attributes: {}, body: text };

  const yamlPart = match[1];
  const body = match[2];
  const attributes = {};

  // 逐行解析 key: value
  yamlPart.split(/\r?\n/).forEach(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex !== -1) {
      const key = line.slice(0, colonIndex).trim();
      const value = line.slice(colonIndex + 1).trim();
      // 去除可能存在的引号
      const cleanValue = value.replace(/^['"](.*)['"]$/, '$1');
      if (key) attributes[key] = cleanValue;
    }
  });
  return { attributes, body };
};

const LOCAL_POSTS = Object.keys(mdFiles).map((filePath) => {
  const fileName = filePath.split('/').pop().replace('.md', '');
  const rawContent = mdFiles[filePath];
  const { attributes, body } = parseFrontMatter(rawContent);

  return {
    id: fileName, 
    title: attributes.title || fileName.toUpperCase(), 
    tag: attributes.tag || 'UNTAGGED',                 
    content: body
  };
});

// 优先使用本地文件
const DATA = LOCAL_POSTS.length > 0 ? LOCAL_POSTS : SAMPLE_POSTS;

// --- 组件部分 ---

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const Noise = () => (
  <div className="fixed inset-0 pointer-events-none opacity-[0.08] z-50 mix-blend-overlay"
       style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
  />
);

const GlitchText = ({ text, className = "" }) => {
  const [display, setDisplay] = useState(text);
  const chars = "!@#$%^&*()_+-=[]{}|;:,.<>?/";
  const handleHover = () => {
    let iterations = 0;
    const interval = setInterval(() => {
      setDisplay(text.split("").map((letter, index) => {
        if (index < iterations) return text[index];
        return chars[Math.floor(Math.random() * chars.length)];
      }).join(""));
      if (iterations >= text.length) clearInterval(interval);
      iterations += 1 / 3;
    }, 30);
  };
  return <span onMouseEnter={handleHover} className={`cursor-pointer inline-block ${className}`}>{display}</span>;
};

// 修改 ListItem 组件，接收 id 属性（注意这里的 id 是为了 DOM 查找，不是文章 id）
const ListItem = ({ title, id, index, tag, setListFocus, isFocused }) => {
  return (
    <Link 
      // [新增] 添加动态 ID，例如 list-item-0, list-item-1
      id={`list-item-${index}`} 
      to={`/post/${id}`} 
      className="block" 
      onMouseEnter={() => setListFocus(index)}
    >
      {/* ...其余代码保持不变... */}
      <div className={`group border-b border-black py-8 px-4 relative overflow-hidden transition-colors duration-0 ${isFocused ? 'bg-black text-white' : 'hover:bg-black hover:text-white'}`}>
        <div className="flex justify-between items-start relative z-10">
          <div className={`w-12 font-mono text-xs pt-2 opacity-50 group-hover:opacity-100`}>{`(00${index + 1})`}</div>
          <div className="flex-1">
            <h2 className={`text-5xl md:text-8xl font-black uppercase leading-[0.9] tracking-tighter transition-transform duration-100 ease-linear ${isFocused ? 'translate-x-4' : 'group-hover:translate-x-4'}`}>{title}</h2>
            <div className="mt-2 flex items-center gap-4 font-mono text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100">
              <span>[ Read Article ]</span>
              {tag && <span className="border border-current px-1 rounded-sm">{tag}</span>}
            </div>
          </div>
          <ArrowUpRight className="w-8 h-8 md:w-12 md:h-12 opacity-0 group-hover:opacity-100" />
        </div>
      </div>
    </Link>
  );
};

const HomePage = () => {
  const [listFocusIndex, setListFocusIndex] = useState(-1); 

  // [新增] 专门用于处理滚动的 Effect
  useEffect(() => {
    if (listFocusIndex >= 0) {
      const element = document.getElementById(`list-item-${listFocusIndex}`);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth', // 平滑滚动，如果觉得由于快速按键导致延迟，可以改为 'auto'
          block: 'nearest',   // 'nearest' 会让元素刚好出现在视野内，'center' 会强制居中
        });
      }
    }
  }, [listFocusIndex]); // 仅当 listFocusIndex 变化时触发

  // [原有] 键盘监听逻辑保持不变
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['ArrowUp', 'ArrowDown'].includes(e.key)) e.preventDefault(); 
      if (e.key === 'ArrowDown') setListFocusIndex(prev => (prev + 1) % DATA.length);
      else if (e.key === 'ArrowUp') setListFocusIndex(prev => (prev - 1 + DATA.length) % DATA.length);
      else if (e.key === 'Enter' && listFocusIndex !== -1) window.location.hash = `#/post/${DATA[listFocusIndex].id}`;
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [listFocusIndex]);

  return (
    <div className="fade-in-content">
      {/* Header 部分不变 */}
      <div className="p-4 md:p-12 border-b border-black min-h-[40vh] flex flex-col justify-end relative">
         <h1 className="text-[12vw] leading-[0.8] font-black tracking-tighter uppercase break-all">
           <GlitchText text="SOLARIST" /><br/>
           <span className="outline-text text-transparent stroke-black stroke-2" style={{ WebkitTextStroke: '2px black' }}>ARCHIVE</span>
         </h1>
         <div className="flex justify-between items-end mt-8 font-mono text-sm md:w-1/2">
           <p>KEYBOARD NAVIGATION ENABLED.<br/>USE ARROW KEYS TO SELECT.</p>
         </div>
      </div>
      
      {/* List 部分 */}
      <div className="flex flex-col border-l border-black ml-0 md:ml-[20%]">
        {DATA.map((item, idx) => (
          <ListItem 
            key={item.id} 
            {...item} 
            index={idx} 
            isFocused={listFocusIndex === idx} 
            setListFocus={setListFocusIndex} 
          />
        ))}
      </div>
    </div>
  );
};

const PostPage = () => {
  const { id } = useParams(); 
  const currentPost = DATA.find(d => d.id === id);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' || e.key === 'Backspace') window.location.hash = '#/';
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!currentPost) {
    return (
      <div className="min-h-screen flex items-center justify-center font-black text-4xl md:text-6xl p-8 text-center">
        404: POST_NOT_FOUND
        <br/>
        <span className="text-sm font-mono font-normal mt-4 block text-gray-500">
          ID: {id} <br/>
          Check filename casing.
        </span>
      </div>
    );
  }

  return (
    // 修改 1: 最外层容器
    // md:h-[calc(100vh-2rem)] -> 桌面端强制高度为“屏幕高度 - App顶部的padding”，防止出现双重滚动条
    // md:overflow-hidden -> 桌面端禁止外层滚动
    <div className="bg-white text-black min-h-screen flex flex-col relative md:h-[calc(100vh-2rem)] md:overflow-hidden">
       
       {/* 修改 2: Header
           去掉了 sticky，因为它现在是 Flex 布局的第一部分，自然会停留在顶部
       */}
       <div className="w-full border-b border-black/10 bg-white/90 backdrop-blur-sm z-50 flex justify-between items-center p-4 md:px-12 flex-none">
          <Link to="/" className="group flex items-center gap-2 font-mono text-xs uppercase tracking-widest hover:bg-black hover:text-white px-3 py-1 transition-all">
             <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back [ESC]
           </Link>
           <div className="font-mono text-xs text-gray-500">DOC_TYPE: MARKDOWN</div>
       </div>

       {/* 修改 3: 内容区域容器
           flex-1: 占满剩余高度
           md:overflow-hidden: 确保容器本身不滚动
       */}
       <div className="flex-1 flex flex-col md:flex-row md:overflow-hidden">
          
          {/* 修改 4: 左侧侧边栏
             h-full: 高度撑满
             overflow-hidden: 确保左侧内容不滚动
             justify-center: 内容垂直居中
             去掉了 sticky，因为它现在就是固定在左侧的
          */}
          <div className="w-full md:w-1/3 p-6 md:p-12 border-b md:border-b-0 md:border-r border-black flex flex-col justify-center bg-gray-50 h-full overflow-hidden relative z-10">
            <h1 className="text-5xl md:text-7xl font-black uppercase leading-none break-words tracking-tighter mb-4">{currentPost.title}</h1>
            <div className="w-12 h-2 bg-black mb-6"></div>
            <p className="font-mono text-xs text-gray-500 space-y-2">
              <span className="block">ID: {currentPost.id}</span>
              <span className="block">TAG: {currentPost.tag}</span>
            </p>
          </div>

          {/* 修改 5: 右侧文章区域
             md:overflow-y-auto: 关键点！只有这一个区域可以垂直滚动
             h-full: 高度撑满
          */}
          <div className="w-full md:w-2/3 h-full md:overflow-y-auto custom-scrollbar">
            <div className="p-6 md:p-16 md:pt-24 pb-48">
              <article className="max-w-3xl mx-auto markdown-body">
  <ReactMarkdown 
    remarkPlugins={[remarkGfm]} 
    components={{
      // 这里极其整洁：只负责映射组件
      a: MarkdownLink 
    }}
  >
    {currentPost.content}
  </ReactMarkdown>
</article>
              
              <div className="mt-24 pt-8 border-t border-black flex justify-between items-center text-black font-mono text-xs">
                <span>END OF STREAM</span>
                <div className="flex gap-1"><div className="w-2 h-2 bg-black"></div><div className="w-2 h-2 bg-transparent border border-black"></div><div className="w-2 h-2 bg-black"></div></div>
              </div>
            </div>
          </div>
       </div>
    </div>
  );
};

// --- 主组件 ---
const App = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white overflow-x-hidden">
        <Noise />
        {/* 自定义光标，样式在 article.css 中定义 */}
        <div className="custom-cursor fixed w-6 h-6 bg-white rounded-full mix-blend-difference pointer-events-none z-[9999] transform -translate-x-1/2 -translate-y-1/2 border border-black/20" style={{ left: mousePos.x, top: mousePos.y }} />
        
        <header className="fixed top-0 left-0 w-full border-b border-black bg-white z-40 flex justify-between items-center px-2 py-1 font-mono text-[10px] uppercase tracking-wider">
          <div className="flex gap-4"><span>SYS.STATUS: ONLINE</span></div>
          <div className="flex items-center gap-2"><span className="hidden md:inline text-gray-400">©2025 solarist</span><div className="animate-pulse text-red-600">● LIVE</div></div>
        </header>
        
        <div className="fixed left-0 top-0 bottom-0 w-12 border-r border-black flex flex-col justify-between items-center py-16 z-30 bg-white hidden md:flex">
          <div className="w-[1px] h-full bg-black/10 relative"><div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-black"></div></div>
          <div className="writing-mode-vertical rotate-180 font-mono text-xs tracking-[0.5em] uppercase bg-white py-4 z-10"></div>
          <div className="w-[1px] h-full bg-black/10 relative"><div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-black"></div></div>
        </div>
        
        <main className="md:pl-12 pt-8 min-h-screen flex flex-col">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/post/:id" element={<PostPage />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
};

export default App;