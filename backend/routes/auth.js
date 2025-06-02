const express = require("express");
const bcrypt = require("bcryptjs");
const pool = require("../db/pool");
const router = express.Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await pool.query("SELECT * FROM employees WHERE email = $1", [email]);
    const user = result.rows[0];

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    res.json({
      token: "dummy-token", // replace with real JWT token in production
      user: {
        name: user.name,
        email: user.email,
        position: user.position,
        role: user.role || "employee"
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

router.post("/signup", async (req, res) => {
  const { name, email, password, position } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await pool.query(
      "INSERT INTO employees (name, email, password, position) VALUES ($1, $2, $3, $4)",
      [name, email, hashedPassword, position]
    );
    res.status(201).send("User registered successfully");
  } catch (err) {
    console.error(err);
    if (err.code === '23505') {
      res.status(400).send("Email already in use");
    } else {
      res.status(500).send("Server error");
    }
  }
});

module.exports = router;