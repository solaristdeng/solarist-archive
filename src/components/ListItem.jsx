import { Link } from 'react-router-dom';
import { ArrowUpRight } from './Icons';

const ListItem = ({ title, id, index, tag, date, onHover, isFocused, disableHover }) => {
  const handleMouseEnter = () => {
    if (typeof onHover === 'function' && !disableHover) {
      onHover(index);
    }
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return null;
    try {
      const d = new Date(dateStr);
      return d.toISOString().split('T')[0]; // YYYY-MM-DD格式
    } catch {
      return dateStr;
    }
  };
  
  const formatDateTime = (dateStr) => {
    if (!dateStr) return null;
    try {
      const d = new Date(dateStr);
      const date = d.toISOString().split('T')[0];
      const time = d.toTimeString().split(' ')[0].substring(0, 5); // HH:MM
      return `${date} ${time}`;
    } catch {
      return dateStr;
    }
  };

  return (
    <Link id={`list-item-${index}`} to={`/post/${id}`} className="block" onMouseEnter={handleMouseEnter}>
      <div
        className={`group border-b border-black py-8 px-4 relative overflow-hidden transition-colors duration-0 ${
          isFocused ? 'bg-black text-white is-focused' : (!disableHover ? 'hover:bg-black hover:text-white' : '')
        }`}
      >
        <div className="flex justify-between items-start relative z-10">
          <div className={`w-12 font-mono text-xs pt-2 ${
            isFocused ? 'opacity-100' : 'opacity-50 group-hover:opacity-100'
          }`}>{`(00${index + 1})`}</div>
          <div className="flex-1">
            <h2
              className={`text-5xl md:text-8xl font-black uppercase leading-[0.9] tracking-tighter transition-transform duration-100 ease-linear ${
                isFocused ? 'translate-x-4' : (!disableHover ? 'group-hover:translate-x-4' : '')
              }`}
            >
              {title}
            </h2>
            <div className={`mt-2 flex items-center gap-4 font-mono text-xs tracking-widest uppercase ${
              isFocused ? 'opacity-100' : (!disableHover ? 'opacity-0 group-hover:opacity-100' : 'opacity-0')
            }`}>
              <span>[ Read Article ]</span>
              {tag && <span className="border border-current px-1 rounded-sm">{tag}</span>}
              {date && <span className="opacity-70">{formatDate(date)}</span>}
            </div>
          </div>
          <ArrowUpRight className={`w-8 h-8 md:w-12 md:h-12 ${
            isFocused ? 'opacity-100' : (!disableHover ? 'opacity-0 group-hover:opacity-100' : 'opacity-0')
          }`} />
        </div>
      </div>
    </Link>
  );
};

export default ListItem;
