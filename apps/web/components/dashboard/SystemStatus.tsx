import {
  Database,
  Server,
  MessageCircle,
  CreditCard,
 Clock3,
} from "lucide-react";

const services = [
  {
    name: "Backend API",
    icon: Server,
    status: "Online",
    color: "bg-green-500",
  },
  {
    name: "Database",
    icon: Database,
    status: "Online",
    color: "bg-green-500",
  },
  {
    name: "WhatsApp Bot",
    icon: MessageCircle,
    status: "Offline",
    color: "bg-red-500",
  },
  {
    name: "Midtrans",
    icon: CreditCard,
    status: "Not Connected",
    color: "bg-yellow-500",
  },
  {
    name: "Scheduler",
    icon: Clock3,
    status: "Running",
    color: "bg-green-500",
  },
];

export default function SystemStatus() {
  return (
    <div className="rounded-2xl bg-white border shadow-sm p-6">

      <h2 className="text-xl font-bold mb-5">
        Status Sistem
      </h2>

      <div className="space-y-4">

        {services.map((service) => {
          const Icon = service.icon;

          return (
            <div
              key={service.name}
              className="flex items-center justify-between border rounded-xl p-4"
            >

              <div className="flex items-center gap-4">

                <Icon className="text-blue-600" />

                <div>

                  <h3 className="font-semibold">
                    {service.name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {service.status}
                  </p>

                </div>

              </div>

              <div
                className={`w-3 h-3 rounded-full ${service.color}`}
              />

            </div>
          );
        })}

      </div>

    </div>
  );
}
