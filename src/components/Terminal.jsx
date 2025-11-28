import { useState, useEffect, useRef } from 'react';

const Terminal = ({ onAuthenticated }) => {
  const [lines, setLines] = useState([
    '> SYSTEM INITIALIZATION...',
    '> LOADING ADMIN CONSOLE...',
    '> READY',
    '',
    'Please authenticate to continue.',
    '',
  ]);
  const [input, setInput] = useState('');
  const [step, setStep] = useState('username'); // 'username', 'password', 'done'
  const [username, setUsername] = useState('');
  const inputRef = useRef(null);
  const terminalRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [lines]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (step === 'username') {
      setLines(prev => [...prev, `Username: ${input}`, '']);
      setUsername(input);
      setInput('');
      setStep('password');
    } else if (step === 'password') {
      setLines(prev => [...prev, `Password: ${'*'.repeat(input.length)}`, '', 'Authenticating...']);
      
      // Check credentials (admin/admin)
      setTimeout(() => {
        if (username.toLowerCase() === 'admin' && input.toLowerCase() === 'admin') {
          setLines(prev => [...prev, '✓ Authentication successful!', '> Granting admin privileges...', '> Loading interface...']);
          setTimeout(() => {
            onAuthenticated();
          }, 2000);
        } else {
          setLines(prev => [...prev, '✗ Authentication failed. Invalid credentials.', '', 'Try again.', '']);
          setInput('');
          setStep('username');
          setUsername('');
        }
      }, 1500);
      setInput('');
      setStep('done');
    }
  };

  return (
    <div className="fixed inset-0 bg-black text-green-400 font-mono text-sm z-[9999] flex items-center justify-center p-4">
      <div className="w-full max-w-3xl h-[600px] border-2 border-green-400 rounded-lg overflow-hidden flex flex-col shadow-[0_0_50px_rgba(34,197,94,0.3)]">
        <div className="bg-green-400 text-black px-4 py-2 font-bold flex items-center justify-between">
          <span>ADMIN CONSOLE v2.1.0</span>
          <span className="text-xs">SECURE CONNECTION</span>
        </div>
        
        <div 
          ref={terminalRef}
          className="flex-1 p-4 overflow-y-auto bg-black/90 backdrop-blur"
        >
          {lines.map((line, i) => (
            <div key={i} className="mb-1 whitespace-pre-wrap break-words">
              {line}
            </div>
          ))}
          
          {step !== 'done' && (
            <form onSubmit={handleSubmit} className="flex items-center">
              <span className="mr-2">
                {step === 'username' ? 'Username:' : 'Password:'}
              </span>
              <input
                ref={inputRef}
                type={step === 'password' ? 'password' : 'text'}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent outline-none border-none text-green-400 caret-green-400"
                autoComplete="off"
                spellCheck="false"
              />
            </form>
          )}
          
          <div className="inline-block w-2 h-4 bg-green-400 animate-pulse ml-1" />
        </div>
        
        <div className="bg-green-400/10 px-4 py-2 text-xs border-t border-green-400/30">
          Hint: Try common admin credentials
        </div>
      </div>
    </div>
  );
};

export default Terminal;
