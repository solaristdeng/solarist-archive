import { createContext, useContext, useState, useEffect } from 'react';

const AdminContext = createContext();

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within AdminProvider');
  }
  return context;
};

export const AdminProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [editedContent, setEditedContent] = useState({});

  useEffect(() => {
    // Load admin status from localStorage
    const adminStatus = localStorage.getItem('admin_mode');
    if (adminStatus === 'active') {
      setIsAdmin(true);
    }

    // Load edited content from localStorage
    const saved = localStorage.getItem('admin_edits');
    if (saved) {
      try {
        setEditedContent(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to load admin edits:', e);
      }
    }
  }, []);

  const activateAdmin = () => {
    setIsAdmin(true);
    localStorage.setItem('admin_mode', 'active');
  };

  const saveEdit = (key, value) => {
    const newEdits = { ...editedContent, [key]: value };
    setEditedContent(newEdits);
    localStorage.setItem('admin_edits', JSON.stringify(newEdits));
  };

  const getContent = (key, defaultValue) => {
    return editedContent[key] !== undefined ? editedContent[key] : defaultValue;
  };

  const resetEdits = () => {
    setEditedContent({});
    setIsAdmin(false);
    localStorage.removeItem('admin_edits');
    localStorage.removeItem('admin_mode');
  };

  return (
    <AdminContext.Provider value={{ isAdmin, activateAdmin, saveEdit, getContent, resetEdits }}>
      {children}
      {isAdmin && (
        <div className="fixed top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-lg shadow-lg z-50 font-mono text-xs flex items-center gap-2">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
          <span>ADMIN MODE ACTIVE</span>
          <button 
            onClick={resetEdits}
            className="ml-2 bg-white text-red-600 px-2 py-1 rounded text-[10px] hover:bg-red-100"
            title="Reset all edits"
          >
            RESET
          </button>
        </div>
      )}
    </AdminContext.Provider>
  );
};

export const EditableText = ({ id, defaultValue, className = '', multiline = false }) => {
  const { isAdmin, saveEdit, getContent } = useAdmin();
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(getContent(id, defaultValue));

  useEffect(() => {
    setValue(getContent(id, defaultValue));
  }, [id, defaultValue, getContent]);

  const handleSave = () => {
    saveEdit(id, value);
    setIsEditing(false);
  };

  if (!isAdmin) {
    return multiline ? (
      <div className={className}>{value}</div>
    ) : (
      <span className={className}>{value}</span>
    );
  }

  if (isEditing) {
    return multiline ? (
      <div className="relative">
        <textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={`${className} border-2 border-yellow-400 bg-yellow-50 outline-none w-full`}
          autoFocus
          onBlur={handleSave}
          rows={5}
        />
      </div>
    ) : (
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={`${className} border-2 border-yellow-400 bg-yellow-50 outline-none`}
        autoFocus
        onBlur={handleSave}
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleSave();
          if (e.key === 'Escape') {
            setValue(getContent(id, defaultValue));
            setIsEditing(false);
          }
        }}
      />
    );
  }

  return (
    <div
      className={`${className} cursor-pointer hover:bg-yellow-100 hover:outline hover:outline-2 hover:outline-yellow-400 transition-colors relative group`}
      onClick={() => setIsEditing(true)}
      title="Click to edit"
    >
      {value}
      <span className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 text-xs bg-yellow-400 text-black px-1 rounded">
        ✎
      </span>
    </div>
  );
};
