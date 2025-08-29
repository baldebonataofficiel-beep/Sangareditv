import React from "react";

export default function Footer() {
  return (
    <footer className="mt-10">
      <div className="py-6 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <img src="/assets/logo-horizontal.png" alt="Sangaredi TV" className="h-8 w-auto" />
            <span className="text-sm opacity-80">© {new Date().getFullYear()} Sangaredi TV • La vie quotidienne</span>
          </div>
          <div className="flex gap-5">
            <a href="https://www.facebook.com/share/1GU3cuFD6T/" target="_blank" rel="noopener" className="hover:opacity-80" aria-label="Facebook">📘</a>
            <a href="https://youtube.com/@sangareditv1?si=udifEkpkdIJWiWG6" target="_blank" rel="noopener" className="hover:opacity-80" aria-label="YouTube">▶️</a>
            <a href="https://wa.me/224624816868" target="_blank" rel="noopener" className="hover:opacity-80" aria-label="WhatsApp">🟢</a>
            <a href="mailto:sangareditv1@gmail.com" className="hover:opacity-80" aria-label="Email">✉️</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
