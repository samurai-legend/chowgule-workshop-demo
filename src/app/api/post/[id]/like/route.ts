import { authOptions } from "@app/lib/auth";
import { prisma } from "@app/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new NextResponse(JSON.stringify({ error: "unauthorized" }), {
      status: 401,
    });
  }

  const post = await prisma.post.findFirst({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!post) {
    return new NextResponse(JSON.stringify({ error: "No Post found" }), {
      status: 404,
    });
  }

  const result = await prisma.like.create({
    data: {
      user: {
        connect: {
          email: session?.user.email,
        },
      },
      post: {
        connect: {
          id: post?.id,
        },
      },
    },
  });

  return NextResponse.json(result);
}
