import BankKitNav from "@/src/components/bank-kit-nav";
import Footer from "@/src/components/footer";

export default async function BankRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <BankKitNav/>
      <div data-slot="layout" className="relative z-10 flex flex-col border-0 ">
        <div className="min-h-0 flex-1 ">{children}</div>
      </div>
    </>
  );
}
