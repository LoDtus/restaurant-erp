import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NewItemDto } from 'src/dtos/menu-iten/new-item.dto';
import { MenuItem, MenuItemDocument } from 'src/schemas/menu-item.schema';

@Injectable()
export class MenuItemService {
	constructor(
		@InjectModel(MenuItem.name)
		private readonly menuModel: Model<MenuItemDocument>,
	) {}

	async findAll() {
		const result = await this.menuModel
			.find({
				$or: [{ deletedAt: null }, { deletedAt: { $exists: false } }],
			})
			.sort({ createdAt: -1 })
			.lean()
			.exec();
		console.log(result);
		return result;
	}

	async findItems() {}

	async addItems(items: NewItemDto[]) {
		if (!Array.isArray(items) || items.length === 0) {
			throw new BadRequestException('Items must be a non-empty array');
		}

		const data = items.map((item) => ({
			...item,
			rating: 0,
			createdAt: new Date(),
			updatedAt: new Date(),
			deletedAt: null,
		}));

		try {
			return await this.menuModel.insertMany(data, {
				ordered: false, // không dừng nếu có item lỗi
			});
		} catch (err) {
			if (err.code === 11000) {
				throw new BadRequestException('Some menu items already exist');
			}
			throw err;
		}
	}

	async updateItems() {
		return null;
	}

	async softDeleteMany(ids: string[]): Promise<{
		count: number;
		ids: string[];
	}> {
		// Lấy ra những bản ghi chưa bị xóa (soft/hard)
		const existingItems = await this.menuModel
			.find({
				_id: { $in: ids },
				deletedAt: null,
			})
			.select('_id')
			.lean();

		// Lấy ra danh sách ids từ những items chưa bị xóa
		const existingIds = existingItems.map((item) => item._id.toString());
		if (existingIds.length === 0) return { count: 0, ids: [] };

		// Thực hiện soft delete
		await this.menuModel.updateMany(
			{ _id: { $in: existingIds } },
			{ $set: { deletedAt: new Date() } },
		);

		return {
			count: existingIds.length,
			ids: existingIds,
		};
	}
}
