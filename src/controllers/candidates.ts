import { Router } from "express";
import { sid } from "../routes/candidates";

const router = Router()

router.post('/', sid)

export default router