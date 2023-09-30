import { authOptions } from "@app/lib/auth";
import { prisma } from "@app/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
  const feed = await prisma.post.findMany({
    include: {
      author: {
        select: { name: true, email: true },
      },
      likes: {
        select: {
          id: true,
        },
      },
    },
  });

  return NextResponse.json(feed);
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
