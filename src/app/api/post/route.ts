import { authOptions } from "@app/lib/auth";
import { prisma } from "@app/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export function GET() {
  const data = [
    {
      title: "Test",
      description: "Test Desc.",
      publishDate: new Date(),
      imageUrl: "/images/profile.jpg",
      author: { name: "Suyog Mishal" },
    },
    {
      title: "Test 2",
      description: "Test Desc. 2",
      publishDate: new Date(),
      imageUrl: "/images/profile.jpg",
      author: { name: "Sanket Mishal" },
    },
    {
      title: "Test 3",
      description: "Test Desc. 3",
      publishDate: new Date(),
      imageUrl: "/images/profile.jpg",
      author: { name: "Sanket Mishal" },
    },
  ];

  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);

  const { title, description } = await request.json();

  if (!session) {
    return new NextResponse(JSON.stringify({ error: "unauthorized" }), {
      status: 401,
    });
  }

  const result = await prisma.post.create({
    data: {
      title: title,
      description: description,
      published: true,
      author: { connect: { email: session?.user?.email } },
    },
  });

  return NextResponse.json(result);
}
