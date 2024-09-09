import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
const router = Router();

router.route("/register").post(registerUser);

export default router;
// export default krle import krar smy iccha mto nam deya jay
