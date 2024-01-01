import { Router } from "express";
import { getData, registerUser } from "../controllers/user.controller.js";

const router = Router();


router.route("/register").post(registerUser)
router.route("/getdata").get(getData)

export default router