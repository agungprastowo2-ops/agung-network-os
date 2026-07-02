"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { month: "Jan", revenue: 8500000 },
  { month: "Feb", revenue: 9100000 },
  { month: "Mar", revenue: 9800000 },
  { month: "Apr", revenue: 11200000 },
  { month: "Mei", revenue: 12400000 },
  { month: "Jun", revenue: 13800000 },
  { month: "Jul", revenue: 15200000 },
];

function rupiah(value: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function RevenueChart() {
  return (
    <div className="rounded-2xl bg-white border shadow-sm p-6">
      <div className="mb-6">
        <h2 className="text-xl font-bold">
          Pendapatan Bulanan
        </h2>

        <p className="text-gray-500 text-sm">
          Grafik pemasukan dari pembayaran pelanggan.
        </p>
      </div>

      <div className="h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="income" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2563eb" stopOpacity={0.45} />
                <stop offset="95%" stopColor="#2563eb" stopOpacity={0.03} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" />

            <YAxis tickFormatter={(v) => `${v / 1000000} jt`} />

            <Tooltip formatter={(v) => rupiah(Number(v))} />

            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#2563eb"
              strokeWidth={3}
              fill="url(#income)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
