import { Module } from '@nestjs/common';
import { TableModule } from './table/table.module';
import { OrderModule } from './order/order.module';
import { ReservationModule } from './reservation/reservation.module';

@Module({
  imports: [TableModule, OrderModule, ReservationModule]
})
export class OperationModule {}
