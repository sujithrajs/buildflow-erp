import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProjectsModule } from './modules/projects/projects.module';
import { ProcurementModule } from './modules/procurement/procurement.module';
import { LabourModule } from './modules/labour/labour.module';
import { InventoryModule } from './modules/inventory/inventory.module';

@Module({
  imports: [PrismaModule, AuthModule, UsersModule, ProjectsModule, ProcurementModule, LabourModule, InventoryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
