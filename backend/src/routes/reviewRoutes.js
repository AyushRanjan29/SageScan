import express from "express";

import {
    analyzeCode,
    explainCode,
    fixCode
} from "../controllers/reviewController.js";

const router = express.Router();

router.post("/analyze", analyzeCode);
router.post("/explain", explainCode);
router.post("/fix", fixCode);

export default router;