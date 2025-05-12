import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/threads")
      .then((res) => res.json())
      .then(setThreads)
      .catch(() => alert("Kunde inte hämta trådar"));
  }, []);

  return (
    <div className="container">
      <h1>Alla trådar</h1>
      <ul className="thread-list">
        {threads.map((thread) => (
          <li key={thread.id}>
            <Link to={`/threads/${thread.id}`}>{thread.title}</Link>
          </li>
        ))}
      </ul>
      <Link to="/new">
        <button>Skapa ny tråd</button>
      </Link>
    </div>
  );
}

export default Home;
