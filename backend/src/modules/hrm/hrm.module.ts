import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { PayrollModule } from './payroll/payroll.module';
import { EmployeeModule } from './employee/employee.module';
import { ShiftModule } from './shift/shift.module';

@Module({
	imports: [
		EmployeeModule,
		PayrollModule,
        ShiftModule,
		RouterModule.register([
			{
				path: 'hrm',
				children: [
					{
						path: 'employee',
						module: EmployeeModule,
					},
					{
						path: 'payroll',
						module: PayrollModule,
					},
					{
						path: 'shift',
						module: ShiftModule,
					},
				],
			},
		]),
	],
})
export class HrmModule {}