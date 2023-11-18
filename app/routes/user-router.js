import  express  from "express";
import * as userController from "../controllers/user-controller.js";

const router = express.Router();

router.route('/')
    .get(userController.find) //invokes when http req is GET
    .post(userController.post); //invokes when http req is POST

router.route('/:id')
    .get(userController.find) //invokes when http req is GET
    .put(userController.put) //invokes when http req is PUT
    .delete(userController.remove); //invokes when http req is DELETE


export default router;