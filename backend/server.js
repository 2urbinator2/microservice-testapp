const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());       
app.use(express.json());

// DB wird erstellt
const db = new sqlite3.Database('./database.db', (err) => {
  if (err) {
    console.error('Fehler beim Öffnen der Datenbank', err.message);
  } else {
    console.log('Mit SQLite-Datenbank verbunden.');
  }
});

// Tabelle erstellen
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    username TEXT UNIQUE, 
    password TEXT
  )`);
  
  db.run("INSERT OR IGNORE INTO users (id, username, password) VALUES (2, 'urbani', '123456')");
});


// User hinzufügen
app.post('/register', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Bitte Benutzername und Passwort ausfüllen.' });
  }

  const query = "INSERT INTO users (username, password) VALUES (?, ?)";
  db.run(query, [username, password], function(err) {
    if (err) {

      if (err.message.includes('UNIQUE constraint failed')) {
        return res.status(400).json({ error: 'Username bereits vergeben' });
      }

      return res.status(500).json({ error: 'Fehler beim Speichern: ' + err.message });
    }
    
    res.json({ success: true, message: `User ${username} erfolgreich registriert!` });
  });
});

// Login
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Bitte Benutzername und Passwort eingeben.' });
  }

  const query = "SELECT * FROM users WHERE username = ? AND password = ?";
  
  db.get(query, [username, password], (err, row) => {
    if (err) {
      return res.status(500).json({ error: 'Datenbankfehler: ' + err.message });
    }

    if (!row) {
      return res.status(401).json({ error: 'Nutzer nicht registriert oder falsches Passwort.' });
    }

    res.json({ success: true, message: `Willkommen zurück, ${username}!` });
  });
});

app.get('/users', (req, res) => {
  db.all("SELECT * FROM users", [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows); 
  });
});

app.listen(port, () => {
  console.log(`Server laeuft auf http://localhost:${port}`);
});