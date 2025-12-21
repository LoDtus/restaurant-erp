import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TableDocument = HydratedDocument<Table>;

@Schema()
export class Table {
	@Prop({ required: true, unique: true, index: true })
	name: string;

	@Prop()
	table_number: string;

	@Prop()
	capacity: number;

	@Prop()
	area: string;

	@Prop()
	createdAt: Date;

	@Prop()
	updatedAt: Date;

	@Prop()
	deletedAt: Date;
}

export const TableSchema = SchemaFactory.createForClass(Table);
