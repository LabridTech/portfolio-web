import { testmonialinfo } from "@/public/info/testimonial-info"

const testimonials = [
  {
    quote: "StreamLine has revolutionized our team's workflow. It's a game-changer!",
    author: "Jane Doe",
    company: "Tech Innovators Inc.",
  },
  {
    quote: "The best project management tool we've ever used. Highly recommended!",
    author: "John Smith",
    company: "Creative Solutions LLC",
  },
  {
    quote: "StreamLine helped us increase productivity by 40%. It's incredible!",
    author: "Emily Johnson",
    company: "Startup Ventures",
  },
]

export default function Testimonials() {
  return (
    <section id="Testimonials" className="py-20 ">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testmonialinfo.map((testimonial, index) => (
            <div key={index} className="bg-background p-6 rounded-lg">
              <p className="text-lg mb-4">"{testimonial.text}"</p>
              <p className="font-semibold">{testimonial.title}</p>
              <p className="text-sm text-gray-600">{testimonial.second}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

