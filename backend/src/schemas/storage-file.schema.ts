import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, ObjectId } from 'mongoose';
import { User } from './user.schema';

export type StorageFileDocument = HydratedDocument<StorageFile>;

@Schema({
	collection: 'storage_files',
	timestamps: true,
})
export class StorageFile {
	@Prop({ required: true, unique: true, index: true, trim: true })
	name: string;

	@Prop({ required: true })
	path: string;

	@Prop({ required: true })
	mimeType: string;

	@Prop({
		type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true,
	})
	uploadedBy: User | string;

	@Prop({ required: true })
	size: number;

	@Prop()
	duration: number;

	@Prop({ required: true })
	createdAt: Date;

	@Prop()
	deletedAt: Date;
}

export const StorageFileSchema = SchemaFactory.createForClass(StorageFile);
