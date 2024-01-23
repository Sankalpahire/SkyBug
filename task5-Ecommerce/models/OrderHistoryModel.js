import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  order_id: {
    type: String,
    required: true
  },
  product_id: {
    type: String,
    required: true
  },
  products: {
    type: String,
    required: true
  },
  product_prices: {
    type: String,
    required: true
  },
  total_price: {
    type: Number,
    required: true
  },
  buyer_id: {
    type: String,
    required: true
  },
  purchase_date: {
    type: Date,
    default: null
  },
  transaction_id: {
    type: String
  },
  payment_status: {
    type: String
  },
  order_status: {
    type: String,
    enum: ['delivered', 'cancelled', 'refund']
  }
});

export default mongoose.model("orders", orderSchema)

