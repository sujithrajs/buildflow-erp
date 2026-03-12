import { Controller, Post, Get, Param, Body, UseGuards, Query } from '@nestjs/common';
import { LabourService } from './labour.service';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { Prisma } from '@prisma/client';

@Controller('labour')
@UseGuards(JwtAuthGuard, RolesGuard)
export class LabourController {
  constructor(private labourService: LabourService) {}

  @Post()
  @Roles('ADMIN', 'PROJECT_MANAGER')
  async addLabour(@Body() dto: Prisma.LabourCreateInput) {
    return this.labourService.createLabour(dto);
  }

  @Get()
  async getLabour() {
    return this.labourService.getAllLabour();
  }

  @Post('attendance')
  @Roles('SITE_ENGINEER', 'PROJECT_MANAGER')
  async markAttendance(@Body() body: { projectId: string; labourId: string; status: 'PRESENT' | 'ABSENT' | 'HALF_DAY' }) {
    return this.labourService.markAttendance(body.projectId, body.labourId, body.status);
  }

  @Get('attendance/:projectId')
  async getProjectAttendance(@Param('projectId') projectId: string, @Query('date') date: string) {
    const queryDate = date ? new Date(date) : new Date();
    return this.labourService.getProjectAttendance(projectId, queryDate);
  }

  @Post('subcontractor/bill')
  @Roles('SITE_ENGINEER', 'PROJECT_MANAGER', 'ACCOUNTANT')
  async recordBill(@Body() dto: Prisma.SubcontractorBillUncheckedCreateInput) {
    return this.labourService.recordSubcontractorBill(dto);
  }

  @Post('subcontractor')
  @Roles('ADMIN', 'PROJECT_MANAGER')
  async addSubcontractor(@Body() dto: Prisma.SubcontractorCreateInput) {
    return this.labourService.createSubcontractor(dto);
  }

  @Get('subcontractor')
  async listSubcontractors() {
     return this.labourService.getSubcontractors();
  }
}
