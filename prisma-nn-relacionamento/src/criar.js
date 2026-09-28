const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const course = await prisma.course.create({
    data: {
      name: 'Desenvolvimento Web'
    }
  });

  const module = await prisma.module.create({
    data: {
      name: 'Banco de Dados'
    }
  });

  const relation = await prisma.coursesModules.create({
    data: {
      courseId: course.id,
      moduleId: module.id
    }
  });

  console.log('Curso:', course);
  console.log('Módulo:', module);
  console.log('Relacionamento:', relation);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());