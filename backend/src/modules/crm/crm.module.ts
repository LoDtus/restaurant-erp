import { Module } from '@nestjs/common';
import { EmployeeModule } from './employee/employee.module';
import { FeedbackModule } from './feedback/feedback.module';
import { CustomerController } from './customer/customer.controller';
import { CustomerModule } from './customer/customer.module';

@Module({
  imports: [EmployeeModule, FeedbackModule, CustomerModule],
  controllers: [CustomerController]
})
export class CrmModule {}
