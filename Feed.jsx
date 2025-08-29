import React, { useState } from "react";

export default function Feed({ dark }) {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const addComment = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <section className={`rounded-2xl p-5 shadow ${dark ? "bg-gray-800" : "bg-white"}`}>
      <h2 className="font-semibold text-lg mb-2">Bienvenue sur Sangaredi TV 🎥</h2>
      <p className="mb-4">Média interactif : publiez, commentez, likez et partagez.</p>

      <div className="flex items-center gap-4 mb-4">
        <button className="inline-flex items-center gap-1 px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700" onClick={() => setLikes(likes + 1)} title="Like">
          <span>❤️</span> <span>{likes}</span>
        </button>
        <button className="inline-flex items-center gap-1 px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700" title="Commentaires">
          <span>💬</span> <span>{comments.length}</span>
        </button>
        <button className="inline-flex items-center gap-1 px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700" title="Favori">
          <span>⭐</span> <span>Favori</span>
        </button>
        <button className="inline-flex items-center gap-1 px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700" title="Tendance">
          <span>📈</span> <span>Tendance</span>
        </button>
      </div>

      <div className="mb-4">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Écrire un commentaire..."
          className={`w-full p-2 rounded border ${dark ? "bg-gray-900 border-gray-700" : "bg-white border-gray-300"}`}
        />
        <button className="mt-2 px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700" onClick={addComment}>Commenter</button>
      </div>

      <ul className="space-y-2">
        {comments.map((c, i) => (
          <li key={i} className={`p-2 rounded ${dark ? "bg-gray-700" : "bg-gray-200"}`}>{c}</li>
        ))}
      </ul>
    </section>
  );
}
