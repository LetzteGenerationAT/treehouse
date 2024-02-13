import { PrismaClient } from '@prisma/client';
import { profiles } from './seed-data.ts';

const prisma = new PrismaClient();

try {
  console.log('Start seeding ...');

  for (const profileCreateInput of profiles) {
    const profile = await prisma.profile.create({
      data: profileCreateInput,
    });

    console.log(`Created profile`, profile);
  }

  console.log('Seeding finished');
} catch (e) {
  console.error(e);
  await prisma.$disconnect();
  process.exit(1);
}
