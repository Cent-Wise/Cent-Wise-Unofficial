import express from "express";
import * as expenseController from "../controllers/expense-controller.js";

const router = express.Router();

router.route('/')
      .post(expenseController.post);

router.route('/:id')
      .get(expenseController.get)
      .put(expenseController.updateAll)
      .patch(expenseController.update)
      .delete(expenseController.deleteExpense);

export default router;