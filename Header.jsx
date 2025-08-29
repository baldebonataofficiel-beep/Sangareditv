import React from "react";

export default function Header({ dark, setDark }) {
  return (
    <header className={`sticky top-0 z-10 border-b ${dark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}`}>
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/assets/logo-horizontal.png" alt="Sangaredi TV" className="h-10 w-auto" />
          <div className="hidden sm:block leading-tight">
            <p className="font-bold text-lg">Sangaredi TV</p>
            <p className="text-xs opacity-70">La vie quotidienne</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700" title="Notifications">🔔</button>
          <button className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700" title="Profil">👤</button>
          <button className="px-3 py-1 rounded border" onClick={() => setDark(!dark)}>{dark ? "☀️" : "🌙"}</button>
        </div>
      </div>
    </header>
  );
}
