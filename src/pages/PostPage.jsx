import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from '../components/Icons';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { MarkdownLink } from '../components/MarkdownComponents';

const PostPage = ({ posts = [] }) => {
  const { id } = useParams();
  const currentPost = posts.find((post) => post.id === id);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' || event.key === 'Backspace') {
        window.location.hash = '#/';
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // 动态加载对应类型的CSS
  useEffect(() => {
    if (!currentPost) return;

    const postType = (currentPost.type || 'default').toLowerCase();
    const cssId = `post-type-css`;
    
    console.log('Loading CSS for type:', postType);
    console.log('Current post:', currentPost);
    
    // 移除之前加载的type CSS
    const existingLink = document.getElementById(cssId);
    if (existingLink) {
      existingLink.remove();
      console.log('Removed existing CSS link');
    }

    // 动态创建link标签加载对应的CSS
    const link = document.createElement('link');
    link.id = cssId;
    link.rel = 'stylesheet';
    // 使用绝对路径，基于 base URL
    const base = import.meta.env.BASE_URL || '/';
    link.href = `${base}src/post-${postType}.css`;
    
    console.log('Loading CSS from:', link.href);
    
    link.onload = () => {
      console.log('CSS loaded successfully:', postType);
    };
    
    link.onerror = () => {
      console.error(`CSS file for type "${postType}" not found at ${link.href}`);
    };
    
    document.head.appendChild(link);

    return () => {
      // 组件卸载时移除CSS
      const linkToRemove = document.getElementById(cssId);
      if (linkToRemove) {
        linkToRemove.remove();
        console.log('Cleaned up CSS link');
      }
    };
  }, [currentPost]);

  // 将脚注转换为旁注
  useEffect(() => {
    if (!currentPost) return;

    const convertFootnotesToSidenotes = () => {
      console.log('Starting footnote conversion...');
      
      // 尝试多种可能的选择器
      const footnoteRefs = document.querySelectorAll('sup[id^="fnref-"], sup[id^="user-content-fnref-"], a.footnote-ref, sup > a[href^="#fn"]');
      const footnotes = document.querySelector('.footnotes, section[data-footnotes]');
      
      console.log('Found footnote refs:', footnoteRefs.length);
      console.log('Found footnotes section:', !!footnotes);
      
      if (footnotes) {
        console.log('Footnotes HTML:', footnotes.innerHTML.substring(0, 200));
      }
      
      if (!footnoteRefs.length) {
        console.log('No footnote references found. Checking for sup elements...');
        const allSups = document.querySelectorAll('sup');
        console.log('Total sup elements:', allSups.length);
        allSups.forEach((sup, i) => {
          console.log(`Sup ${i}:`, sup.outerHTML);
        });
      }
      
      if (!footnotes) {
        console.log('No footnotes section found. Checking for sections...');
        const allSections = document.querySelectorAll('section');
        console.log('Total sections:', allSections.length);
        return;
      }

      footnoteRefs.forEach((ref, index) => {
        console.log(`Processing ref ${index}:`, ref.outerHTML);
        
        // 获取链接的 href
        const link = ref.tagName === 'A' ? ref : ref.querySelector('a');
        if (!link) {
          console.log('No link found in ref');
          return;
        }
        
        const href = link.getAttribute('href');
        console.log('Link href:', href);
        
        if (!href) return;
        
        const id = href.replace('#fn-', '').replace('#user-content-fn-', '').replace('#', '');
        console.log('Extracted id:', id);
        
        const footnoteItem = document.getElementById(`fn-${id}`) || document.getElementById(`user-content-fn-${id}`);
        console.log('Found footnote item:', !!footnoteItem);
        
        if (footnoteItem) {
          // 获取脚注内容
          const content = footnoteItem.querySelector('p') || footnoteItem;
          const text = content.textContent.replace(/↩︎?$/, '').trim();
          console.log('Footnote text:', text);
          
          // 创建 sidenote 元素
          const sidenote = document.createElement('span');
          sidenote.className = 'sidenote';
          sidenote.innerHTML = `<sup>${id}</sup> ${text}`;
          
          // 将 sidenote 插入到上标引用的父段落中
          const paragraph = ref.closest('p, li, h1, h2, h3, h4, h5, h6');
          console.log('Found paragraph:', !!paragraph);
          
          if (paragraph) {
            // 插入到上标之后
            ref.parentNode.insertBefore(sidenote, ref.nextSibling);
            console.log('Sidenote inserted');
          }
        }
      });
    };

    const timer = setTimeout(convertFootnotesToSidenotes, 500);
    
    return () => clearTimeout(timer);
  }, [currentPost]);

  if (!currentPost) {
    return (
      <div className="min-h-screen flex items-center justify-center font-black text-4xl md:text-6xl p-8 text-center">
        404: POST_NOT_FOUND
        <br />
        <span className="text-sm font-mono font-normal mt-4 block text-gray-500">
          ID: {id}
          <br />
          Check filename casing.
        </span>
      </div>
    );
  }

  return (
    <div className="bg-white text-black min-h-screen flex flex-col relative md:h-[calc(100vh-2rem)] md:overflow-hidden">
      <div className="w-full border-b border-black/10 bg-white/90 backdrop-blur-sm z-50 flex justify-between items-center p-4 md:px-12 flex-none">
        <Link
          to="/"
          className="group flex items-center gap-2 font-mono text-xs uppercase tracking-widest hover:bg-black hover:text-white px-3 py-1 transition-all"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back [ESC]
        </Link>
        <div className="font-mono text-xs text-gray-500">DOC_TYPE: MARKDOWN</div>
      </div>

      <div className="flex-1 flex flex-col md:flex-row md:overflow-hidden three-column-layout">
        <div className="w-full md:w-1/6 p-6 md:p-8 border-b md:border-b-0 md:border-r border-black flex flex-col justify-center bg-gray-50 h-full overflow-hidden relative z-10">
          <h1 className="text-3xl md:text-4xl font-black uppercase leading-none break-words tracking-tighter mb-4">{currentPost.title}</h1>
          <div className="w-12 h-2 bg-black mb-6" />
          <p className="font-mono text-xs text-gray-500 space-y-2">
            <span className="block">ID: {currentPost.id}</span>
            {/* Tag with click to filter */}
            <span className="block">
              TAG:{' '}
              {currentPost.tag && currentPost.tag !== 'UNTAGGED' ? (
                currentPost.tag.split(',').map((tag, idx) => {
                  const trimmedTag = tag.trim();
                  return (
                    <Link
                      key={idx}
                      to={`/archive?tag=${encodeURIComponent(trimmedTag)}`}
                      className="inline-block hover:bg-black hover:text-white px-1 transition-all underline"
                    >
                      {trimmedTag}
                    </Link>
                  );
                }).reduce((prev, curr, idx) => {
                  return prev === null ? [curr] : [...prev, <span key={`sep-${idx}`}>, </span>, curr];
                }, null)
              ) : (
                currentPost.tag
              )}
            </span>
            {currentPost.date && (
              <span className="block">
                PUBLISHED: {new Date(currentPost.date).toISOString().split('T')[0]}
              </span>
            )}
            {currentPost.modified && (
              <span className="block">
                MODIFIED: {new Date(currentPost.modified).toISOString().split('T')[0]}
              </span>
            )}
          </p>
        </div>

        <div className="w-full md:w-5/6 h-full md:overflow-y-auto custom-scrollbar">
          <div className="p-6 md:p-12 md:pt-24 pb-48">
            <article className="markdown-body-with-sidenotes">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
                components={{
                  a: MarkdownLink
                }}
              >
                {currentPost.content}
              </ReactMarkdown>
            </article>

            <div className="mt-24 pt-8 border-t border-black flex justify-between items-center text-black font-mono text-xs">
              <span>END OF STREAM</span>
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-black" />
                <div className="w-2 h-2 bg-transparent border border-black" />
                <div className="w-2 h-2 bg-black" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
