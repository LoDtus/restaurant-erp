import { Controller, Delete, ParseArrayPipe, Post, Put, Query } from '@nestjs/common';

@Controller('payroll')
export class PayrollController {
    @Post("find")
    async findPayrolls() {
        return null;
    };

    @Post("create")
    async createPayroll() {
        return null;
    };

    @Put("update")
    async updatePayroll() {
        return null;
    };

    @Delete("delete")
    async deletePayrolls(
        @Query('ids', new ParseArrayPipe({ items: String, separator: ',' }))
        ids: string[],
    ) {
        return null;
    };
}
