import Loader2 from "@/components/loader";
import { lazy, Suspense } from "react";

const Navbar = lazy(() => import("@/components/navbar"));
const Hero = lazy(() => import("@/components/hero"));
const Features = lazy(() => import("@/components/features"));
const CTA = lazy(() => import("@/components/cta"));
const Footer = lazy(() => import("@/components/footer"));
const Testimonials = lazy(() => import("@/components/testimonials"));
const DashboardPreview = lazy(() => import("@/components/dashboardpreview"));
const ChooseSection = lazy(() => import("@/components/choosesection"));
const ProjectStats = lazy(() => import("@/components/projectstats"));
const Faq = lazy(() => import("@/components/faq"));
const Products = lazy(() => import("@/components/allproduct"));
const Logomarquee = lazy(() => import("@/components/logomarquee"));

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background gradients */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-blue-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-purple-500/10 blur-[100px]" />
      </div>

      <div className="relative z-10">
        <Suspense fallback={<Loader2 />}>
          <Navbar />
          <Hero />
          <Logomarquee />
          <Features />
          <ChooseSection />
          <Products/>
          <DashboardPreview />
        <ProjectStats />
          <Testimonials />
          <Faq />
          <CTA />
          <Footer />
        </Suspense>
      </div>
    </div>
  )
}

