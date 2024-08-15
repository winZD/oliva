const { PrismaClient } = require("@prisma/client");
const data = require("./MOCK_DATA.json");
const prisma = new PrismaClient();

async function main() {
  const harvests = data.map((harvest) => ({
    ...harvest,
    clerkId: "1234567890",
  }));

  for (const harvest of harvests) {
    await prisma.harvest.create({ data: harvest });
  }
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });
