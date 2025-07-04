import express  from "express";
import {UserController} from "../controllers/UserController.js"
const router=express.Router()




router.get("/",UserController.getAll)
router.post("/register",UserController.register)
router.post("/login",UserController.login)
router.post("/confirm",UserController.confirm)

export default router  