import React from 'react';
import { Award, BookOpen, GraduationCap, Sparkles } from 'lucide-react';

export default function About() {
  const skillCategories = [
    {
      category: "Data Science & Engineering",
      skills: ["SQL", "Python (Pandas, NumPy, Scikit-Learn)", "Jupyter Notebook", "EDA & Feature Engineering", "Database Modeling"][cite: 3]
    },
    {
      category: "Design & UI/UX",
      skills: ["Figma", "Adobe Photoshop", "Adobe Illustrator", "Canva", "Vector & Branding Design"][cite: 3]
    },
    {
      category: "AI Research & Copilots",
      skills: ["NotebookLM", "ChatGPT", "Claude", "Gemini", "Advanced Prompt Engineering"][cite: 3]
    },
    {
      category: "Software & Web Systems",
      skills: ["Django", "Next.js Ecosystem", "HTML/CSS", "Git / GitHub", "System Maintenance & Debugging"][cite: 3]
    }
  ];

  return (
    <div className="space-y-10">
      {/* Header Profile */}
      <div className="flex flex-col md:flex-row items-center gap-6 bg-slate-900/60 border border-slate-800 p-6 rounded-2xl">
        <img 
          src="/profile.jpg" 
          alt="Rashid Ahmad Abdul" 
          className="w-32 h-32 rounded-full object-cover border-2 border-teal-400 shadow-lg"
          onError={(e) => { e.target.src = 'https://via.placeholder.com/150'; }} 
        />
        <div>
          <h1 className="text-3xl font-bold text-slate-100">Rashid Ahmad O. Abdul</h1>
          <p className="text-teal-400 font-mono text-sm mt-1">Data Science & Engineering Practitioner | UI/UX Designer[cite: 3]</p>
          <p className="text-slate-400 text-sm mt-3 leading-relaxed">
            BS Computer Science Graduate from Western Mindanao State University[cite: 3]. I build intelligent, data-driven systems with a strong emphasis on clean code and user experience[cite: 3].
          </p>
        </div>
      </div>

      {/* Skills Grid */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-100">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="bg-slate-900/40 border border-slate-800 p-5 rounded-xl">
              <h3 className="text-xs font-semibold text-teal-400 mb-3 uppercase tracking-wider">{cat.category}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s, i) => (
                  <span key={i} className="text-xs bg-slate-800 border border-slate-700/50 text-slate-200 px-2.5 py-1 rounded-md font-mono">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience & Education */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl space-y-4">
          <div className="flex items-center gap-2 text-teal-400">
            <BookOpen size={20} />
            <h3 className="font-semibold text-slate-100">Leadership & Experience</h3>
          </div>
          <ul className="space-y-4 text-sm text-slate-300">
            <li className="border-b border-slate-800 pb-3">
              <p className="font-medium text-slate-100">Founder & President</p>
              <p className="text-xs text-teal-400">WMSU Youth Entrepreneurs (2024–2026)[cite: 3]</p>
              <p className="text-xs text-slate-400 mt-1">Led executive operations and directed university Market Hub initiatives[cite: 3].</p>
            </li>
            <li className="border-b border-slate-800 pb-3">
              <p className="font-medium text-slate-100">Founder & Project Lead</p>
              <p className="text-xs text-teal-400">Crimson Avenue & VerdeMatrix Innovate[cite: 3]</p>
              <p className="text-xs text-slate-400 mt-1">Managed product strategies, database architecture, and kiosk software[cite: 3].</p>
            </li>
            <li>
              <p className="font-medium text-slate-100">External Relations Officer</p>
              <p className="text-xs text-teal-400">Google Developer Student Club (GDSC)[cite: 1, 3]</p>
            </li>
          </ul>
        </div>

        <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl space-y-4">
          <div className="flex items-center gap-2 text-teal-400">
            <GraduationCap size={20} />
            <h3 className="font-semibold text-slate-100">Education & Certifications</h3>
          </div>
          <ul className="space-y-4 text-sm text-slate-300">
            <li className="border-b border-slate-800 pb-3">
              <p className="font-medium text-slate-100">BS in Computer Science</p>
              <p className="text-xs text-slate-400">Western Mindanao State University (Graduated 2026)[cite: 3]</p>
            </li>
            <li className="border-b border-slate-800 pb-3">
              <p className="font-medium text-slate-100">Digital Forensics Essentials</p>
              <p className="text-xs text-slate-400">EC-Council Certification (2023)[cite: 1, 3]</p>
            </li>
            <li>
              <p className="font-medium text-slate-100">Ethical Hacking Essentials</p>
              <p className="text-xs text-slate-400">EC-Council Certification (2023)[cite: 1, 3]</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}