import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongoModule } from './modules/mongo/mongo.module';
import { MenuModule } from './modules/menu/menu-item.module';
import { UserModule } from './modules/user/user.module';
import { StorageFileModule } from './modules/storage-file/storage-file.module';
import { RoleModule } from './modules/role/role.module';
import { NotificationService } from './modules/notification/notification.service';
import { NotificationController } from './modules/notification/notification.controller';
import { CustomerController } from './modules/customer/customer.controller';
import { AssetsController } from './modules/assets/assets.controller';
import { MaterialController } from './modules/material/material.controller';
import { LogisticModule } from './modules/logistic/logistic.module';
import { CrmModule } from './modules/crm/crm.module';
import { OperationModule } from './modules/operation/operation.module';
import { SaleModule } from './modules/sale/sale.module';
import { CategoryModule } from './modules/category/category.module';

@Module({
	imports: [
		MongoModule,
		MenuModule,
		UserModule,
		StorageFileModule,
		RoleModule,
		LogisticModule,
		CrmModule,
		OperationModule,
		SaleModule,
		CategoryModule,
	],
	controllers: [AppController, NotificationController, CustomerController, AssetsController, MaterialController],
	providers: [AppService, NotificationService],
})
export class AppModule {}
