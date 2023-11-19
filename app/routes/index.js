import userRouter from "./user-router.js"
import groupRouter from "./group-router.js"
export default (app) => {
    app.use("/users", userRouter);
    app.use("/group", groupRouter);
}