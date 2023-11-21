import userRouter from "./user-router.js"
import groupRouter from "./group-router.js"
import transactionRouter from "./transaction-router.js"
import expenseRouter from "./expense-router.js";

export default (app) => {
    app.use("/users", userRouter);
    app.use("/group", groupRouter);
    app.use("/transaction", transactionRouter);
    app.use("/expense", expenseRouter);
}