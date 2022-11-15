import mongoose from 'mongoose';

const paymentSchema = mongoose.Schema({
    userId:{
        type: String,
        required: true
    },
    paymentType: {
        type: String,
        required: true
    },
    accountNumber: {
        type: Number,
        required: false
    },
    ifscCode: {
        type: String,
        required: false
    },
    bankName: {
        type: String,
        required: false
    },
    cardNumber: {
        type: Number,
        required: false
    },
    cardExpiry: {
        type: Date,
        required: false
    },
    upi: {
        type: String,
        required: false
    }
}, { timestamps: true })

const Payment = mongoose.model('Payment', paymentSchema);
export default Payment;