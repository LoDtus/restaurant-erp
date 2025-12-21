import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongoModule } from './modules/mongo/mongo.module';
import { MenuModule } from './modules/menu/menu-item.module';
import { UserModule } from './modules/user/user.module';
import { StorageFileModule } from './modules/storage-file/storage-file.module';
import { RoleModule } from './modules/role/role.module';

@Module({
	imports: [
		MongoModule,
		MenuModule,
		UserModule,
		StorageFileModule,
		RoleModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
