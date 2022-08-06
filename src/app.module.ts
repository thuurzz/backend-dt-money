import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TransactionsModule } from './transactions/transactions.module';

@Module({
  imports: [
    TransactionsModule,
    MongooseModule.forRoot(
      'mongodb+srv://art-vinicius:<NfilkGNPvukQMozj>@cluster0.as3kqfv.mongodb.net/?retryWrites=true&w=majority',
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
