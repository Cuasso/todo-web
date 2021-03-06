import express from "express"
import loginController from "../controllers/loginController"
import todosController from '../controllers/todosController'

const router = express.Router()

/** LOGIN CONTROLLER **/
router.post("/api/user/authenticate",loginController.authenticate)
router.post("/api/user/register",loginController.register)

/** TODOS CONTROLLER **/
router.get("/api/:userToken/todos",todosController.get)
router.post("/api/todos",todosController.saveTodos)

/** DEFAULT URL **/
router.get("/", (req,res) => {
    return res.send("todo-api is up!")
})

export default router