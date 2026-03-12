import { Controller, Post, Get, Param, Body, UseGuards } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { Prisma } from '@prisma/client';

@Controller('inventory')
@UseGuards(JwtAuthGuard, RolesGuard)
export class InventoryController {
  constructor(private inventoryService: InventoryService) {}

  @Get('project/:projectId')
  async getProjectInventory(@Param('projectId') projectId: string) {
    return this.inventoryService.getProjectInventory(projectId);
  }

  @Post('issue')
  @Roles('SITE_ENGINEER', 'PROJECT_MANAGER')
  async issueMaterial(@Body() body: { projectId: string; materialId: string; quantity: number }) {
    return this.inventoryService.issueMaterial(body.projectId, body.materialId, body.quantity);
  }

  @Post('receive')
  @Roles('SITE_ENGINEER', 'PROJECT_MANAGER', 'ADMIN')
  async receiveMaterial(@Body() body: { projectId: string; materialId: string; quantity: number }) {
    return this.inventoryService.receiveMaterial(body.projectId, body.materialId, body.quantity);
  }

  @Post('machinery')
  @Roles('ADMIN', 'PROJECT_MANAGER')
  async registerMachinery(@Body() dto: Prisma.MachineryCreateInput) {
    return this.inventoryService.registerMachinery(dto);
  }

  @Get('machinery')
  async getAllMachinery() {
    return this.inventoryService.getAllMachinery();
  }

  @Post('machinery/usage')
  @Roles('SITE_ENGINEER', 'PROJECT_MANAGER')
  async logMachineryUsage(@Body() dto: Prisma.UsageLogUncheckedCreateInput) {
    return this.inventoryService.logMachineryUsage(dto);
  }

  @Post('machinery/maintenance')
  @Roles('PROJECT_MANAGER', 'ADMIN')
  async logMachineryMaintenance(@Body() dto: Prisma.MaintenanceLogUncheckedCreateInput) {
    return this.inventoryService.logMachineryMaintenance(dto);
  }
}
