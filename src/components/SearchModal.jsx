import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight } from 'lucide-react';

const SearchModal = ({ isOpen, onClose, posts }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();
  const inputRef = useRef(null);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
      setQuery('');
      setResults([]);
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Search logic
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setSelectedIndex(0);
      return;
    }

    const searchQuery = query.toLowerCase();
    const filtered = posts.filter(post => {
      const titleMatch = post.title.toLowerCase().includes(searchQuery);
      const tagMatch = post.tag?.toLowerCase().includes(searchQuery);
      const contentMatch = post.content?.toLowerCase().includes(searchQuery);
      return titleMatch || tagMatch || contentMatch;
    });

    setResults(filtered.slice(0, 10)); // Limit to 10 results
    setSelectedIndex(0);
  }, [query, posts]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      // 阻止 Ctrl+K 在搜索框打开时被浏览器捕获
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
      
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => Math.min(prev + 1, results.length - 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => Math.max(prev - 1, 0));
      } else if (e.key === 'Enter' && results.length > 0) {
        e.preventDefault();
        handleSelect(results[selectedIndex]);
      }
    };

    // 使用 capture 模式确保优先级
    window.addEventListener('keydown', handleKeyDown, true);
    return () => window.removeEventListener('keydown', handleKeyDown, true);
  }, [isOpen, results, selectedIndex, onClose]);

  const handleSelect = (post) => {
    navigate(`/post/${post.id}`);
    onClose();
  };

  const highlightText = (text, query) => {
    if (!query.trim()) return text;
    
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return parts.map((part, i) => 
      part.toLowerCase() === query.toLowerCase() 
        ? <mark key={i} className="bg-black text-white">{part}</mark>
        : part
    );
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-[20vh] px-4"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-2xl bg-white border-4 border-black"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header */}
        <div className="flex items-center border-b-2 border-black p-4">
          <Search className="w-5 h-5 mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="SEARCH ARTICLES..."
            className="flex-1 bg-transparent outline-none font-mono text-lg uppercase placeholder:text-gray-400"
          />
          <button
            onClick={onClose}
            className="ml-3 p-1 hover:bg-black hover:text-white transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Hint */}
        <div className="px-4 py-2 bg-gray-50 border-b border-black font-mono text-xs text-gray-500">
          <span>↑↓ NAVIGATE</span>
          <span className="mx-4">↵ SELECT</span>
          <span>ESC CLOSE</span>
        </div>

        {/* Results */}
        <div className="max-h-[60vh] overflow-y-auto">
          {query.trim() === '' ? (
            <div className="p-8 text-center font-mono text-sm text-gray-500">
              START TYPING TO SEARCH...
            </div>
          ) : results.length === 0 ? (
            <div className="p-8 text-center">
              <div className="font-black text-2xl mb-2">NO RESULTS</div>
              <div className="font-mono text-sm text-gray-500">
                Try different keywords
              </div>
            </div>
          ) : (
            <div>
              {results.map((post, index) => (
                <div
                  key={post.id}
                  onClick={() => handleSelect(post)}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`p-4 border-b border-black cursor-pointer transition-all ${
                    index === selectedIndex
                      ? 'bg-black text-white'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-black text-lg uppercase mb-1 break-words">
                        {highlightText(post.title, query)}
                      </h3>
                      <div className="font-mono text-xs opacity-70 space-x-3">
                        <span>{post.tag}</span>
                        {post.date && (
                          <span>{new Date(post.date).toISOString().split('T')[0]}</span>
                        )}
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 flex-shrink-0" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {results.length > 0 && (
          <div className="px-4 py-2 border-t-2 border-black bg-gray-50 font-mono text-xs text-gray-500">
            {results.length} RESULT{results.length !== 1 ? 'S' : ''} FOUND
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchModal;
