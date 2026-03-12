import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProjectsService {
  constructor(private prisma: PrismaService) {}

  async createProject(data: Prisma.ProjectUncheckedCreateInput) {
    return this.prisma.project.create({ data });
  }

  async findAllProjects() {
    return this.prisma.project.findMany({ include: { manager: true } });
  }

  async getProjectById(id: string) {
    const project = await this.prisma.project.findUnique({
      where: { id },
      include: { boqs: { include: { items: { include: { material: true } } } } },
    });
    if (!project) throw new NotFoundException('Project not found');
    return project;
  }

  // BOQ Creation
  async createBOQ(projectId: string, name: string, items: Pick<Prisma.BOQItemUncheckedCreateInput, 'materialId' | 'estQuantity' | 'estCost'>[]) {
    return this.prisma.bOQ.create({
      data: {
        name,
        projectId,
        items: {
          create: items.map(item => ({
            materialId: item.materialId,
            estQuantity: item.estQuantity,
            estCost: item.estCost
          }))
        }
      },
      include: { items: true }
    });
  }
}
