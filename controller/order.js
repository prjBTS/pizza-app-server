import mongoose from "mongoose";
import Order from "../models/order.js";

export const getUserOrder = async (req, res) => {
    try {
        const userAllOrder = await Order.find({ userId: req.userId });
        res.status(200).json(userAllOrder);
    }
    catch (err) {
        res.status(404).json({ message: err.message })
        console.log(err)
    }
}

export const setUserOrder = async (req, res) => {
    console.log(req.body, req.userId);
    const order = req.body;
    const newOrder = new Order({ ...order, userId: req.userId })

    try {
        await newOrder.save();
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}


export const deleteUserOrder = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No order with id: ${req.userId}`);
    await Order.findByIdAndRemove(id);
    res.json({ message: 'Post Deleted Successfully' })
}