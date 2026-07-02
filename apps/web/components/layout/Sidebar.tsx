"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Receipt,
  CreditCard,
  MessageCircle,
  Bot,
  BarChart3,
  Settings,
} from "lucide-react";

const menus = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Customers",
    href: "/customers",
    icon: Users,
  },
  {
    title: "Billing",
    href: "/billing",
    icon: Receipt,
  },
  {
    title: "Payments",
    href: "/payments",
    icon: CreditCard,
  },
  {
    title: "WhatsApp Bot",
    href: "/whatsapp-bot",
    icon: MessageCircle,
  },
  {
    title: "Automation",
    href: "/automation",
    icon: Bot,
  },
  {
    title: "Reports",
    href: "/reports",
    icon: BarChart3,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 bg-slate-900 text-white min-h-screen flex flex-col">

      <div className="border-b border-slate-800 p-6">
        <h1 className="text-2xl font-bold">
          Agung Network
        </h1>

        <p className="text-slate-400 text-sm">
          Operating System
        </p>
      </div>

      <nav className="flex-1 p-4 space-y-2">

        {menus.map((menu) => {
          const Icon = menu.icon;

          return (
            <Link
              key={menu.href}
              href={menu.href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                pathname === menu.href
                  ? "bg-blue-600 text-white"
                  : "hover:bg-slate-800 text-slate-300"
              }`}
            >
              <Icon size={20} />
              {menu.title}
            </Link>
          );
        })}

      </nav>

      <div className="border-t border-slate-800 p-5">
        <p className="text-sm text-slate-400">
          Version 1.0.0
        </p>
      </div>

    </aside>
  );
}
