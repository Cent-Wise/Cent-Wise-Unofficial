import userRouter from "./user-router.js"
import groupRouter from "./group-router.js"
import transactionRouter from "./transasction-router.js"

export default (app) => {
    app.use("/users", userRouter);
    app.use("/group", groupRouter);
    app.use("/group", transactionRouter);
}