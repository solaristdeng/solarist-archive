import { Link } from 'react-router-dom';
import { ArrowLeft, Download } from '../components/Icons';
import { EditableText } from '../components/AdminMode';

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
            <EditableText 
              id="cv-name" 
              defaultValue="YOUR NAME" 
            />
          </h1>
          <div className="font-mono text-sm mt-4 space-y-1">
            <div>POSITION: <EditableText id="cv-position" defaultValue="Software Engineer / Designer" /></div>
            <div>LOCATION: <EditableText id="cv-location" defaultValue="Your City, Country" /></div>
            <div>EMAIL: <EditableText id="cv-email" defaultValue="your-email@example.com" /></div>
            <div>GITHUB: <EditableText id="cv-github" defaultValue="github.com/yourusername" /></div>
          </div>
        </div>

        {/* Summary */}
        <section className="mb-8">
          <h2 className="text-3xl font-black uppercase mb-4 border-l-4 border-black pl-4">
            SUMMARY
          </h2>
          <p className="text-lg leading-relaxed">
            <EditableText 
              id="cv-summary" 
              defaultValue="Brief professional summary. Describe your expertise, experience, and what you're passionate about. Keep it concise and impactful." 
            />
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
                  <h3 className="text-xl font-black uppercase">
                    <EditableText id="cv-exp1-title" defaultValue="Senior Developer" />
                  </h3>
                  <div className="font-mono text-sm">
                    <EditableText id="cv-exp1-company" defaultValue="Company Name" />
                  </div>
                </div>
                <div className="font-mono text-xs text-right">
                  <EditableText id="cv-exp1-period" defaultValue="2022 - Present" /><br/>
                  <EditableText id="cv-exp1-location" defaultValue="City, Country" />
                </div>
              </div>
              <div className="font-mono text-sm mt-4">
                <EditableText 
                  id="cv-exp1-desc" 
                  defaultValue="→ Key achievement or responsibility&#10;→ Another important accomplishment&#10;→ Technical skills utilized" 
                  multiline 
                />
              </div>
            </div>

            <div className="border-2 border-black p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-black uppercase">
                    <EditableText id="cv-exp2-title" defaultValue="Developer" />
                  </h3>
                  <div className="font-mono text-sm">
                    <EditableText id="cv-exp2-company" defaultValue="Previous Company" />
                  </div>
                </div>
                <div className="font-mono text-xs text-right">
                  <EditableText id="cv-exp2-period" defaultValue="2020 - 2022" /><br/>
                  <EditableText id="cv-exp2-location" defaultValue="City, Country" />
                </div>
              </div>
              <div className="font-mono text-sm mt-4">
                <EditableText 
                  id="cv-exp2-desc" 
                  defaultValue="→ Key achievement or responsibility&#10;→ Another important accomplishment" 
                  multiline 
                />
              </div>
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
                <h3 className="text-xl font-black uppercase">
                  <EditableText id="cv-edu-degree" defaultValue="Degree Name" />
                </h3>
                <div className="font-mono text-sm">
                  <EditableText id="cv-edu-university" defaultValue="University Name" />
                </div>
              </div>
              <div className="font-mono text-xs text-right">
                <EditableText id="cv-edu-period" defaultValue="2016 - 2020" /><br/>
                <EditableText id="cv-edu-location" defaultValue="City, Country" />
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
              <div className="font-mono text-xs">
                <EditableText 
                  id="cv-skills-technical" 
                  defaultValue="→ JavaScript / TypeScript&#10;→ React / Vue / Node.js&#10;→ Python / Go&#10;→ SQL / MongoDB" 
                  multiline 
                />
              </div>
            </div>
            <div className="border-2 border-black p-4 bg-gray-50">
              <h3 className="font-black uppercase mb-2">TOOLS & OTHERS</h3>
              <div className="font-mono text-xs">
                <EditableText 
                  id="cv-skills-tools" 
                  defaultValue="→ Git / Docker&#10;→ AWS / GCP&#10;→ Design Systems&#10;→ Agile / Scrum" 
                  multiline 
                />
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
              <h3 className="text-xl font-black uppercase mb-2">
                <EditableText id="cv-project1-name" defaultValue="Project Name" />
              </h3>
              <p className="font-mono text-sm mb-2">
                <EditableText 
                  id="cv-project1-desc" 
                  defaultValue="Brief description of the project, your role, and the technologies used." 
                />
              </p>
              <div className="font-mono text-xs text-gray-500">
                Tech: <EditableText id="cv-project1-tech" defaultValue="React, Node.js, PostgreSQL" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CVPage;
