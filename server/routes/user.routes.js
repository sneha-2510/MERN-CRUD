import express from "express"
import { create } from "../controller/user.controller.js"

const route = express.Router();

route.post("/user", create)

export default route;