import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json(JSON.stringify({ name: "suyog" }));
}

export function POST() {
  return NextResponse.json(JSON.stringify({ name: "suyog" }));
}

export function PATCH() {
  return NextResponse.json(JSON.stringify({ name: "suyog" }));
}
