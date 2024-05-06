import express from "express"
import { create, deleteUser, getAllUsers, getUserById, update } from "../controller/user.controller.js"

const route = express.Router();

route.post("/user", create)
route.get("/allusers", getAllUsers)
route.get("/allusers/:id", getUserById)
route.put("/update/user/:id", update)
route.delete("/delete/user/:id", deleteUser)

export default route;