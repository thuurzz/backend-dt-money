import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TransactionsModule } from './transactions/transactions.module';
require('dotenv/config');

const password_mongo: string = process.env.MONGO_PASSWORD;

@Module({
  imports: [
    TransactionsModule,
    MongooseModule.forRoot(
      `mongodb+srv://art-vinicius:${password_mongo}@cluster0.as3kqfv.mongodb.net/test`,
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
