import mongoose, { Schema, Document } from "mongoose";

export enum TransactionType {
  BUY = "compra",
  SELL = "venda",
  TRANSFER = "transferencia",
}

export enum TransactionStatus {
  PENDING = "pendente",
  APPROVED = "aprovado",
  REPROVED = "reprovado",
  CANCELED = "cancelado",
}

export interface ITransaction extends Document {
  usuario: {
    id: mongoose.Types.ObjectId;
    nome: string;
  };
  tipo: TransactionType;
  valor: number;
  moeda: string;
  status: TransactionStatus;
  createdAt?: Date;
  updatedAt?: Date;
}

const TransactionSchema = new Schema<ITransaction>(
  {
    usuario: {
      id: { type: Schema.Types.ObjectId, required: true, ref: "User" },
      nome: { type: String, required: true },
    },
    tipo: {
      type: String,
      enum: Object.values(TransactionType),
      required: true,
    },
    valor: { type: Number, required: true },
    moeda: { type: String, required: true },
    status: {
      type: String,
      enum: Object.values(TransactionStatus),
      default: TransactionStatus.PENDING,
    },
  },
  { versionKey: false, timestamps: true }
);

TransactionSchema.index({ createdAt: 1 });

export const Transaction = mongoose.model<ITransaction>(
  "Transaction",
  TransactionSchema
);
