import dotenv from "dotenv";
import express from "express";
import { json } from "body-parser";
import cors from "cors";

import authRoutes from "./routes/auth";
import packagesRoutes from "./routes/packages";
import ridersRoutes from "./routes/riders";
import hubsRoutes from "./routes/hubs";
import statsRoutes from "./routes/stats";

dotenv.config();
const app = express();

app.use(json());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/packages", packagesRoutes);
app.use("/api/riders", ridersRoutes);
app.use("/api/hubs", hubsRoutes);
app.use("/api/dashboard/stats", statsRoutes);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
