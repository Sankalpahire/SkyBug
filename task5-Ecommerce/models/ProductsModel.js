import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    category_type: {
        type: String,
        required: true
    },
    product_company: {
        type: String,
        required: true
    },
    product_name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    ratings: {
        type: Number,
        required:false,
        default: null
    },
    slug: {
        type: String,
        required: true
    },
    product_image: {
        type: String,
        required: true
    },
    priority: {
        type: Number,
        default: null
    },
    seller_id: {
        type: String,
        required: true
    }
},{timestamps:true});

export default mongoose.model("products", productSchema)
