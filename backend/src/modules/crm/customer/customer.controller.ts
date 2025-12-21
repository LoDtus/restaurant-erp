import { Controller, Delete, ParseArrayPipe, Post, Put, Query } from '@nestjs/common';

@Controller('customer')
export class CustomerController {
    @Post("find")
    async findCustomers() {
        return null;
    };

    @Post("create")
    async createCustomers() {
        return null;
    };

    @Put("update")
    async updateCustomers() {
        return null;
    };

    @Delete("delete")
    async deleteCustomers(
        @Query('ids', new ParseArrayPipe({ items: String, separator: ',' }))
        ids: string[],
    ) {
        return null;
    };
}