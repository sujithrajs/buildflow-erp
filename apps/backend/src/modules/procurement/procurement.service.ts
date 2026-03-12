import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProcurementService {
  constructor(private prisma: PrismaService) {}

  async createMaterialRequest(projectId: string, requesterId: string, items: Pick<Prisma.MRItemUncheckedCreateInput, 'materialId' | 'quantity'>[]) {
    return this.prisma.materialRequest.create({
      data: {
        projectId,
        requesterId,
        items: {
          create: items.map(item => ({
            materialId: item.materialId,
            quantity: item.quantity
          }))
        }
      },
      include: { items: true }
    });
  }

  async getMaterialRequests() {
    return this.prisma.materialRequest.findMany({
      include: { items: true, requester: true, project: true }
    });
  }

  async getMaterialRequestById(id: string) {
    const mr = await this.prisma.materialRequest.findUnique({
      where: { id },
      include: { items: { include: { material: true } }, requester: true, approver: true }
    });
    if (!mr) throw new NotFoundException('Material Request not found');
    return mr;
  }

  async approveMaterialRequest(mrId: string, approverId: string) {
    return this.prisma.$transaction(async (tx) => {
      const mr = await tx.materialRequest.update({
        where: { id: mrId },
        data: { status: 'APPROVED', approvedBy: approverId }
      });
      const pr = await tx.purchaseRequisition.create({
        data: { mrId: mr.id }
      });
      return { mr, pr };
    });
  }
}
