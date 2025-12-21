import { Module } from '@nestjs/common';
import { MenuItemService } from './menu-item.service';
import { MenuController } from './menu-item.controller';
import { MenuItem, MenuItemSchema } from 'src/schemas/menu-item.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
	imports: [
		MongooseModule.forFeature([{ name: MenuItem.name, schema: MenuItemSchema }]),
	],
	controllers: [MenuController],
	providers: [MenuItemService],
})

export class MenuModule {}
