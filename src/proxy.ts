import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

// We use jose for middleware because jsonwebtoken is not Edge compatible
const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || 'fallback-secret');

export async function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Protect /admin routes (except /admin/login)
    if (pathname.startsWith('/admin') && pathname !== '/admin/login') {
        const token = request.cookies.get('token')?.value;

        if (!token) {
            return NextResponse.redirect(new URL('/admin/login', request.url));
        }

        try {
            // Verify token
            const { payload } = await jwtVerify(token, JWT_SECRET);

            // Ensure it's an admin
            if (payload.role !== 'admin') {
                return NextResponse.redirect(new URL('/admin/login', request.url));
            }

            return NextResponse.next();
        } catch (error) {
            console.error('Middleware JWT Error:', error);
            return NextResponse.redirect(new URL('/admin/login', request.url));
        }
    }

    return NextResponse.next();
}

// Config to match only relevant routes
export const config = {
    matcher: ['/admin/:path*'],
};
