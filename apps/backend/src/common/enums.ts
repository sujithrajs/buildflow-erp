export type Role = 'ADMIN' | 'PROJECT_MANAGER' | 'SITE_ENGINEER' | 'ACCOUNTANT' | 'VENDOR';
export const Role = {
  ADMIN: 'ADMIN' as const,
  PROJECT_MANAGER: 'PROJECT_MANAGER' as const,
  SITE_ENGINEER: 'SITE_ENGINEER' as const,
  ACCOUNTANT: 'ACCOUNTANT' as const,
  VENDOR: 'VENDOR' as const,
};

export type ProjectStatus = 'PLANNING' | 'ACTIVE' | 'ON_HOLD' | 'COMPLETED';
export const ProjectStatus = {
  PLANNING: 'PLANNING' as const,
  ACTIVE: 'ACTIVE' as const,
  ON_HOLD: 'ON_HOLD' as const,
  COMPLETED: 'COMPLETED' as const,
};

export type MRStatus = 'PENDING' | 'APPROVED' | 'REJECTED';
export const MRStatus = {
  PENDING: 'PENDING' as const,
  APPROVED: 'APPROVED' as const,
  REJECTED: 'REJECTED' as const,
};

export type POStatus = 'ISSUED' | 'PARTIAL_RECEIPT' | 'COMPLETED';
export const POStatus = {
  ISSUED: 'ISSUED' as const,
  PARTIAL_RECEIPT: 'PARTIAL_RECEIPT' as const,
  COMPLETED: 'COMPLETED' as const,
};

export type AttendanceStatus = 'PRESENT' | 'ABSENT' | 'HALF_DAY';
export const AttendanceStatus = {
  PRESENT: 'PRESENT' as const,
  ABSENT: 'ABSENT' as const,
  HALF_DAY: 'HALF_DAY' as const,
};

export type MachineryStatus = 'AVAILABLE' | 'IN_USE' | 'UNDER_MAINTENANCE';
export const MachineryStatus = {
  AVAILABLE: 'AVAILABLE' as const,
  IN_USE: 'IN_USE' as const,
  UNDER_MAINTENANCE: 'UNDER_MAINTENANCE' as const,
};
