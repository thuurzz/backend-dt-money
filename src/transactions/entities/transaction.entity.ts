import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TransactionDocument = Transaction & Document;

@Schema()
export class Transaction {
  @Prop()
  title: string;

  @Prop()
  amount: number;

  @Prop()
  type: string;

  @Prop()
  category: string;

  @Prop()
  createdAt: Date;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);
