import express  from "express";
import * as groupController from "../controllers/group-controller.js";

const router = express.Router();

router.route('/')
    .get(groupController.find) //invokes when http req is GET
    .post(groupController.post); //invokes when http req is POST

router.route('/:id')
    .get(groupController.find) //invokes when http req is GET
    .put(groupController.put) //invokes when http req is PUT
    .delete(groupController.remove); //invokes when http req is DELETE


export default router;