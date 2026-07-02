"use client";

import {
  Bell,
  Search,
  Moon,
  UserCircle2,
} from "lucide-react";

export default function Topbar() {
  return (
    <header className="flex items-center justify-between rounded-2xl bg-white border shadow-sm p-5 mb-8">

      <div className="relative w-[380px]">

        <Search
          size={18}
          className="absolute left-3 top-3 text-gray-400"
        />

        <input
          placeholder="Cari pelanggan..."
          className="w-full rounded-xl border bg-slate-50 py-2 pl-10 pr-4 outline-none focus:ring-2 focus:ring-blue-500"
        />

      </div>

      <div className="flex items-center gap-4">

        <button className="rounded-xl border p-2 hover:bg-slate-100">
          <Moon size={20} />
        </button>

        <button className="relative rounded-xl border p-2 hover:bg-slate-100">
          <Bell size={20} />

          <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-red-500"></span>
        </button>

        <div className="flex items-center gap-3">

          <UserCircle2 size={40} />

          <div>
            <h3 className="font-semibold">
              Agung
            </h3>

            <p className="text-xs text-gray-500">
              Administrator
            </p>
          </div>

        </div>

      </div>

    </header>
  );
}
