"use client"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"

export default function Hero() {
  const router = useRouter()
  return (
    <section className="container flex min-h-[calc(100vh-3.5rem)] max-w-screen-2xl flex-col items-center justify-center space-y-8 py-24 text-center md:py-32">
      <div className="space-y-4">
        <h1 className="animate-slidein500  bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
          Innovate Faster with
          <br />
          Labridtech
        </h1>
        <p className="animate-slidein300 mx-auto max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Empowering businesses with cutting-edge software solutions. From AI-driven analytics to seamless cloud
          integrations, we're shaping the future of technology.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button onClick={() => router.push("/contact")} className="bg-gradient-to-b from-purple-100 to-purple-500"  size="lg">
          Explore Solutions
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <Button onClick={() => router.push("/contact")} variant="outline" size="lg">
          Schedule a Demo
        </Button>
      </div>
    </section>
  )
}

