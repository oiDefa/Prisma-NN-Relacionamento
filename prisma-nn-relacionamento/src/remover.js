const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const relation = await prisma.coursesModules.findFirst();

  if (relation) {
    await prisma.coursesModules.delete({
      where: {
        id: relation.id
      }
    });

    console.log('Relacionamento removido com sucesso.');
  } else {
    console.log('Nenhum relacionamento encontrado.');
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());