import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type RoleDocument = HydratedDocument<Role>;

@Schema({
	collection: 'roles',
	timestamps: true,
})
export class Role {
    @Prop({ required: true, unique: true, index: true, trim: true })
    role: string;

    @Prop({ required: true, trim: true })
    description: string;

    @Prop({ required: true })
    active: boolean = true;

    @Prop({ required: true })
    createdAt: Date;

    @Prop({ required: true })
    uploadedAt: Date = new Date();

    @Prop()
    deletedAt: Date;
}

export const RoleSchema = SchemaFactory.createForClass(Role);