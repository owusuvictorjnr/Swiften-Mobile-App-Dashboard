import { Router } from "express";
import { query } from "../db";
import authenticateToken from "../middleware/authenticateToken";
const router = Router();

// Get all packages
router.get("/", authenticateToken, async (req, res) => {
  try {
    const result = await query("SELECT * FROM packages");
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching packages:", error);
    res.status(500).json({ error: "Failed to fetch packages" });
  }
});

// Add a new package
router.post("/", authenticateToken, async (req, res) => {
  const { userId, destination, status } = req.body;
  try {
    const result = await query(
      "INSERT INTO packages (user_id, destination, status) VALUES ($1, $2, $3) RETURNING *",
      [userId, destination, status]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error adding package:", error);
    res.status(500).json({ error: "Failed to add package" });
  }
});

export default router;
