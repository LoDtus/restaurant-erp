import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ReservationDocument = HydratedDocument<Reservation>;

@Schema()
export class Reservation {
	@Prop({ required: true, unique: true, index: true })
	customer: string;

	@Prop()
	reservation_time: string;

	@Prop()
	party_size: number;

	@Prop()
	notes: string;

	@Prop()
	status: string;

	@Prop()
	createdAt: Date;

	@Prop()
	updatedAt: Date;

	@Prop()
	deletedAt: Date;
}

export const ReservationSchema = SchemaFactory.createForClass(Reservation);
