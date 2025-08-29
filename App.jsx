import React, { useState } from "react";
import Header from "./components/Header.jsx";
import Feed from "./components/Feed.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const [dark, setDark] = useState(false);
  return (
    <div className={dark ? "bg-gray-900 text-white min-h-screen" : "bg-gray-100 text-black min-h-screen"}>
      <Header dark={dark} setDark={setDark} />
      <main className="max-w-4xl mx-auto px-4 py-6 space-y-6">
        <Feed dark={dark} />
        <Contact dark={dark} />
      </main>
      <Footer />
    </div>
  );
}
