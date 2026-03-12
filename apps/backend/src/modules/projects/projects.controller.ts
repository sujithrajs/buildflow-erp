import { Controller, Post, Get, Param, Body, UseGuards, Request } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { Prisma } from '@prisma/client';
import type { Request as ExpressRequest } from 'express';

@Controller('projects')
@UseGuards(JwtAuthGuard, RolesGuard)
export class ProjectsController {
  constructor(private projectsService: ProjectsService) {}

  @Post()
  @Roles('ADMIN', 'PROJECT_MANAGER')
  async createProject(@Body() dto: Prisma.ProjectUncheckedCreateInput, @Request() req: ExpressRequest) {
    dto.managerId = dto.managerId || (req.user as any).id;
    return this.projectsService.createProject(dto);
  }

  @Get()
  async getAllProjects() {
    return this.projectsService.findAllProjects();
  }

  @Get(':id')
  async getProject(@Param('id') id: string) {
    return this.projectsService.getProjectById(id);
  }

  @Post(':id/boq')
  @Roles('ADMIN', 'PROJECT_MANAGER')
  async addBOQ(
    @Param('id') projectId: string,
    @Body() body: { name: string, items: Pick<Prisma.BOQItemUncheckedCreateInput, 'materialId' | 'estQuantity' | 'estCost'>[] }
  ) {
    return this.projectsService.createBOQ(projectId, body.name, body.items);
  }
}
