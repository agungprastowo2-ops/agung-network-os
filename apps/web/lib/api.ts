const API_URL = "http://localhost:3001/api";

export async function getCustomers() {
  const res = await fetch(`${API_URL}/customers`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Gagal mengambil data pelanggan");

  return res.json();
}

export async function createCustomer(data: any) {
  const res = await fetch(`${API_URL}/customers`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
}

export async function updateCustomer(id: string, data: any) {
  const res = await fetch(`${API_URL}/customers/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
}

export async function deleteCustomer(id: string) {
  const res = await fetch(`${API_URL}/customers/${id}`, {
    method: "DELETE",
  });

  return res.json();
}
