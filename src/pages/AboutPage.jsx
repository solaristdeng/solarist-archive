import { Link } from 'react-router-dom';
import { ArrowLeft, User, FileText } from '../components/Icons';

const AboutPage = () => {
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
      </div>

      {/* Title */}
      <div className="p-6 md:p-12 border-b border-black">
        <h1 className="text-6xl md:text-9xl font-black uppercase leading-none tracking-tighter">
          ABOUT
        </h1>
      </div>

      {/* Content */}
      <div className="p-6 md:p-12 max-w-4xl">
        <div className="space-y-8">
          {/* Introduction */}
          <section className="border-2 border-black p-6">
            <h2 className="text-3xl font-black uppercase mb-4">SOLARIST ARCHIVE</h2>
            <div className="font-mono text-sm space-y-4">
              <p>
                A brutalist blog system built with React, featuring automatic date management,
                dynamic styling, and tag-based organization.
              </p>
              <p>
                This archive follows the principles of brutalist web design: raw, functional,
                and honest. No unnecessary decoration, just pure content.
              </p>
            </div>
          </section>

          {/* Quick Links */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              to="/cv"
              className="group border-2 border-black p-6 hover:bg-black hover:text-white transition-all"
            >
              <User className="w-8 h-8 mb-4" />
              <h3 className="text-2xl font-black uppercase mb-2">
                VIEW CV
              </h3>
              <p className="font-mono text-xs opacity-70 group-hover:opacity-100">
                Professional experience and background →
              </p>
            </Link>

            <Link
              to="/archive"
              className="group border-2 border-black p-6 hover:bg-black hover:text-white transition-all"
            >
              <FileText className="w-8 h-8 mb-4" />
              <h3 className="text-2xl font-black uppercase mb-2">
                BROWSE ARCHIVE
              </h3>
              <p className="font-mono text-xs opacity-70 group-hover:opacity-100">
                All articles organized by tags →
              </p>
            </Link>
          </section>

          {/* Tech Stack */}
          <section className="border-2 border-black p-6 bg-gray-50">
            <h2 className="text-2xl font-black uppercase mb-4">TECH STACK</h2>
            <div className="font-mono text-xs space-y-2">
              <div>→ React 19 + Vite 7</div>
              <div>→ React Router for navigation</div>
              <div>→ Tailwind CSS for styling</div>
              <div>→ System fonts only (optimized)</div>
              <div>→ Markdown rendering with react-markdown</div>
              <div>→ Code splitting & lazy loading</div>
              <div>→ Custom inline SVG icons</div>
              <div>→ Automatic file timestamp detection</div>
            </div>
          </section>

          {/* Contact */}
          <section className="border-2 border-black p-6">
            <h2 className="text-2xl font-black uppercase mb-4">CONTACT</h2>
            <div className="font-mono text-sm space-y-2">
              <p>Feel free to reach out for collaboration or inquiries.</p>
              <div className="pt-4 space-y-1 text-xs">
                <div>EMAIL: your-email@example.com</div>
                <div>GITHUB: github.com/yourusername</div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
