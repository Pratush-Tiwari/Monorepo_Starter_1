import express from "express";
import { env } from "./env.mjs";

const app = express();
const port = 3000;

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", nodeEnv: env.NODE_ENV });
});

app.listen(port, () => {
  console.log(`Backend listening on http://localhost:${port}`);
});