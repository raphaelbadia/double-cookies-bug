import { NextResponse } from "next/server";

export function GET(request) {
  const resp = NextResponse.json("ok");
  resp.cookies.set("node1", new Date().toISOString());
  resp.cookies.set("node2", new Date().toISOString());
  return resp;
}
