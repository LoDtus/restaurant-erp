import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MONGODB_URI } from 'src/common/constants/constants';

@Global()
@Module({
	imports: [
		MongooseModule.forRoot(
			MONGODB_URI || 'mongodb://root:rootpw@localhost:27017/longvi-db?authSource=admin',
			{
				autoIndex: true, // dev true, prod false
				serverSelectionTimeoutMS: 5000,
			},
		),
	],
	exports: [MongooseModule],
})

export class MongoModule {}