import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Database, Cpu, Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-12 py-6">
      {/* Hero Section */}
      <div className="space-y-6 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-500/10 border border-teal-500/30 rounded-full text-xs text-teal-400 font-mono">
          <Sparkles size={14} /> Available for AI & Software Roles
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-100">
          Data Science Practitioner & <span className="text-teal-400">Software Engineer</span>
        </h1>
        <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
          I bridge technical complexity with sleek user experiences—specializing in database architectures, IoT integration, predictive systems, and UI/UX design.
        </p>
        <div className="flex flex-wrap gap-4 pt-2">
          <Link to="/works" className="bg-teal-500 hover:bg-teal-600 text-slate-950 font-semibold px-5 py-2.5 rounded-lg flex items-center gap-2 text-sm transition-all">
            View Projects <ArrowRight size={16} />
          </Link>
          <Link to="/contact" className="bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-200 px-5 py-2.5 rounded-lg text-sm transition-all">
            Get in Touch
          </Link>
        </div>
      </div>

      {/* Highlights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
        <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl space-y-2">
          <Database className="text-teal-400" size={24} />
          <h3 className="font-semibold text-slate-200">Data & Engineering</h3>
          <p className="text-xs text-slate-400">Database design, SQL modeling, EDA, and predictive analytics workflows.</p>
        </div>
        <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl space-y-2">
          <Cpu className="text-teal-400" size={24} />
          <h3 className="font-semibold text-slate-200">IoT Systems</h3>
          <p className="text-xs text-slate-400">Sensor-driven data collection, real-time logging, and software diagnostics.</p>
        </div>
        <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl space-y-2">
          <Code2 className="text-teal-400" size={24} />
          <h3 className="font-semibold text-slate-200">UI/UX & AI Workflows</h3>
          <p className="text-xs text-slate-400">Figma prototyping combined with advanced AI copilot prompts (Claude, Gemini, ChatGPT).</p>
        </div>
      </div>
    </div>
  );
}