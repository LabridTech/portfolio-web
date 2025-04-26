import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import DiscoveryForm from "@/components/discovery-form";

export default function DiscoveryPage() {
  return (
    <div className="relative min-h-screen">
      {/* Background gradients */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-blue-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-purple-500/10 blur-[100px]" />
      </div>
      
      <div className="relative z-10">
        <Navbar />
        <main className="container mx-auto py-10">
          <h1 className="text-4xl font-bold text-center mb-10">Company Discovery Form</h1>
          <DiscoveryForm />
        </main>
        <Footer />
      </div>
    </div>
  );
}