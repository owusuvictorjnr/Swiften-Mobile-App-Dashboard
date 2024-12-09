import { Router } from "express";
import { query } from "../db";
import authenticateToken from "../middleware/authenticateToken";
const router = Router();

// Get all hubs
router.get("/", authenticateToken, async (req, res) => {
  try {
    const result = await query("SELECT * FROM hubs");
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching hubs:", error);
    res.status(500).json({ error: "Failed to fetch hubs" });
  }
});

export default router;
