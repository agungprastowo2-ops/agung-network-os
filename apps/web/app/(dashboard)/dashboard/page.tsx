import StatCard from "@/components/dashboard/StatCard";
import RevenueChart from "@/components/dashboard/RevenueChart";
import SystemStatus from "@/components/dashboard/SystemStatus";
import RecentActivity from "@/components/dashboard/RecentActivity";

import {
  Users,
  Wallet,
  Receipt,
  Wifi,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-slate-900">
          Dashboard
        </h1>

        <p className="mt-2 text-slate-500">
          Selamat datang di Agung Network Operating System.
        </p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Total Pelanggan"
          value="1.245"
          icon={<Users size={34} />}
        />

        <StatCard
          title="Pendapatan"
          value="Rp18.500.000"
          icon={<Wallet size={34} />}
        />

        <StatCard
          title="Belum Bayar"
          value="143"
          icon={<Receipt size={34} />}
        />

        <StatCard
          title="WhatsApp Bot"
          value="Online"
          icon={<Wifi size={34} />}
        />
      </div>

      {/* Grafik */}
      <RevenueChart />

      {/* Status & Aktivitas */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <SystemStatus />
        <RecentActivity />
      </div>
    </div>
  );
}
