import express from "express";
const router = express.Router();

router.post("/", (req, res) => {
	res.json({ user: "tejendra" });
});

export default router;
