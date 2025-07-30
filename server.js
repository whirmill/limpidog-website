const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from root directory (GitHub Pages compatible)
app.use(express.static(__dirname));

// Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Handle 404 errors gracefully
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Snip & Shine server running on http://localhost:${PORT}`);
  console.log(`Server is GitHub Pages compatible - files served from root directory`);
});
