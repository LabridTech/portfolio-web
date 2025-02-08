"use client"
import Image from "next/image"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import customsaas from "@/public/customsaas.png"
import landingpage from "@/public/landingpage.png"
import dashboard from "@/public/dashbord.png"
import enterprise from "@/public/enterprise.png"
import { useRouter } from "next/navigation"

export default function DashboardPreview() {
  const router = useRouter()
  return (
    <div id="Solution" className="min-h-screen  text-white">


      {/* Hero Section */}
      <section  className="container mx-auto px-4 py-20">
        <div className="max-w-4xl">
          <h1 className="mb-6 text-5xl font-bold leading-tight lg:text-6xl">
            Personalized{" "}
            <span className="relative">
              Strategies
            </span>{" "}
            To Drive Your Business Forward.
          </h1>
          <p className="mb-12 text-lg text-gray-300">From landing page design to enterprise-level web-apps</p>
        </div>

        {/* Services Grid */}
        <div className="mt-20 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {/* Enterprise React Development */}
          <Card className="bg-background flex flex-col sm:flex-row col-span-2 border-0">
            <CardContent className="p-8">
              <h2 className="mb-8 text-3xl font-bold">Enterprise React Development</h2>
              <ul className="mb-8 space-y-4">

                {[
                  "Growth-Oriented Strategies",
                  "Streamlined Website Management",
                  "Effortless Data Migration Support",
                  "Tailored API Integration Solutions",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-300">
                    <ArrowRight className="h-5 w-5 text-emerald-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mb-8 text-gray-400">
                Build your enterprise-level React website with unique interfaces, multilingual support, and custom
                animations
              </p>
              <Button onClick={() => router.push("/contact")} className="bg-gradient-to-b from-purple-100 to-purple-500 backdrop-opacity-10 backdrop-blur-2xl hover:bg-purple-600">
                Book a call
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>

            </CardContent>
            <Image
              src={enterprise}
              alt="Dashboard preview"
              width={400}
              height={200}
              className="rounded-lg"

            />
          </Card>

          {/* Dashboard Preview */}
          <Card className="bg-background border-0">
            <CardContent className="p-8">
              <Image
                src={dashboard}
                alt="Dashboard preview"
                width={600}
                height={400}
                className="rounded-lg"

              />
              <div className="mt-6">
                <h2 className="mb-4 text-3xl font-bold">Custom Dashboard</h2>
                <p className="text-gray-300">
                  A custom-built dashboard management solution tailored to your unique needs, using the latest
                  technologies: React.js, Node.js, and MongoDB.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Dashboard Preview */}
          <Card className="bg-background border-0">
            <CardContent className="p-8">
              <Image
                src={landingpage}
                alt="Dashboard preview"
                width={600}
                height={400}
                className="rounded-lg"

              />
              <div className="mt-6">
                <h2 className="mb-4 text-3xl font-bold">High-Converting Landing Page</h2>
                <p className="text-gray-300">
                Get unique user interfaces, engaging content, mobile-friendly design, a strong branding strategy, and eye-catching animations—all crafted to elevate your digital presence
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-background flex flex-col sm:flex-row col-span-2 border-0">
            <CardContent className="p-8">
              <h2 className="mb-8 text-3xl font-bold">Custom Saas Application</h2>
              <ul className="mb-8 space-y-4">
                {[
                  "Scalable Solutions",
                  "User-Centric Design",
                  "Advanced Security Integration",
                  "Real-Time Analytics",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-300">
                    <ArrowRight className="h-5 w-5 text-emerald-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mb-8 text-gray-400">
                Build your enterprise-level React website with unique interfaces, multilingual support, and custom
                animations
              </p>
              <Button onClick={() => router.push("/contact")} className="bg-gradient-to-b from-purple-100 to-purple-500 backdrop-opacity-10 backdrop-blur-2xl hover:bg-purple-600">
                Book a call
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>

            </CardContent>
            <Image
              src={customsaas}
              alt="Dashboard preview"
              width={400}
              height={200}
              className="rounded-lg"
            />
          </Card>
        </div>
      </section>

      {/* Tech Stack
      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-center gap-6">
          {["React", "Node.js", "TypeScript"].map((tech) => (
            <div
              key={tech}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500"
            >
              {tech[0]}
            </div>
          ))}
        </div>
      </section> */}
    </div>
  )
}

