import { NextResponse } from "next/server";

export const runtime = "edge";

export function GET(request) {
  const resp = NextResponse.json("ok");
  resp.cookies.set("edge1", new Date().toISOString());
  resp.cookies.set("edge2", new Date().toISOString());
  return resp;
}
