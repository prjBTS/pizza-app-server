import mongoose from "mongoose";
import Item from "../models/item.js";

export const getItems = async (req, res) => {
    try {
        const allItem = await Item.find();
        // console.log(allItem);
        res.status(200).json(allItem);
    }
    catch (err) {
        res.status(404).json({ message: err.message })
        console.log(err)
    }
}


export const deleteUserOrder = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No order with id: ${req.userId}`);
    await placement.findByIdAndRemove(id);
    res.json({ message: 'Post Deleted Successfully' })
}