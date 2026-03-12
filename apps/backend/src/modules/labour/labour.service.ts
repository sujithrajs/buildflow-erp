import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class LabourService {
  constructor(private prisma: PrismaService) {}

  async createLabour(data: Prisma.LabourCreateInput) {
    return this.prisma.labour.create({ data });
  }

  async getAllLabour() {
    return this.prisma.labour.findMany();
  }

  async markAttendance(projectId: string, labourId: string, status: 'PRESENT' | 'ABSENT' | 'HALF_DAY') {
    return this.prisma.attendance.create({
      data: {
        projectId,
        labourId,
        status
      }
    });
  }

  async getProjectAttendance(projectId: string, date: Date) {
    // Determine the start and end of the specified day
    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);

    return this.prisma.attendance.findMany({
      where: {
        projectId,
        date: {
          gte: startOfDay,
          lte: endOfDay,
        }
      },
      include: { labour: true }
    });
  }

  async recordSubcontractorBill(data: Prisma.SubcontractorBillUncheckedCreateInput) {
    return this.prisma.subcontractorBill.create({ data });
  }

  async createSubcontractor(data: Prisma.SubcontractorCreateInput) {
    return this.prisma.subcontractor.create({ data });
  }

  async getSubcontractors() {
     return this.prisma.subcontractor.findMany({ include: { bills: true } });
  }
}
