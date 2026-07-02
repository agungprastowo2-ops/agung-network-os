const activities = [
  "Pelanggan Budi membayar tagihan.",
  "Tagihan bulan Juli berhasil dibuat.",
  "WhatsApp Bot berhasil dijalankan.",
  "Scheduler mengirim 25 tagihan.",
  "Admin login ke sistem.",
];

export default function RecentActivity() {
  return (
    <div className="rounded-2xl bg-white border shadow-sm p-6">

      <h2 className="text-xl font-bold mb-5">
        Aktivitas Terbaru
      </h2>

      <div className="space-y-4">

        {activities.map((item, index) => (
          <div
            key={index}
            className="border-l-4 border-blue-600 pl-4 py-2"
          >
            {item}
          </div>
        ))}

      </div>

    </div>
  );
}
