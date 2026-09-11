
import Navbar from "@/src/components/navbar";
import Footer from "@/src/components/footer";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <div
     data-slot="layout"
     className="relative z-10 flex flex-col min-h-0">
      <Navbar/>
         <div className="min-h-0 flex-1 flex-col">
          {children}
         </div>
      <Footer/>
  </div>
  );
}
