import { Router } from "express";
import { gerList, sid } from "../routes/candidates";

const router = Router()

router.post('/', sid)

router.get('/', gerList)

export default router