import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  const password = await hash("password", 12);
  const user = await prisma.user.upsert({
    where: { email: "suyog@workshop.com" },
    update: {},
    create: {
      email: "suyog@workshop.com",
      name: "Suyog Mishal",
      password,
    },
  });
  console.log({ user });
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
