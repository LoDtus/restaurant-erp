import { Controller, Delete, Post, Put } from '@nestjs/common';

@Controller('asset')
export class AssetController {
    @Post("find")
    async findItems() {
        return null;
    };

    @Post("add")
    async addItems() {
        return null;
    };

    @Put("update")
    async updateItems() {
        return null;
    };

    @Delete("delete")
    async deleteItems() {
        return null;
    };
};