**Diskussionsforum**

## Tekniker som används

- **Frontend**: React, React Router
- **Backend**: Express.js, better-sqlite3
- **Databas**: SQLite (via SQLiteStudio för hantering)
- **API**: RESTful endpoints

---

## 🗂️ Projektstruktur

FORUM 2/
├── .gitignore
├── README.md
│
├── backend/
│ ├── controllers/
│ │ └── threadController.js
│ ├── db/
│ │ └── forum.db
│ ├── node_modules/
│ ├── routes/
│ │ └── threads.js
│ ├── package.json
│ ├── package-lock.json
│ └── server.js
│
├── frontend/
│ ├── node_modules/
│ ├── public/
│ │ └── vite.svg
│ ├── src/
│ │ ├── assets/
│ │ │ └── react.svg
│ │ ├── pages/
│ │ │ ├── Home.jsx
│ │ │ ├── NewThread.jsx
│ │ │ └── Thread.jsx
│ │ ├── App.css
│ │ ├── App.jsx
│ │ ├── index.css
│ │ └── main.jsx
│ ├── eslint.config.js
│ ├── index.html
│ ├── package.json
│ └── package-lock.json

cd backend
npm install
node server.js
Backend körs på:
http://localhost:3000

cd frontend
npm install
npm run dev
Frontend körs på:
http://localhost:5173

Testdata
Testtrådar och svar finns i forum.db.
