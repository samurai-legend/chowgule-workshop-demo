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
