const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from public directory
app.use(express.static(path.join(__dirname, "public")));

// Parse JSON bodies
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Contact form endpoint
app.post("/contact", (req, res) => {
  const { name, email, phone, message } = req.body;

  // Here you would typically save to database or send email
  console.log("New contact form submission:", { name, email, phone, message });

  res.json({
    success: true,
    message: "Thank you for your message! We will get back to you soon.",
  });
});

// Booking endpoint
app.post("/book", (req, res) => {
  const { name, email, phone, petType, service, date, time } = req.body;

  // Here you would typically save booking to database
  console.log("New booking request:", { name, email, phone, petType, service, date, time });

  res.json({
    success: true,
    message: "Booking request received! We will confirm your appointment soon.",
  });
});

app.listen(PORT, () => {
  console.log(`Snip & Shine server running on http://localhost:${PORT}`);
});
