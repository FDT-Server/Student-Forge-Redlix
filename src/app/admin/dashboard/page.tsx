import { redirect } from "next/navigation";
import { getAdminSession } from "@/lib/auth";
import AdminDashboardClient from "./AdminDashboardClient";

export default async function AdminDashboardPage() {
  const session = await getAdminSession();

  // Defense in depth: Verify session on server component render
  if (!session) {
    redirect("/admin/login");
  }

  return <AdminDashboardClient adminEmail={session.email} />;
}
