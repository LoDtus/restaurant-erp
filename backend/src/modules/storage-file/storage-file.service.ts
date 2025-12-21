import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { StorageFile, StorageFileDocument } from 'src/schemas/storage-file.schema';

@Injectable()
export class StorageFileService {
    constructor(
        @InjectModel(StorageFile.name)
        private readonly storageFileModel: Model<StorageFileDocument>,
    ) {}

    async getFiles() {
        return null;
    }

    async saveFiles() {
        return null;
    }

    async updateFiles() {
        return null;
    }

    async deleteMany(ids: string[]) {

	};
}