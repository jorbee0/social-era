import { redirect } from "next/navigation";

export default function DashboardRedirect() {
  redirect("/admin/case-studies");
}
