import express from "express"
import { createdOrder, verifyPayment } from "../controllers/payment.controller.js"
import isAuth from "../middlewares/isAuth.js"

const paymentRouter = express.Router()

paymentRouter.post("/order",isAuth,createdOrder)
paymentRouter.post("/verify",isAuth,verifyPayment)

export default paymentRouter