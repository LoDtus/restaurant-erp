import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BranchDocument = HydratedDocument<Branch>;

@Schema()
export class Branch {
	@Prop({ required: true, unique: true, index: true })
	address: string;

	@Prop()
	managers: string[];

	@Prop()
	createdAt: Date;

	@Prop()
	updatedAt: Date;

	@Prop()
	deletedAt: Date;
}

export const BranchSchema = SchemaFactory.createForClass(Branch);
