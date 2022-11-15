import mongoose from 'mongoose';

const itemSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    isVeg: {
        type: Boolean,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    img_url: {
        type: String,
        required: false
    },
    rating:{
        type: Number,
        required: false
    }
}, { timestamps: true })

const Item = mongoose.model('Item', itemSchema);
export default Item;