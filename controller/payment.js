import mongoose from "mongoose";
import Payment from "../models/payment.js";

export const getPaymentMethod = async (req, res) => {
    try {
        const userPaymentMethod = await Payment.find({ userId: req.userId });
        res.status(200).json(userPaymentMethod);
    }
    catch (err) {
        res.status(404).json({ message: err.message })
        console.log(err)
    }
}

export const newPaymentMethod = async (req, res) => {
    console.log(req.body);
    const payment = req.body;
    const newPayment = await Payment.create({ ...payment, userId: req.userId })

    try {
        await newPayment.save();
        res.status(201).json(newPayment);
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}


export const deletePaymentMethod = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No payment with id: ${req.userId}`);
    await placement.findByIdAndRemove(id);
    res.json({ message: 'Post Deleted Successfully' })
}