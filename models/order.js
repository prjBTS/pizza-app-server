import mongoose from 'mongoose';

const orderSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    items: {
        type: Array,
        required: false
    },
    amount: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        required: false
    },
    paymentUsed: {
        type: String,
        required: false,
    },
}, { timestamps: true })

const Order = mongoose.model('Order', orderSchema);
export default Order;