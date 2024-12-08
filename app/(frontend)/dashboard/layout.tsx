import Headers from "@/components/Navbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <Headers />
      <main>{children}</main>
    </div>
  );
}
