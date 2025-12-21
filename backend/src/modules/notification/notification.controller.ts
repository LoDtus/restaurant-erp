import { Controller, Delete, Post, Put } from '@nestjs/common';

@Controller('notification')
export class NotificationController {
    @Post("find")
    async findNotifications() {
        return null;
    };

    @Post("create")
    async createNotification() {
        return null;
    };

    @Delete("delete")
    async deleteNotifications() {
        return null;
    };
}
