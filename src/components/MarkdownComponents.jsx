import React from 'react';

/**
 * 优雅的链接组件
 * 自动识别：
 * 1. 脚注/锚点 (#开头) -> 拦截路由，平滑滚动
 * 2. 外部链接 (http开头) -> 新窗口打开
 * 3. 内部链接 -> 普通跳转 (如果有需要)
 */
export const MarkdownLink = ({ href, children, ...props }) => {
  // 1. 判断链接类型
  const isAnchor = href?.startsWith('#');
  const isExternal = href?.startsWith('http');

  // 2. 处理锚点点击 (脚注)
  const handleAnchorClick = (e) => {
    e.preventDefault(); // 核心：阻止 HashRouter 路由跳转
    
    const id = href.slice(1);
    const element = document.getElementById(id);

    if (element) {
      // 平滑滚动
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      
      // 触发高亮动画 (配合 CSS)
      element.classList.add('highlight-target');
      setTimeout(() => element.classList.remove('highlight-target'), 2000);
    }
  };

  // A. 如果是锚点/脚注
  if (isAnchor) {
    return (
      <a 
        {...props} 
        href={href} 
        onClick={handleAnchorClick}
        className="cursor-pointer hover:text-blue-600 transition-colors" // 可选：加点样式
      >
        {children}
      </a>
    );
  }

  // B. 如果是外部链接
  if (isExternal) {
    return (
      <a 
        {...props} 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  // C. 其他情况 (默认)
  return <a {...props} href={href}>{children}</a>;
};