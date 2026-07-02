"use client";

import CustomerStatus from "./CustomerStatus";

interface Customer {
  id: string;
  customerId: string;
  fullName: string;
  phone: string;
  packageName: string;
  monthlyFee: number;
  status: string;
}

interface Props {
  customers: Customer[];
  onDelete: (id: string) => void;
}

export default function CustomerTable({
  customers,
  onDelete,
}: Props) {
  return (
    <div className="overflow-hidden rounded-xl border bg-white">
      <table className="w-full">
        <thead className="bg-slate-100">
          <tr>
            <th className="p-4 text-left">ID</th>
            <th className="p-4 text-left">Nama</th>
            <th className="p-4 text-left">WhatsApp</th>
            <th className="p-4 text-left">Paket</th>
            <th className="p-4 text-left">Tagihan</th>
            <th className="p-4 text-left">Status</th>
            <th className="p-4 text-center">Aksi</th>
          </tr>
        </thead>

        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id} className="border-t">
              <td className="p-4">{customer.customerId}</td>
              <td className="p-4">{customer.fullName}</td>
              <td className="p-4">{customer.phone}</td>
              <td className="p-4">{customer.packageName}</td>
              <td className="p-4">
                Rp {customer.monthlyFee.toLocaleString("id-ID")}
              </td>
              <td className="p-4">
                <CustomerStatus status={customer.status} />
              </td>
              <td className="p-4 text-center">
                <button
                  onClick={() => onDelete(customer.id)}
                  className="rounded-lg bg-red-500 px-3 py-2 text-white hover:bg-red-600"
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}

          {customers.length === 0 && (
            <tr>
              <td
                colSpan={7}
                className="p-8 text-center text-gray-500"
              >
                Belum ada pelanggan.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
