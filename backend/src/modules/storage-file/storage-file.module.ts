import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StorageFileService } from './storage-file.service';
import { StorageFile, StorageFileSchema } from 'src/schemas/storage-file.schema';

@Module({
	imports: [
		MongooseModule.forFeature([{ name: StorageFile.name, schema: StorageFileSchema }]),
	],
	providers: [StorageFileService],
})

export class StorageFileModule {}