const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

async function main() {
  const hashed = await bcrypt.hash('password123', 10);

  const user = await prisma.user.upsert({
    where: { email: 'admin@buildflow.com' },
    update: {},
    create: {
      email: 'admin@buildflow.com',
      password: hashed,
      firstName: 'Admin',
      lastName: 'User',
      role: 'ADMIN',
    },
  });
  console.log('✅ Seeded admin user:', user.email);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
