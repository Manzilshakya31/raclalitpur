import { NextRequest, NextResponse } from "next/server";
import { SITE_URL } from "@/lib/constants";

const CANONICAL_HOST = new URL(SITE_URL).hostname;
const WWW_HOST = `www.${CANONICAL_HOST}`;

export function middleware(request: NextRequest) {
  const requestHost =
    request.headers.get("x-forwarded-host") ??
    request.headers.get("host") ??
    request.nextUrl.host;
  const hostname = requestHost
    .split(",")[0]
    .trim()
    .toLowerCase()
    .replace(/:\d+$/, "");
  const forwardedProtocol = request.headers
    .get("x-forwarded-proto")
    ?.split(",")[0]
    .trim()
    .toLowerCase();
  const protocol =
    forwardedProtocol ?? request.nextUrl.protocol.replace(/:$/, "").toLowerCase();

  if (
    hostname !== WWW_HOST &&
    (hostname !== CANONICAL_HOST || protocol === "https")
  ) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.hostname = CANONICAL_HOST;
  url.protocol = "https:";
  url.port = "";

  return NextResponse.redirect(url, 308);
}
