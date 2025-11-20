const SideRail = () => (
  <div className="fixed left-0 top-0 bottom-0 w-12 border-r border-black flex flex-col justify-between items-center py-16 z-30 bg-white hidden md:flex">
    <div className="w-[1px] h-full bg-black/10 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-black" />
    </div>
    <div className="writing-mode-vertical rotate-180 font-mono text-xs tracking-[0.5em] uppercase bg-white py-4 z-10" />
    <div className="w-[1px] h-full bg-black/10 relative">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-black" />
    </div>
  </div>
);

export default SideRail;
