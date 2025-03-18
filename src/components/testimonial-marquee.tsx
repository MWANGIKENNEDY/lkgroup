"use client"

import { useEffect, useRef } from "react"
import { Star } from "lucide-react"

export function TestimonialMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!marqueeRef.current || !contentRef.current) return

    const marqueeEl = marqueeRef.current
    const contentEl = contentRef.current

    // Clone the content for seamless scrolling
    marqueeEl.appendChild(contentEl.cloneNode(true))

    // Animation function
    const animate = () => {
      if (marqueeEl.scrollLeft >= contentEl.scrollWidth) {
        marqueeEl.scrollLeft = 0
      } else {
        marqueeEl.scrollLeft += 1
      }
      requestAnimationFrame(animate)
    }

    const animationId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationId)
  }, [])

  const testimonials = [
    {
      text: "L&K transformed our operations!",
      author: "John Doe",
      position: "CEO, XYZ Ltd",
      rating: 5,
    },
    {
      text: "Efficient, professional, and worth every penny.",
      author: "Jane Smith",
      position: "Startup Founder",
      rating: 5,
    },
    {
      text: "Their team helped us scale faster than we thought possible.",
      author: "Michael Johnson",
      position: "COO, Tech Innovations",
      rating: 5,
    },
    {
      text: "The best business decision we've made this year.",
      author: "Sarah Williams",
      position: "Director, Growth Co.",
      rating: 5,
    },
    {
      text: "Exceptional service that exceeded our expectations.",
      author: "Robert Chen",
      position: "Founder, Nexus Solutions",
      rating: 5,
    },
  ]

  return (
    <section className="py-8 bg-muted/30 overflow-hidden container mx-auto">
      <div className="container px-4 md:px-6 mb-4">
        <h3 className="text-center text-lg font-medium text-muted-foreground">Trusted by businesses worldwide</h3>
      </div>

      <div ref={marqueeRef} className="flex overflow-x-hidden whitespace-nowrap">
        <div ref={contentRef} className="flex gap-8 py-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="inline-flex flex-none bg-background rounded-lg shadow-sm p-6 min-w-[300px] max-w-[400px]"
            >
              <div className="flex flex-col gap-2">
                <div className="flex text-amber-400 mb-2">
                  {Array(testimonial.rating)
                    .fill(0)
                    .map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                </div>
                <p className="text-base font-medium">{"{testimonial.text}"} </p>
                <div className="mt-2">
                  <p className="text-sm font-semibold">{testimonial.author}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

