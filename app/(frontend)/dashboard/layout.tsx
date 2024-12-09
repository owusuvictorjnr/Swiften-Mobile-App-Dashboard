import Headers from "@/components/Navbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-white flex">
      <Headers />
      <main className="flex justify-center w-full px-10">{children}</main>
    </div>
  );
}
