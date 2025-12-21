import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/schemas/user.schema';
import { genEmployeeCode } from 'src/utils/commonUtils';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name)
        private readonly userModel: Model<UserDocument>,
    ) {}

    async createUser() {
        const empCode = genEmployeeCode("AD", 2);
    }

    async signIn() {
        return null;
    }

    async signOut() {
        return null;
    }

    async resetPassword() {
        return null;
    }

    async checkResetPasswordToken() {
        return null;
    }

    async updateUsers() {
        return null;
    }

    async deleteMany() {
        return null;
    }
}