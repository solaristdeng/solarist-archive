import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowLeft } from '../components/Icons';
import { regularPosts, getAllTags, getPostsByTag } from '../data/posts';
import { EditableText } from '../components/AdminMode';

const ArchivePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const tagFromUrl = searchParams.get('tag');
  const [selectedTag, setSelectedTag] = useState(tagFromUrl || null);
  
  useEffect(() => {
    if (tagFromUrl) {
      setSelectedTag(tagFromUrl);
    }
  }, [tagFromUrl]);
  
  const allTags = getAllTags();
  const filteredPosts = selectedTag ? getPostsByTag(selectedTag) : regularPosts;

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
    if (tag) {
      setSearchParams({ tag });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <div className="w-full border-b border-black bg-white/90 backdrop-blur-sm z-50 flex justify-between items-center p-4 md:px-12">
        <Link
          to="/"
          className="group flex items-center gap-2 font-mono text-xs uppercase tracking-widest hover:bg-black hover:text-white px-3 py-1 transition-all"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back Home
        </Link>
        <div className="font-mono text-xs text-gray-500">
          {filteredPosts.length} ARTICLES
        </div>
      </div>

      {/* Title */}
      <div className="p-6 md:p-12 border-b border-black">
        <h1 className="text-6xl md:text-9xl font-black uppercase leading-none tracking-tighter">
          <EditableText 
            id="archive-title" 
            defaultValue="ARCHIVE" 
          />
        </h1>
        <p className="font-mono text-xs text-gray-500 mt-4">
          <EditableText 
            id="archive-subtitle" 
            defaultValue="All articles organized by tags" 
          />
        </p>
      </div>

      {/* Tag Filter */}
      <div className="border-b border-black p-4 md:p-6 bg-gray-50">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => handleTagClick(null)}
            className={`font-mono text-xs uppercase px-3 py-1 border-2 border-black transition-all ${
              !selectedTag
                ? 'bg-black text-white'
                : 'bg-white text-black hover:bg-black hover:text-white'
            }`}
          >
            ALL ({regularPosts.length})
          </button>
          {allTags.map(tag => {
            const count = getPostsByTag(tag).length;
            return (
              <button
                key={tag}
                onClick={() => handleTagClick(tag)}
                className={`font-mono text-xs uppercase px-3 py-1 border-2 border-black transition-all ${
                  selectedTag === tag
                    ? 'bg-black text-white'
                    : 'bg-white text-black hover:bg-black hover:text-white'
                }`}
              >
                {tag} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Posts List */}
      <div className="p-6 md:p-12">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-12 font-mono text-gray-500">
            No articles found with tag "{selectedTag}"
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredPosts.map(post => (
              <Link
                key={post.id}
                to={`/post/${post.id}`}
                className="group border-2 border-black p-4 hover:bg-black hover:text-white transition-all"
              >
                <h2 className="font-black text-xl uppercase mb-2 break-words">
                  {post.title}
                </h2>
                <div className="font-mono text-xs space-y-1">
                  <div className="opacity-70">{post.tag}</div>
                  {post.date && (
                    <div className="opacity-50">
                      {new Date(post.date).toISOString().split('T')[0]}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ArchivePage;
