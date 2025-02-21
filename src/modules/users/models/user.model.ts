import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  nome: string;
}

const UserSchema = new Schema<IUser>(
  {
    nome: { type: String, required: true },
  },
  { versionKey: false, timestamps: true }
);

export const User = mongoose.model<IUser>("User", UserSchema);
