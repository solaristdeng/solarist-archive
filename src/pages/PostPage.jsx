import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from '../components/Icons';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
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

      <div className="flex-1 flex flex-col md:flex-row md:overflow-hidden">
        <div className="w-full md:w-1/3 p-6 md:p-12 border-b md:border-b-0 md:border-r border-black flex flex-col justify-center bg-gray-50 h-full overflow-hidden relative z-10">
          <h1 className="text-5xl md:text-7xl font-black uppercase leading-none break-words tracking-tighter mb-4">{currentPost.title}</h1>
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

        <div className="w-full md:w-2/3 h-full md:overflow-y-auto custom-scrollbar">
          <div className="p-6 md:p-16 md:pt-24 pb-48">
            <article className="max-w-3xl mx-auto markdown-body">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
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
