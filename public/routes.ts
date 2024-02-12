import { File, List, ListChecks, ListOrdered, Plus, User } from "lucide-react";

export const routes = [
    {
      label: "Add Product",
      icon: Plus,
      color: "text-emerald-500",
      href: "/dashboard/add-product",
    },
    {
      label: "Product list",
      icon: List,
      color: "text-sky-500",
      href: "/dashboard/product-list",
    },
    {
      label: "Add Client",
      icon: Plus,
      href: "/dashboard/add-client",
      color: "text-sky-500",
    },
    {
      label: "Clients",
      icon: User,
      href: "/dashboard/clients",
      color: "text-i-500",
    },
    {
      label: "Add Order",
      icon: Plus,
      color: "text-pink-500",
      href: "/dashboard/add-order",
    },
    {
      label: "Orders",
      icon: ListChecks,
      color: "text-orange-500",
      href: "/dashboard/orders",
    },
    {
      label: "Invoices",
      icon: File,
      href: "/dashboard/Invoices",
      color: "text-sky-600",
    },
    {
      label: "New Report",
      icon: File,
      href: "/dashboard/new-report",
      color: "text-emerald-500",
    },
    {
      label: "Reports",
      icon: File,
      href: "/dashboard/reports",
      color: "text-blue-500",
    },
    {
      label: "Admin",
      icon: User,
      href: "/dashboard/admin",
      color: "text-fuchsia-500",
    }
  ];