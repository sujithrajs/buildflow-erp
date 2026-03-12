import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class InventoryService {
  constructor(private prisma: PrismaService) {}

  // --- MATERIAL INVENTORY ---
  
  async getProjectInventory(projectId: string) {
    return this.prisma.inventory.findMany({
      where: { projectId },
      include: { material: true }
    });
  }

  async issueMaterial(projectId: string, materialId: string, quantity: number) {
    return this.prisma.$transaction(async (tx) => {
      const stock = await tx.inventory.findFirst({
        where: { projectId, materialId }
      });

      if (!stock || stock.quantity < quantity) {
        throw new BadRequestException('Insufficient stock for issue');
      }

      return tx.inventory.update({
        where: { id: stock.id },
        data: { quantity: stock.quantity - quantity }
      });
    });
  }

  async receiveMaterial(projectId: string, materialId: string, quantity: number) {
    const existing = await this.prisma.inventory.findFirst({
      where: { projectId, materialId }
    });
    
    if (existing) {
      return this.prisma.inventory.update({
        where: { id: existing.id },
        data: { quantity: existing.quantity + quantity }
      });
    } else {
      return this.prisma.inventory.create({
        data: { projectId, materialId, quantity }
      });
    }
  }

  // --- MACHINERY MANAGEMENT ---

  async registerMachinery(data: Prisma.MachineryCreateInput) {
    return this.prisma.machinery.create({ data });
  }

  async getAllMachinery() {
    return this.prisma.machinery.findMany({ include: { usageLogs: true, maintenanceLogs: true } });
  }

  async logMachineryUsage(data: Prisma.UsageLogUncheckedCreateInput) {
    return this.prisma.usageLog.create({ data });
  }

  async logMachineryMaintenance(data: Prisma.MaintenanceLogUncheckedCreateInput) {
    return this.prisma.$transaction(async (tx) => {
       const log = await tx.maintenanceLog.create({ data });
       await tx.machinery.update({ 
         where: { id: data.machineryId }, 
         data: { status: 'UNDER_MAINTENANCE' } 
       });
       return log;
    });
  }
}
