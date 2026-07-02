import {
  UserPlus,
  Receipt,
  MessageCircle,
  Send,
  CreditCard,
  RotateCcw,
} from "lucide-react";

const actions = [
  {
    title: "Tambah Pelanggan",
    description: "Tambah pelanggan baru",
    icon: UserPlus,
    color: "bg-blue-600",
  },
  {
    title: "Buat Tagihan",
    description: "Generate tagihan bulan ini",
    icon: Receipt,
    color: "bg-green-600",
  },
  {
    title: "Broadcast WA",
    description: "Kirim pesan massal",
    icon: MessageCircle,
    color: "bg-emerald-600",
  },
  {
    title: "Kirim Tagihan",
    description: "Kirim tagihan sekarang",
    icon: Send,
    color: "bg-orange-600",
  },
  {
    title: "Cek Midtrans",
    description: "Sinkron pembayaran",
    icon: CreditCard,
    color: "bg-purple-600",
  },
  {
    title: "Restart Bot",
    description: "Restart WhatsApp Bot",
    icon: RotateCcw,
    color: "bg-red-600",
  },
];

export default function QuickActions() {
  return (
    <div className="rounded-2xl bg-white border shadow-sm p-6">
      <h2 className="text-xl font-bold mb-6">
        Quick Actions
      </h2>

      <div className="grid grid-cols-2 xl:grid-cols-3 gap-4">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.title}
              className="rounded-xl border p-5 hover:shadow-lg transition-all hover:-translate-y-1 text-left"
            >
              <div
                className={`w-12 h-12 rounded-xl ${action.color} text-white flex items-center justify-center mb-4`}
              >
                <Icon size={22} />
              </div>

              <h3 className="font-semibold">
                {action.title}
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                {action.description}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
