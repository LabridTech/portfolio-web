import BookingPage from "@/components/datetime";
import ContactSection from "@/components/contact-section";
import Faq from "@/components/faq";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ProjectStats from "@/components/projectstats";
import Testimonials from "@/components/testimonials";


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
        <Navbar></Navbar>
      <BookingPage></BookingPage>
      <ContactSection></ContactSection>
      <Faq></Faq>
      <ProjectStats></ProjectStats>
      <Testimonials></Testimonials>
      <Footer></Footer>
      </div>
      

    </div>
  );
}
