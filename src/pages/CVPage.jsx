import { Link } from 'react-router-dom';
import { ArrowLeft, Download } from '../components/Icons';

const CVPage = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <div className="w-full border-b border-black bg-white/90 backdrop-blur-sm z-50 flex justify-between items-center p-4 md:px-12">
        <Link
          to="/about"
          className="group flex items-center gap-2 font-mono text-xs uppercase tracking-widest hover:bg-black hover:text-white px-3 py-1 transition-all"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to About
        </Link>
        <button className="group flex items-center gap-2 font-mono text-xs uppercase tracking-widest hover:bg-black hover:text-white px-3 py-1 transition-all border-2 border-black">
          <Download className="w-4 h-4" /> Download PDF
        </button>
      </div>

      {/* CV Content */}
      <div className="p-6 md:p-12 max-w-4xl mx-auto">
        {/* Header */}
        <div className="border-b-4 border-black pb-6 mb-8">
          <h1 className="text-5xl md:text-7xl font-black uppercase leading-none tracking-tighter">
            YOUR NAME
          </h1>
          <div className="font-mono text-sm mt-4 space-y-1">
            <div>POSITION: Software Engineer / Designer</div>
            <div>LOCATION: Your City, Country</div>
            <div>EMAIL: your-email@example.com</div>
            <div>GITHUB: github.com/yourusername</div>
          </div>
        </div>

        {/* Summary */}
        <section className="mb-8">
          <h2 className="text-3xl font-black uppercase mb-4 border-l-4 border-black pl-4">
            SUMMARY
          </h2>
          <p className="text-lg leading-relaxed">
            Brief professional summary. Describe your expertise, experience, and what you're
            passionate about. Keep it concise and impactful.
          </p>
        </section>

        {/* Experience */}
        <section className="mb-8">
          <h2 className="text-3xl font-black uppercase mb-4 border-l-4 border-black pl-4">
            EXPERIENCE
          </h2>
          <div className="space-y-6">
            <div className="border-2 border-black p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-black uppercase">Senior Developer</h3>
                  <div className="font-mono text-sm">Company Name</div>
                </div>
                <div className="font-mono text-xs text-right">
                  2022 - Present<br/>
                  City, Country
                </div>
              </div>
              <ul className="font-mono text-sm space-y-1 mt-4">
                <li>→ Key achievement or responsibility</li>
                <li>→ Another important accomplishment</li>
                <li>→ Technical skills utilized</li>
              </ul>
            </div>

            <div className="border-2 border-black p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-black uppercase">Developer</h3>
                  <div className="font-mono text-sm">Previous Company</div>
                </div>
                <div className="font-mono text-xs text-right">
                  2020 - 2022<br/>
                  City, Country
                </div>
              </div>
              <ul className="font-mono text-sm space-y-1 mt-4">
                <li>→ Key achievement or responsibility</li>
                <li>→ Another important accomplishment</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h2 className="text-3xl font-black uppercase mb-4 border-l-4 border-black pl-4">
            EDUCATION
          </h2>
          <div className="border-2 border-black p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-black uppercase">Degree Name</h3>
                <div className="font-mono text-sm">University Name</div>
              </div>
              <div className="font-mono text-xs text-right">
                2016 - 2020<br/>
                City, Country
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-8">
          <h2 className="text-3xl font-black uppercase mb-4 border-l-4 border-black pl-4">
            SKILLS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border-2 border-black p-4 bg-gray-50">
              <h3 className="font-black uppercase mb-2">TECHNICAL</h3>
              <div className="font-mono text-xs space-y-1">
                <div>→ JavaScript / TypeScript</div>
                <div>→ React / Vue / Node.js</div>
                <div>→ Python / Go</div>
                <div>→ SQL / MongoDB</div>
              </div>
            </div>
            <div className="border-2 border-black p-4 bg-gray-50">
              <h3 className="font-black uppercase mb-2">TOOLS & OTHERS</h3>
              <div className="font-mono text-xs space-y-1">
                <div>→ Git / Docker</div>
                <div>→ AWS / GCP</div>
                <div>→ Design Systems</div>
                <div>→ Agile / Scrum</div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-8">
          <h2 className="text-3xl font-black uppercase mb-4 border-l-4 border-black pl-4">
            PROJECTS
          </h2>
          <div className="space-y-4">
            <div className="border-2 border-black p-4">
              <h3 className="text-xl font-black uppercase mb-2">Project Name</h3>
              <p className="font-mono text-sm mb-2">
                Brief description of the project, your role, and the technologies used.
              </p>
              <div className="font-mono text-xs text-gray-500">
                Tech: React, Node.js, PostgreSQL
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CVPage;
