import { Module } from '@nestjs/common';
import { BillModule } from './bill/bill.module';
import { InvoiceModule } from './invoice/invoice.module';

@Module({
  imports: [BillModule, InvoiceModule]
})
export class SaleModule {}
