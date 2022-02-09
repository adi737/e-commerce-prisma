import { PrismaClient } from "@prisma/client";

const users = [
  {
    id: 6,
    email: "adirian18@gmail.com",
    nickname: "adi737",
    password: "1234",
  },
  {
    id: 7,
    email: "prisma@asd.asd",
    nickname: "prisma737",
    password: "1234",
  },
];

const products = [
  {
    name: "awesone shoes",
    category: "schoes",
    brand: "adidas",
    description: "these are awesome shoes",
    price: 299.99,
    image: "/img/awesome_shoes.jpg",
    countInStock: 20,
    creatorId: users[0].id,
  },
  {
    name: "awesone shirt",
    category: "shirt",
    brand: "adidas",
    description: "this is awesome shirt",
    price: 59.99,
    image: "/img/awesome_shirt.jpg",
    countInStock: 35,
    creatorId: users[0].id,
  },
  {
    name: "awesone shoes",
    category: "schoes",
    brand: "adidas",
    description: "these are awesome shoes",
    price: 299.99,
    image: "/img/awesome_shoes.jpg",
    countInStock: 20,
    creatorId: users[0].id,
  },
  {
    name: "awesone shirt",
    category: "shirt",
    brand: "adidas",
    description: "this is awesome shirt",
    price: 59.99,
    image: "/img/awesome_shirt.jpg",
    countInStock: 35,
    creatorId: users[0].id,
  },
  {
    name: "awesone shoes",
    category: "schoes",
    brand: "adidas",
    description: "these are awesome shoes",
    price: 299.99,
    image: "/img/awesome_shoes.jpg",
    countInStock: 20,
    creatorId: users[0].id,
  },
  {
    name: "awesone shirt",
    category: "shirt",
    brand: "adidas",
    description: "this is awesome shirt",
    price: 59.99,
    image: "/img/awesome_shirt.jpg",
    countInStock: 35,
    creatorId: users[0].id,
  },
  {
    name: "awesone shoes",
    category: "schoes",
    brand: "adidas",
    description: "these are awesome shoes",
    price: 299.99,
    image: "/img/awesome_shoes.jpg",
    countInStock: 20,
    creatorId: users[0].id,
  },
  {
    name: "awesone shirt",
    category: "shirt",
    brand: "adidas",
    description: "this is awesome shirt",
    price: 59.99,
    image: "/img/awesome_shirt.jpg",
    countInStock: 35,
    creatorId: users[0].id,
  },
  {
    name: "awesone shoes",
    category: "schoes",
    brand: "adidas",
    description: "these are awesome shoes",
    price: 299.99,
    image: "/img/awesome_shoes.jpg",
    countInStock: 20,
    creatorId: users[0].id,
  },
  {
    name: "awesone shirt",
    category: "shirt",
    brand: "adidas",
    description: "this is awesome shirt",
    price: 59.99,
    image: "/img/awesome_shirt.jpg",
    countInStock: 35,
    creatorId: users[0].id,
  },
  {
    name: "awesone shoes",
    category: "schoes",
    brand: "adidas",
    description: "these are awesome shoes",
    price: 299.99,
    image: "/img/awesome_shoes.jpg",
    countInStock: 20,
    creatorId: users[0].id,
  },
  {
    name: "awesone shirt",
    category: "shirt",
    brand: "adidas",
    description: "this is awesome shirt",
    price: 59.99,
    image: "/img/awesome_shirt.jpg",
    countInStock: 35,
    creatorId: users[0].id,
  },
  {
    name: "awesone shoes",
    category: "schoes",
    brand: "adidas",
    description: "these are awesome shoes",
    price: 299.99,
    image: "/img/awesome_shoes.jpg",
    countInStock: 20,
    creatorId: users[0].id,
  },
  {
    name: "awesone shirt",
    category: "shirt",
    brand: "adidas",
    description: "this is awesome shirt",
    price: 59.99,
    image: "/img/awesome_shirt.jpg",
    countInStock: 35,
    creatorId: users[0].id,
  },
  {
    name: "awesone shoes",
    category: "schoes",
    brand: "adidas",
    description: "these are awesome shoes",
    price: 299.99,
    image: "/img/awesome_shoes.jpg",
    countInStock: 20,
    creatorId: users[0].id,
  },
  {
    name: "awesone shirt",
    category: "shirt",
    brand: "adidas",
    description: "this is awesome shirt",
    price: 59.99,
    image: "/img/awesome_shirt.jpg",
    countInStock: 35,
    creatorId: users[0].id,
  },
  {
    name: "awesone shoes",
    category: "schoes",
    brand: "adidas",
    description: "these are awesome shoes",
    price: 299.99,
    image: "/img/awesome_shoes.jpg",
    countInStock: 20,
    creatorId: users[0].id,
  },
  {
    name: "awesone shirt",
    category: "shirt",
    brand: "adidas",
    description: "this is awesome shirt",
    price: 59.99,
    image: "/img/awesome_shirt.jpg",
    countInStock: 35,
    creatorId: users[0].id,
  },
  {
    name: "awesone shoes",
    category: "schoes",
    brand: "adidas",
    description: "these are awesome shoes",
    price: 299.99,
    image: "/img/awesome_shoes.jpg",
    countInStock: 20,
    creatorId: users[0].id,
  },
  {
    name: "awesone shirt",
    category: "shirt",
    brand: "adidas",
    description: "this is awesome shirt",
    price: 59.99,
    image: "/img/awesome_shirt.jpg",
    countInStock: 35,
    creatorId: users[0].id,
  },
  {
    name: "awesone shoes",
    category: "schoes",
    brand: "adidas",
    description: "these are awesome shoes",
    price: 299.99,
    image: "/img/awesome_shoes.jpg",
    countInStock: 20,
    creatorId: users[0].id,
  },
  {
    name: "awesone shirt",
    category: "shirt",
    brand: "adidas",
    description: "this is awesome shirt",
    price: 59.99,
    image: "/img/awesome_shirt.jpg",
    countInStock: 35,
    creatorId: users[0].id,
  },
  {
    name: "awesone shoes",
    category: "schoes",
    brand: "adidas",
    description: "these are awesome shoes",
    price: 299.99,
    image: "/img/awesome_shoes.jpg",
    countInStock: 20,
    creatorId: users[0].id,
  },
  {
    name: "awesone shirt",
    category: "shirt",
    brand: "adidas",
    description: "this is awesome shirt",
    price: 59.99,
    image: "/img/awesome_shirt.jpg",
    countInStock: 35,
    creatorId: users[0].id,
  },
];

const prisma = new PrismaClient();

export const main = async () => {
  await prisma.product.createMany({
    data: products,
  });
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
