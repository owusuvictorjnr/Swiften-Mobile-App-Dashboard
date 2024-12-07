import Headers from "@/components/Navbar";

export default function FrontendLayout({
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
