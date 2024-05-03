import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

interface UserEntry {
  name: string;
  email: string;
}

async function makeEntry(newUser: UserEntry) {
  const output = await prisma.user.create({
    data: {
      name: newUser.name,
      email: newUser.email,
    },
  });
  console.log(output);
}

// makeEntry({name : "Krishan Kumar", email : "krishan@gmail.com"})

async function findManyRecords() {
  const output = await prisma.user.findMany();
  console.log(output);
}

// findManyRecords();

async function findFirstRecord(name: string) {
  const output = await prisma.user.findFirst({
    where: {
      name: name,
    },
  });
  console.log(output);
}

// findFirstRecord("Krishan Kumar");

async function findUniqueRecord(id: number) {
  const output = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });
  console.log(output);
}

// findUniqueRecord(2)

interface updateUser {
  name?: string;
  email?: string;
}

async function updateRecord(id: number, updateUser: updateUser) {
  const output = await prisma.user.update({
    where: {
      id: id,
    },
    data: updateUser,
  });
  console.log(output);
}

// updateRecord(3, { name: "Mahadev" });

async function deleteRecord(id: number) {
  const output = await prisma.user.delete({
    where: {
      id: id,
    },
  });

  console.log(output);
}

// deleteRecord(5);

async function deleteMany() {
  const output = await prisma.user.deleteMany({});
  console.log(output);
}

// deleteMany();
