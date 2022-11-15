import mongoose from 'mongoose';

const addressSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    street: {
        type: String,
        required: false
    },
    district: {
        type: String,
        required: false
    },
    state: {
        type: String,
        required: false
    },
    pincode: {
        type: Number,
        required: false
    }
}, { timestamps: true })

const Address = mongoose.model('Address', addressSchema);
export default Address;