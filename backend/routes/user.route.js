import { Router } from "express";
import { getData, registerUser, getUser, updateUser, deleteUser } from "../controllers/user.controller.js";

const router = Router();


router.route("/register").post(registerUser)
router.route("/getdata").get(getData)
router.route("/getuser/:id").get(getUser)
router.route("/updateuser/:id").patch(updateUser)
router.route("/deleteuser/:id").delete(deleteUser)



export default router