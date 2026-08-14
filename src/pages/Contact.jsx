import React from 'react';
import { Mail, MapPin, Github, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="space-y-8 max-w-3xl">
      <div>
        <h1 className="text-3xl font-bold text-slate-100">Get in Touch</h1>
        <p className="text-slate-400 mt-2">Have a project idea, inquiry, or software proposal? Reach out below[cite: 3].</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="flex items-center gap-4 bg-slate-900/40 border border-slate-800 p-4 rounded-xl">
            <Mail className="text-teal-400" size={24} />
            <div>
              <p className="text-xs text-slate-500">Email</p>
              <a href="mailto:dadatabdul@gmail.com" className="text-sm font-medium hover:text-teal-400">dadatabdul@gmail.com[cite: 1, 2, 3]</a>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-slate-900/40 border border-slate-800 p-4 rounded-xl">
            <MapPin className="text-teal-400" size={24} />
            <div>
              <p className="text-xs text-slate-500">Location</p>
              <p className="text-sm font-medium">Zamboanga City, Philippines[cite: 1, 2, 3]</p>
            </div>
          </div>

          <div className="flex gap-4 pt-2">
            <a href="https://github.com/Dadat09" target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-slate-900 border border-slate-800 rounded-lg hover:border-slate-700 text-sm">
              <Github size={18} /> GitHub[cite: 1]
            </a>
            <a href="https://ph.linkedin.com/in/rashid-ahmad-abdul-16062b204" target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-slate-900 border border-slate-800 rounded-lg hover:border-slate-700 text-sm">
              <Linkedin size={18} /> LinkedIn[cite: 1, 3]
            </a>
          </div>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl space-y-4">
          <div>
            <label className="block text-xs font-medium text-slate-400 mb-1">Name</label>
            <input type="text" placeholder="Your Name" className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm focus:outline-none focus:border-teal-400 text-slate-200" />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-400 mb-1">Email</label>
            <input type="email" placeholder="your@email.com" className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm focus:outline-none focus:border-teal-400 text-slate-200" />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-400 mb-1">Message</label>
            <textarea rows="4" placeholder="Your message..." className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm focus:outline-none focus:border-teal-400 text-slate-200"></textarea>
          </div>
          <button type="submit" className="w-full bg-teal-500 hover:bg-teal-600 text-slate-950 font-semibold py-2 rounded flex items-center justify-center gap-2 text-sm transition-all">
            <Send size={16} /> Send Message
          </button>
        </form>
      </div>
    </div>
  );
}