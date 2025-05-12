import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewThread() {
  const [form, setForm] = useState({ title: "", content: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:3000/api/threads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      navigate("/");
    } else {
      alert("Misslyckades att skapa tråd.");
    }
  };

  return (
    <div className="container">
      <h1>Skapa ny tråd</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Titel:
          <input
            type="text"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            required
          />
        </label>
        <label>
          Innehåll:
          <textarea
            value={form.content}
            onChange={(e) => setForm({ ...form, content: e.target.value })}
            required
          />
        </label>
        <button type="submit">Skapa</button>
      </form>
    </div>
  );
}

export default NewThread;
