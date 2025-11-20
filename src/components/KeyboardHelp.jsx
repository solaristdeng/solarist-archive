import { X } from 'lucide-react';

const KeyboardHelp = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const shortcuts = [
    { key: '↑ / ↓', description: 'Navigate through articles' },
    { key: 'Enter', description: 'Open selected article' },
    { key: 'Ctrl + K', description: 'Open search (⌘K on Mac)' },
    { key: 'H', description: 'Go to home page' },
    { key: 'A', description: 'Go to archive page' },
    { key: 'B', description: 'Go to about page' },
    { key: '?', description: 'Toggle this help menu' },
    { key: 'Esc', description: 'Close modals' },
  ];

  return (
    <div 
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-xl bg-white border-4 border-black"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b-2 border-black p-4 bg-gray-50">
          <h2 className="font-black text-2xl uppercase">KEYBOARD SHORTCUTS</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-black hover:text-white transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Shortcuts List */}
        <div className="p-6">
          <div className="space-y-3">
            {shortcuts.map((shortcut, index) => (
              <div 
                key={index}
                className="flex items-center justify-between p-3 border-2 border-black hover:bg-gray-50 transition-all"
              >
                <kbd className="font-mono text-sm font-black px-3 py-1 bg-black text-white">
                  {shortcut.key}
                </kbd>
                <span className="font-mono text-sm flex-1 ml-4">
                  {shortcut.description}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t-2 border-black p-4 bg-gray-50">
          <p className="font-mono text-xs text-gray-500 text-center">
            PRESS ESC OR ? TO CLOSE THIS MENU
          </p>
        </div>
      </div>
    </div>
  );
};

export default KeyboardHelp;
