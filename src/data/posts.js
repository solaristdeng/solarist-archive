import fileTimestamps from 'virtual:file-timestamps';

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

const mdFiles = import.meta.glob('../posts/*.md', {
  query: '?raw',
  import: 'default',
  eager: true
});

const parseFrontMatter = (text) => {
  if (!text) return { attributes: {}, body: '' };

  const cleanText = text.trimStart();
  const pattern = /^---\s*[\r\n]+([\s\S]*?)[\r\n]+---\s*[\r\n]+([\s\S]*)$/;
  const match = cleanText.match(pattern);

  if (!match) return { attributes: {}, body: text };

  const yamlPart = match[1];
  const body = match[2];
  const attributes = {};
  
  let currentKey = null;
  let currentArray = null;

  yamlPart.split(/\r?\n/).forEach((line) => {
    // 检查是否是数组项（以 - 开头，可能有缩进）
    const arrayItemMatch = line.match(/^\s*-\s*(.+)$/);
    
    if (arrayItemMatch) {
      // 这是一个数组项
      if (currentKey && currentArray) {
        const value = arrayItemMatch[1].trim().replace(/^['"](.*)['"]$/, '$1');
        currentArray.push(value);
      }
      return;
    }
    
    // 普通的键值对
    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) return;

    const key = line.slice(0, colonIndex).trim();
    const value = line.slice(colonIndex + 1).trim();
    
    if (!key) return;
    
    if (value === '' || value === null) {
      // 值为空，可能是数组的开始
      currentKey = key;
      currentArray = [];
      attributes[key] = currentArray;
    } else {
      // 有值，普通键值对
      const cleanValue = value.replace(/^['"](.*)['"]$/, '$1');
      attributes[key] = cleanValue;
      currentKey = null;
      currentArray = null;
    }
  });
  
  // 将数组转换为字符串（用逗号分隔）以保持一致性
  Object.keys(attributes).forEach(key => {
    if (Array.isArray(attributes[key])) {
      attributes[key] = attributes[key].join(', ');
    }
  });

  return { attributes, body };
};

const getLocalPosts = () => {
  const postsArray = Object.keys(mdFiles).map((filePath) => {
    const fileName = filePath.split('/').pop().replace('.md', '');
    const rawContent = mdFiles[filePath];
    const { attributes, body } = parseFrontMatter(rawContent);
    
    // 获取文件时间戳
    const timestamps = fileTimestamps[fileName] || {};
    
    // 优先使用 frontmatter 中的日期，否则使用文件创建时间
    const publishDate = attributes.date || attributes.created || attributes.published || timestamps.created;
    const modifiedDate = attributes.modified || timestamps.modified;
    
    // 判断是否真正修改过：修改时间与发布时间不同（差距超过 1 分钟）
    let actualModifiedDate = null;
    if (publishDate && modifiedDate) {
      const publishTime = new Date(publishDate).getTime();
      const modifiedTime = new Date(modifiedDate).getTime();
      // 如果修改时间比发布时间晚超过 60 秒，才认为是真正的修改
      if (modifiedTime - publishTime > 60000) {
        actualModifiedDate = modifiedDate;
      }
    }

    return {
      id: fileName,
      title: attributes.title || fileName.toUpperCase(),
      tag: attributes.tag || attributes.tags || 'UNTAGGED',
      type: attributes.type || 'default',
      date: publishDate,
      modified: actualModifiedDate,
      // 标记特殊页面（不在 archive 和首页显示）
      isSpecialPage: attributes.special === 'true' || attributes.special === true,
      sortTimestamp: publishDate ? new Date(publishDate).getTime() : 0,
      content: body
    };
  });

  // 按精确时间戳排序：最新的在前面
  return postsArray.sort((a, b) => {
    if (!a.sortTimestamp && !b.sortTimestamp) return 0;
    if (!a.sortTimestamp) return 1;
    if (!b.sortTimestamp) return -1;
    return b.sortTimestamp - a.sortTimestamp;
  });
};

const LOCAL_POSTS = getLocalPosts();

export const posts = LOCAL_POSTS.length > 0 ? LOCAL_POSTS : SAMPLE_POSTS;

// 过滤掉特殊页面，只返回普通文章
export const regularPosts = posts.filter(post => !post.isSpecialPage);

// 获取所有标签
export const getAllTags = () => {
  const tagSet = new Set();
  regularPosts.forEach(post => {
    if (post.tag && post.tag !== 'UNTAGGED') {
      // 处理多个标签（逗号分隔）
      post.tag.split(',').forEach(tag => {
        const trimmedTag = tag.trim();
        if (trimmedTag) tagSet.add(trimmedTag);
      });
    }
  });
  return Array.from(tagSet).sort();
};

// 根据标签筛选文章
export const getPostsByTag = (tag) => {
  if (!tag) return regularPosts;
  return regularPosts.filter(post => {
    if (!post.tag) return false;
    const tags = post.tag.split(',').map(t => t.trim());
    return tags.includes(tag);
  });
};

export const getPostById = (id) => posts.find((post) => post.id === id);
