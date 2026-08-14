import React from 'react';
import { Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="space-y-8 max-w-3xl">
      <div>
        <h1 className="text-3xl font-bold text-slate-100">Get in Touch</h1>
        <p className="text-slate-400 mt-2">Have a project idea, inquiry, or software proposal? Reach out below.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="flex items-center gap-4 bg-slate-900/40 border border-slate-800 p-4 rounded-xl">
            <Mail className="text-teal-400" size={24} />
            <div>
              <p className="text-xs text-slate-500">Email</p>
              <a href="mailto:dadatabdul@gmail.com" className="text-sm font-medium hover:text-teal-400">dadatabdul@gmail.com</a>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-slate-900/40 border border-slate-800 p-4 rounded-xl">
            <MapPin className="text-teal-400" size={24} />
            <div>
              <p className="text-xs text-slate-500">Location</p>
              <p className="text-sm font-medium">Zamboanga City, Philippines</p>
            </div>
          </div>

          <div className="flex gap-4 pt-2">
            <a href="https://github.com/Dadat09" target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-slate-900 border border-slate-800 rounded-lg hover:border-slate-700 text-sm">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              GitHub
            </a>
            <a href="https://ph.linkedin.com/in/rashid-ahmad-abdul-16062b204" target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-slate-900 border border-slate-800 rounded-lg hover:border-slate-700 text-sm">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              LinkedIn
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