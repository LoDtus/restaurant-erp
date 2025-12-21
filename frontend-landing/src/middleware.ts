import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const allowedPaths = ["/about", "/menu", "/reservation", "/contact"];

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    if (allowedPaths.includes(pathname)) {
        // Giữ URL đẹp nhưng load nội dung trang chủ
        return NextResponse.rewrite(new URL("/", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/about", "/menu", "/reservation", "/contact"],
};