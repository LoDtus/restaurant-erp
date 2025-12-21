import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PriceDocument = HydratedDocument<Price>;

@Schema()
export class Price {
	@Prop({ required: true, unique: true, index: true })
	menu_id: string;

	@Prop()
	size: number;

	@Prop()
	count: number; // Khối lượng tịnh, số lượng định tính

	@Prop()
	unit: string;

	@Prop()
	price: string;

	@Prop()
	is_default: boolean;

	@Prop()
	createdAt: Date;

	@Prop()
	updatedAt: Date;
}

export const PriceSchema = SchemaFactory.createForClass(Price);
