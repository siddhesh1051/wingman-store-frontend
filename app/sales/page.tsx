import { DashboardLayout } from "@/components/layout";
import { Orders } from "@/components/orders";

export default function SalesPage() {
  return (
    <DashboardLayout>
      <div className="p-8">
        <Orders />
      </div>
    </DashboardLayout>
  );
}
