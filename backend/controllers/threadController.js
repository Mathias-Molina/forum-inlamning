const Database = require("better-sqlite3");
const path = require("path");
const dbPath = path.join(__dirname, "../db/forum.db");
console.log("📂 Backend använder:", dbPath);
const db = new Database(dbPath);

// Hämta alla trådar
function getAllThreads(req, res) {
  const threads = db
    .prepare("SELECT * FROM threads ORDER BY created_at DESC")
    .all();
  res.json(threads);
}

// Hämta en tråd + dess svar
function getThreadById(req, res) {
  const id = req.params.id;
  const thread = db.prepare("SELECT * FROM threads WHERE id = ?").get(id);
  const replies = db
    .prepare(
      "SELECT * FROM replies WHERE thread_id = ? ORDER BY created_at ASC"
    )
    .all(id);

  if (!thread) {
    return res.status(404).json({ error: "Tråden finns inte" });
  }

  res.json({ ...thread, replies });
  console.log("Hämtar tråd med ID:", req.params.id);
  console.log("Hittad tråd:", thread);
}

// Skapa en ny tråd
function createThread(req, res) {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ error: "Titel och innehåll krävs" });
    console.log("Tråd skapades med ID:", info.lastInsertRowid);
  }

  const stmt = db.prepare("INSERT INTO threads (title, content) VALUES (?, ?)");
  const info = stmt.run(title, content);
  res.status(201).json({ id: info.lastInsertRowid });
}

// Lägg till ett svar
function createReply(req, res) {
  const threadId = req.params.id;
  const { content } = req.body;

  const thread = db.prepare("SELECT * FROM threads WHERE id = ?").get(threadId);
  if (!thread) {
    return res.status(404).json({ error: "Tråden finns inte" });
  }

  const stmt = db.prepare(
    "INSERT INTO replies (thread_id, content) VALUES (?, ?)"
  );
  const info = stmt.run(threadId, content);
  res.status(201).json({ id: info.lastInsertRowid });
}

module.exports = {
  getAllThreads,
  getThreadById,
  createThread,
  createReply,
};
