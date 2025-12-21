import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { StorageFile } from './storage-file.schema';

export type MenuItemDocument = HydratedDocument<MenuItem>;

@Schema({
	collection: 'menu_items',
	timestamps: true,
})
export class MenuItem {
	@Prop({ required: true, unique: true, index: true, trim: true })
	name: string;

	@Prop({
		type: [{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'File'
		}], 
		default: [],
		required: true,
	})
	images: StorageFile[] | string[];

	@Prop({ required: true })
	category: string;

	@Prop({ trim: true })
	description: string;

	@Prop({ required: true })
	createdAt: Date;

	@Prop({ required: true })
	updatedAt: Date;

	@Prop()
	deletedAt: Date;
}

export const MenuItemSchema = SchemaFactory.createForClass(MenuItem);