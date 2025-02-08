"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function CTA() {
  const router = useRouter()
  return (
    <section className="border-t">
      <div className="container flex flex-col items-center gap-4 py-24 text-center md:py-32">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
          Ready to revolutionize your business?
        </h2>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Join leading companies who trust Amane Soft to drive their digital transformation and stay ahead in the
          rapidly evolving tech landscape.
        </p>
        <Button onClick={() => router.push("/contact")} size="lg" className="mt-4 !bg-gradient-to-b from-white to-gray-600">
          Get Started Today
        </Button>
      </div>
    </section>
  )
}

