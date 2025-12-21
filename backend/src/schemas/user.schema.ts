import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Role } from './role.schema';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
    @Prop({ required: true, unique: true, index: true, trim: true })
    email: string;

    @Prop({ required: true, index: true, trim: true })
    phoneNumber: string;

    @Prop({ required: true, index: true, trim: true })
    code: string;

    @Prop({ required: true, trim: true })
    password: string;

    @Prop({
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Role'
        }], 
        default: [],
        required: true,
    })
    roles: Role[];

    @Prop({ required: true })
    createdAt: Date;

    @Prop({ required: true })
    updatedAt: Date = new Date();

    @Prop()
    deletedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);