import { Controller, Delete, ParseArrayPipe, Post, Put, Query } from '@nestjs/common';

@Controller('employee')
export class EmployeeController {
    @Post("find")
    async findEmployees() {
        return null;
    };

    @Post("add")
    async addEmployees() {
        return null;
    };

    @Put("update")
    async updateEmployees() {
        return null;
    };

    @Delete("delete")
    async deleteEmployees(
        @Query('ids', new ParseArrayPipe({ items: String, separator: ',' }))
        ids: string[],
    ) {
        return null;
    };
};
