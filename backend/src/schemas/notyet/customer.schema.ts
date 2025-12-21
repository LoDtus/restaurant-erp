import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CustomerDocument = HydratedDocument<Customer>;

@Schema()
export class Customer {
	@Prop({ required: true, unique: true, index: true })
	name: string;

	@Prop()
	phoneNumber: string;

	@Prop()
	email: string;

	@Prop()
	createdAt: Date;

	@Prop()
	updatedAt: Date;

	@Prop()
	deletedAt: Date;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);
