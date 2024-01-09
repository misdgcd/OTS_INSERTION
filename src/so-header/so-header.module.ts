import { Module } from '@nestjs/common';
import { SoHeaderService } from './so-header.service';
import { SoHeaderController } from './so-header.controller';

@Module({
  controllers: [SoHeaderController],
  providers: [SoHeaderService],
})
export class SoHeaderModule {}
