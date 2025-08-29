import React, { useState } from "react";

export default function Contact({ dark }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleFormChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submitForm = () => {
    if (form.name && form.email && form.message) {
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <section className={`rounded-2xl p-5 shadow ${dark ? "bg-gray-800" : "bg-white"}`}>
      <h2 className="font-semibold text-lg mb-4">📩 Contactez-nous</h2>

      {submitted ? (
        <p className="text-green-500">Merci ! Votre message a été envoyé ✅</p>
      ) : (
        <div className="grid gap-2">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleFormChange}
            placeholder="Votre nom"
            className={`w-full p-2 rounded border ${dark ? "bg-gray-900 border-gray-700" : "bg-white border-gray-300"}`}
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleFormChange}
            placeholder="Votre email"
            className={`w-full p-2 rounded border ${dark ? "bg-gray-900 border-gray-700" : "bg-white border-gray-300"}`}
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleFormChange}
            placeholder="Votre message..."
            rows="4"
            className={`w-full p-2 rounded border ${dark ? "bg-gray-900 border-gray-700" : "bg-white border-gray-300"}`}
          />
          <button className="mt-1 px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700" onClick={submitForm}>Envoyer</button>
        </div>
      )}

      <p className="mt-4 text-sm opacity-80">
        Vous pouvez aussi nous écrire directement à :
        {" "}<a href="mailto:sangareditv1@gmail.com" className="underline">sangareditv1@gmail.com</a><br/>
        Ou nous contacter sur {" "}<a href="https://wa.me/224624816868" target="_blank" rel="noopener" className="underline">WhatsApp 📱</a>
      </p>

      <div className="flex gap-5 mt-6 items-center">
        <a href="https://www.facebook.com/share/1GU3cuFD6T/" target="_blank" rel="noopener" className="hover:opacity-80" aria-label="Facebook">📘</a>
        <a href="https://youtube.com/@sangareditv1?si=udifEkpkdIJWiWG6" target="_blank" rel="noopener" className="hover:opacity-80" aria-label="YouTube">▶️</a>
        <a href="https://wa.me/224624816868" target="_blank" rel="noopener" className="hover:opacity-80" aria-label="WhatsApp">🟢</a>
        <a href="mailto:sangareditv1@gmail.com" className="hover:opacity-80" aria-label="Email">✉️</a>
      </div>
    </section>
  );
}
