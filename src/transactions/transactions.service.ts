import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import {
  Transaction,
  TransactionDocument,
} from './entities/transaction.entity';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectModel(Transaction.name)
    private transactionModel: Model<TransactionDocument>,
  ) {}

  create(createTransactionDto: CreateTransactionDto) {
    const transaction = new this.transactionModel(createTransactionDto);
    return transaction.save();
  }

  findAll() {
    return this.transactionModel.find();
  }

  findOne(id: string) {
    return this.transactionModel.findById(id);
  }

  update(id: string, updateTransactionDto: UpdateTransactionDto) {
    return this.transactionModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        $set: updateTransactionDto,
      },
      {
        new: true,
      },
    );
  }

  remove(id: string) {
    return this.transactionModel
      .deleteOne({
        _id: id,
      })
      .exec();
  }
}
