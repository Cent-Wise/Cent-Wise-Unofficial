
import userRouter from "./user-router.js"
export default (app) => {
    app.use("/users", userRouter);
}