import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Role } from '../role.schema';

export type ProfileDocument = HydratedDocument<Profile>;

@Schema()
// Các thông tin khác về nhân viên như loại nhân viên, lương tháng, ngày bắt đầu làm...
export class Profile {
    @Prop()
    fullName: string;

    @Prop()
    dateOfBirth: string;

    @Prop()
    address: string;

    @Prop({ required: true })
    createdAt: Date;

    @Prop({ required: true })
    updatedAt: Date = new Date();

    @Prop()
    deletedAt: Date;
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);