import mongoose from "mongoose";
import Address from "../models/address.js";

export const getUserAddress = async (req, res) => {
    try {
        const userAllAddress = await Address.find({ userId: req.userId });
        res.status(200).json(userAllAddress);
    }
    catch (err) {
        res.status(404).json({ message: err.message })
        console.log(err)
    }
}

export const setUserAddress = async (req, res) => {
    console.log(req.body);
    const address = req.body;
    const newAddress = await Address.create({ ...address, userId: req.userId })

    try {
        await newAddress.save();
        res.status(201).json(newAddress);
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}


export const deleteUserAddress = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Address with id: ${req.userId}`);
    await Address.findByIdAndRemove(id);
    res.json({ message: 'Post Deleted Successfully' })
}