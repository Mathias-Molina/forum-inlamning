import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Thread() {
  const { id } = useParams();
  const [thread, setThread] = useState(null);
  const [reply, setReply] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3000/api/threads/${id}`)
      .then((res) => res.json())
      .then(setThread)
      .catch(() => alert("Tråden kunde inte hämtas"));
  }, [id]);

  const handleReply = async (e) => {
    e.preventDefault();
    const res = await fetch(`http://localhost:3000/api/threads/${id}/replies`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: reply }),
    });

    if (res.ok) {
      const data = await fetch(`http://localhost:3000/api/threads/${id}`).then(
        (r) => r.json()
      );
      setThread(data);
      setReply("");
    }
  };

  if (!thread) return <p>Laddar...</p>;

  return (
    <div className="container">
      <h2>{thread.title}</h2>
      <p>{thread.content}</p>
      <hr />
      <h4>Svar:</h4>
      <ul className="reply-list">
        {thread.replies.map((r) => (
          <li key={r.id}>{r.content}</li>
        ))}
      </ul>

      <form onSubmit={handleReply}>
        <label>
          Svara:
          <textarea
            value={reply}
            onChange={(e) => setReply(e.target.value)}
            placeholder="Skriv ett svar"
          />
        </label>
        <button type="submit">Skicka</button>
      </form>
    </div>
  );
}
export default Thread;
