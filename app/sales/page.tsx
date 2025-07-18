import { DashboardLayout } from "@/components/layout";
import { Orders } from "@/components/orders";

export default function SalesPage() {
  return (
    <DashboardLayout>
      <div className="p-4 md:p-6 lg:p-8">
        <Orders />
      </div>
    </DashboardLayout>
  );
}
