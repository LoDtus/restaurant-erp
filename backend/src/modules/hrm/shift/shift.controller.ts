import { Controller, Delete, Post, Put } from '@nestjs/common';

@Controller('shift')
export class ShiftController {
    @Post("find")
    async findShifts() {
        return null;
    };

    @Post("create")
    async createShifts() {
        return null;
    };

    @Put("update")
    async updateShifts() {
        return null;
    };

    @Delete("delete")
    async deleteShifts() {
        return null;
    };
};