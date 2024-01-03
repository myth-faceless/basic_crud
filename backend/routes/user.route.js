import { Router } from "express";
import { getData, registerUser, getUser } from "../controllers/user.controller.js";

const router = Router();


router.route("/register").post(registerUser)
router.route("/getdata").get(getData)
router.route("/getuser/:id").get(getUser)


export default router