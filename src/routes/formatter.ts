import { Router } from "express";

import { getIndex, formatInput } from "../controllers/formatter";

const router = Router();

router.get("/", getIndex);

router.post("/", formatInput);

export default router;
