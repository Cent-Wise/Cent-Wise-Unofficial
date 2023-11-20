import Expense from "../models/expense.js";

export const save = async (newExpense) => {
      const expense = new Expense(newExpense);
      return await expense.save();
}

export const find = async (id) => {
      const expense = await Expense.findById(id).exec();
      return expense;
}

export const update = async (updatedExpense, id) => {
      const expense = await Expense.findByIdAndUpdate(id, updatedExpense).exec();
      return expense;
}

export const patch = async (updatedExpense, id) =>  {
      const expense = await Expense.findByIdAndUpdate(id, updatedExpense).exec();
      return expense;
}

export const remove = async (id) => {
      return await Expense.findByIdAndDelete(id).exec();
}



