import type { Request, Response } from "express";
import { env } from "../config/env.js";

export function health(_req: Request, res: Response) {
  res.json({ status: "ok", nodeEnv: env.NODE_ENV });
}
