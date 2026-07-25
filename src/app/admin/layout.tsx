import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Console | Student Forge",
  description: "Secure management dashboard for Student Forge administrators.",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 font-sans">
      {children}
    </div>
  );
}
