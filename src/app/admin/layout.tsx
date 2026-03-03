"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
    LayoutDashboard,
    Briefcase,
    LogOut,
    Menu,
    X,
    ChevronRight,
    UserCircle
} from "lucide-react";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const pathname = usePathname();
    const router = useRouter();

    // Do not show layout on login page
    if (pathname === "/admin/login") {
        return <>{children}</>;
    }

    const navItems = [
        { name: "Case Studies", href: "/admin/case-studies", icon: Briefcase },
    ];

    const handleLogout = async () => {
        try {
            const res = await fetch("/api/auth/logout", { method: "POST" });
            if (res.ok) {
                router.push("/admin/login");
                router.refresh();
            }
        } catch (err) {
            console.error("Logout failed", err);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 flex font-inter text-slate-900">
            {/* Sidebar */}
            <aside
                className={`${isSidebarOpen ? "w-72" : "w-20"
                    } bg-brand-dark text-white transition-all duration-300 ease-in-out flex flex-col fixed h-full z-50`}
            >
                {/* Sidebar Header */}
                <div className="p-6 flex items-center justify-between border-b border-white/5">
                    <Link href="/" className="flex items-center space-x-3 overflow-hidden">
                        <div className="min-w-[32px] w-8 h-8 bg-brand-primary rounded-sm flex items-center justify-center">
                            <span className="text-white font-bold text-xl uppercase">S</span>
                        </div>
                        {isSidebarOpen && (
                            <span className="text-white font-bold text-lg tracking-tight font-outfit uppercase whitespace-nowrap">
                                Social Era
                            </span>
                        )}
                    </Link>
                </div>

                {/* Nav Items */}
                <nav className="flex-1 py-8 px-4 space-y-2">
                    {navItems.map((item) => {
                        const isActive = pathname.startsWith(item.href);
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`flex items-center space-x-4 px-4 py-3.5 rounded-xl transition-all duration-200 group ${isActive
                                    ? "bg-brand-primary text-white shadow-lg shadow-brand-primary/20"
                                    : "text-white/60 hover:bg-white/5 hover:text-white"
                                    }`}
                            >
                                <item.icon className="w-5 h-5 min-w-[20px]" />
                                {isSidebarOpen && (
                                    <span className="font-semibold text-sm tracking-wide uppercase">{item.name}</span>
                                )}
                                {!isSidebarOpen && isActive && (
                                    <div className="absolute left-20 bg-brand-primary px-3 py-1.5 rounded-md text-xs font-bold uppercase whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                                        {item.name}
                                    </div>
                                )}
                            </Link>
                        );
                    })}
                </nav>

                {/* Sidebar Footer */}
                <div className="p-4 space-y-2">
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center space-x-4 px-4 py-3.5 rounded-xl text-red-400 hover:bg-red-400/10 transition-all group"
                    >
                        <LogOut className="w-5 h-5 min-w-[20px]" />
                        {isSidebarOpen && (
                            <span className="font-semibold text-sm tracking-wide uppercase">Logout</span>
                        )}
                    </button>

                    <button
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className="w-full hidden md:flex items-center justify-center p-2 text-white/20 hover:text-white/60 transition-colors"
                    >
                        {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className={`${isSidebarOpen ? "md:ml-72" : "md:ml-20"} flex-1 transition-all duration-300 p-8 pt-10`}>
                <header className="flex justify-between items-center mb-12">
                    <div>
                        <h2 className="text-2xl font-bold font-outfit tracking-tight uppercase text-slate-800">
                            {navItems.find(i => pathname.startsWith(i.href))?.name || "Dashboard"}
                        </h2>
                        <div className="flex items-center text-slate-400 text-xs mt-2 uppercase tracking-widest space-x-2">
                            <span>Admin</span>
                            <ChevronRight className="w-3 h-3" />
                            <span className="text-brand-primary font-bold">Portal</span>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <div className="bg-white border border-slate-200 px-4 py-2 rounded-full flex items-center space-x-3 shadow-sm">
                            <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-slate-600">
                                <UserCircle className="w-5 h-5" />
                            </div>
                            <span className="text-sm font-bold text-slate-700">Administrator</span>
                        </div>
                    </div>
                </header>

                <div className="max-w-6xl mx-auto animate-fade-in-up">
                    {children}
                </div>
            </main>
        </div>
    );
}
