import React, { useState } from 'react';

export default function Works() {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      title: "IoT-Based Aquaculture Water Management",
      tech: ["Python", "C++", "Hardware Sensors", "Blynk IoT"],
      description: "Directed software architecture for sensor-driven IoT water management. Handled hardware calibration, software diagnostics, and real-time data logging[cite: 3].",
      category: "IoT & Hardware"
    },
    {
      title: "Zampen Native Chicken Management System",
      tech: ["Python", "SQL", "Data Modeling", "Pandas"],
      description: "Designed relational database models to track livestock demographics, family groups, and agricultural dispersal analytics[cite: 3].",
      category: "Data Science"
    },
    {
      title: "VerdeMatrix Food Park Kiosk Platform",
      tech: ["Django", "Python", "SQL", "UI/UX Design"],
      description: "Centralized kiosk ordering application optimizing transactional workflows and customer interaction for local food parks[cite: 3].",
      category: "Full Stack"
    },
    {
      title: "Crimson Avenue Marketplace Prototype",
      tech: ["Web Development", "Figma", "Branding"],
      description: "Student marketplace platform combined with visual branding assets and UI designs to maximize engagement[cite: 3].",
      category: "Full Stack"
    }
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-100">Projects & Systems</h1>
        <p className="text-slate-400 mt-2">A collection of software applications, database platforms, and hardware integrations[cite: 3].</p>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 border-b border-slate-800 pb-4 overflow-x-auto">
        {['All', 'Data Science', 'IoT & Hardware', 'Full Stack'].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
              filter === cat
                ? 'bg-teal-500/20 text-teal-400 border border-teal-500/40'
                : 'bg-slate-900 text-slate-400 hover:text-slate-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((proj, idx) => (
          <div key={idx} className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all">
            <div>
              <span className="text-xs px-2.5 py-1 bg-teal-500/10 text-teal-400 rounded-md font-mono border border-teal-500/20 inline-block mb-3">
                {proj.category}
              </span>
              <h3 className="text-lg font-bold text-slate-100 mb-2">{proj.title}</h3>
              <p className="text-slate-400 text-sm mb-4 leading-relaxed">{proj.description}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {proj.tech.map((t, i) => (
                <span key={i} className="text-xs bg-slate-800 text-slate-300 px-2 py-0.5 rounded font-mono">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}