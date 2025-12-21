import { Module } from '@nestjs/common';
import { MaterialModule } from './material/material.module';
import { AssetModule } from './asset/asset.module';

@Module({
  imports: [MaterialModule, AssetModule]
})
export class LogisticModule {}
