import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	ParseArrayPipe,
	Post,
	Put,
	Query,
} from '@nestjs/common';
import { MenuItemService } from './menu-item.service';
import { NewItemDto } from 'src/dtos/menu-iten/new-item.dto';
import { ApiResponseDto } from 'src/dtos/api-response.dto';

@Controller('menu')
export class MenuController {
	constructor(private readonly menuService: MenuItemService) {}

	@Get('find')
	async findAll() {
		return this.menuService.findAll();
	}

	@Get('find/:id')
	async findById(@Param(':id') id: string) {
		return null;
	}

	@Post('create')
	async createItems(@Body() items: NewItemDto[]) {
		items?.map((item) => {
			console.log(item);
		});
		return items;
		// return this.MenuItemService.addItems(items);
	}

	@Put('update')
	async updateItems(@Body() body: any) {
		return null;
	}

	@Delete('delete')
	async softDeleteItems(
		@Query('ids', new ParseArrayPipe({ items: String, separator: ',' }))
		ids: string[],
	) {
		const result = await this.menuService.softDeleteMany(ids);
		return new ApiResponseDto({
			statusCode: 200,
			message: `Deleted ${result.count} item(s)`,
			data: result,
		});
	}
}
