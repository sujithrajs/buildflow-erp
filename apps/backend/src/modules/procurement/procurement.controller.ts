import { Controller, Post, Get, Param, Body, UseGuards, Request, Patch } from '@nestjs/common';
import { ProcurementService } from './procurement.service';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { Prisma } from '@prisma/client';
import type { Request as ExpressRequest } from 'express';

@Controller('procurement')
@UseGuards(JwtAuthGuard, RolesGuard)
export class ProcurementController {
  constructor(private procurementService: ProcurementService) {}

  @Post('mr')
  @Roles('SITE_ENGINEER', 'PROJECT_MANAGER')
  async createMR(
    @Body() body: { projectId: string; items: Pick<Prisma.MRItemUncheckedCreateInput, 'materialId' | 'quantity'>[] },
    @Request() req: ExpressRequest
  ) {
    const userId = (req.user as any).id;
    return this.procurementService.createMaterialRequest(body.projectId, userId, body.items);
  }

  @Get('mr')
  async getAllMRs() {
    return this.procurementService.getMaterialRequests();
  }

  @Get('mr/:id')
  async getMR(@Param('id') id: string) {
    return this.procurementService.getMaterialRequestById(id);
  }

  @Patch('mr/:id/approve')
  @Roles('PROJECT_MANAGER', 'ADMIN')
  async approveMR(@Param('id') id: string, @Request() req: ExpressRequest) {
    const approverId = (req.user as any).id;
    return this.procurementService.approveMaterialRequest(id, approverId);
  }
}
