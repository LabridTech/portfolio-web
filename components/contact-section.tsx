import { Mail } from "lucide-react"

export default function ContactSection() {
  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto p-32">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold tracking-tight text-white md:text-6xl">NOT INTO FORMS?</h2>
              <p className="text-4xl font-bold tracking-tight text-emerald-400 md:text-6xl">EMAIL US ANYTIME.</p>
            </div>

            <p className="text-lg text-gray-400">
              Just email us at{" "}
              <a href="mailto:labridtech@gmail.com" className="text-emerald-400 hover:underline">
                labridtech@gmail.com
              </a>{" "}
              with any inquiries, and we'll reply within the next business day.

            </p>

            <div className="inline-block rounded-lg border border-emerald-400/20 px-4 py-2">
              <a href="mailto:labridtech@gmail.com" className="text-emerald-400/60 hover:text-emerald-400">
                labridtech@gmail.com
              </a>

            </div>
          </div>

          {/* Right Column - Icon */}
          <div className="hidden lg:flex lg:justify-center">
            <div className="relative">
              <Mail className="h-64 w-64 text-emerald-400" strokeWidth={1.5} />
              <div className="absolute -left-8 top-1/2 -translate-y-1/2">
                <div className="space-y-2">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="h-1 w-8 rounded-full bg-emerald-400/20" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

