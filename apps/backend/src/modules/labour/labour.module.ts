import { Module } from '@nestjs/common';
import { LabourService } from './labour.service';
import { LabourController } from './labour.controller';

@Module({
  providers: [LabourService],
  controllers: [LabourController]
})
export class LabourModule {}
