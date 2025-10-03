import mongoose, { Schema, Document } from "mongoose";

export interface IPayment extends Document {
  orderId: string;
  paymentId: string;
  amount: number;
  userEmail: string;
  userName: string;
  status: string;
  createdAt: Date;
}

const PaymentSchema: Schema = new Schema({
  orderId: { type: String, required: true },
  paymentId: { type: String, required: true },
  amount: { type: Number, required: true },
  userEmail: { type: String, required: true },
  userName: { type: String, required: true },
  status: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Payment ||
  mongoose.model<IPayment>("Payment", PaymentSchema);
