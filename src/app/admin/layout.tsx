"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Briefcase,
  LogOut,
  Menu,
  X,
  ChevronRight,
  UserCircle,
} from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const pathname = usePathname();
  const router = useRouter();

  // Close sidebar on mobile when navigating
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };
    
    // Initial check
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false);
    }
  }, [pathname]);

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
    <div className="min-h-screen bg-slate-50 flex font-inter text-slate-900 overflow-hidden md:overflow-auto">
      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 z-40 md:hidden backdrop-blur-sm"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? "translate-x-0 w-72" : "-translate-x-full w-72 md:translate-x-0 md:w-20"
        } bg-brand-dark text-white transition-all duration-300 ease-in-out flex flex-col fixed h-full z-50 shadow-2xl md:shadow-none`}
      >
        {/* Sidebar Header */}
        <div className="p-6 flex items-center justify-between border-b border-white/5">
          <Link
            href="/"
            className="flex items-center space-x-3 overflow-hidden"
          >
            <div className="min-w-[32px] w-8 h-8 bg-brand-primary rounded-sm flex items-center justify-center">
              <span className="text-white font-bold text-xl uppercase">S</span>
            </div>
            {(isSidebarOpen || window?.innerWidth < 768) && (
              <span className="text-white font-bold text-lg tracking-tight font-outfit uppercase whitespace-nowrap">
                Social Era
              </span>
            )}
          </Link>
          <button 
            onClick={() => setIsSidebarOpen(false)}
            className="md:hidden text-white/60 hover:text-white p-1"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Nav Items */}
        <nav className="flex-1 py-8 px-4 space-y-2 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center space-x-4 px-4 py-3.5 rounded-xl transition-all duration-200 group ${
                  isActive
                    ? "bg-brand-primary text-white shadow-lg shadow-brand-primary/20"
                    : "text-white/60 hover:bg-white/5 hover:text-white"
                }`}
              >
                <item.icon className="w-5 h-5 min-w-[20px]" />
                {isSidebarOpen && (
                  <span className="font-semibold text-sm tracking-wide uppercase whitespace-nowrap">
                    {item.name}
                  </span>
                )}
                {!isSidebarOpen && isActive && (
                  <div className="hidden md:block absolute left-20 bg-brand-primary px-3 py-1.5 rounded-md text-xs font-bold uppercase whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-50">
                    {item.name}
                  </div>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Sidebar Footer */}
        <div className="p-4 space-y-2 border-t border-white/5 bg-brand-dark/50">
          <button
            onClick={handleLogout}
            className="w-full flex items-center space-x-4 px-4 py-3.5 rounded-xl text-red-400 hover:bg-red-400/10 transition-all group"
          >
            <LogOut className="w-5 h-5 min-w-[20px]" />
            {isSidebarOpen && (
              <span className="font-semibold text-sm tracking-wide uppercase">
                Logout
              </span>
            )}
          </button>

          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="w-full hidden md:flex items-center justify-center p-2 text-white/20 hover:text-white/60 transition-colors mt-2"
          >
            {isSidebarOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main
        className={`${isSidebarOpen ? "md:ml-72" : "md:ml-20"} flex-1 transition-all duration-300 p-4 sm:p-8 md:pt-10 w-full h-screen overflow-y-auto`}
      >
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="md:hidden p-2.5 bg-white rounded-xl shadow-sm border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div>
              <h2 className="text-xl md:text-2xl font-bold font-outfit tracking-tight uppercase text-slate-800">
                {navItems.find((i) => pathname.startsWith(i.href))?.name ||
                  "Dashboard"}
              </h2>
              <div className="flex items-center text-slate-400 text-[10px] sm:text-xs mt-1 md:mt-2 uppercase tracking-widest space-x-2">
                <span>Admin</span>
                <ChevronRight className="w-3 h-3" />
                <span className="text-brand-primary font-bold">Portal</span>
              </div>
            </div>
          </div>

          <div className="flex items-center self-end sm:self-auto">
            <div className="bg-white border border-slate-200 pl-2 pr-4 py-1.5 md:px-4 md:py-2 rounded-full flex items-center space-x-2 md:space-x-3 shadow-sm">
              <div className="w-6 h-6 md:w-8 md:h-8 bg-slate-100 rounded-full flex items-center justify-center text-slate-600">
                <UserCircle className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <span className="text-xs md:text-sm font-bold text-slate-700">
                Administrator
              </span>
            </div>
          </div>
        </header>

        <div className="max-w-6xl mx-auto animate-fade-in-up pb-20">{children}</div>
      </main>
    </div>
  );
}

