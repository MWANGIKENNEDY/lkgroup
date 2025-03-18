"use client"

import { useState } from "react"
import { PenToolIcon as Tool, DollarSign, Users, BarChart3 } from "lucide-react"
import { cn } from "@/lib/utils"

export function WhyChooseUs() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  const reasons = [
    {
      title: "All-in-One Business Support",
      description: "No need to hire multiple teams, we handle it all!",
      icon: <Tool className="h-8 w-8" />,
    },
    {
      title: "Cost-Effective",
      description: "Flexible pricing that grows with your business.",
      icon: <DollarSign className="h-8 w-8" />,
    },
    {
      title: "Expert-Led Services",
      description: "Specialists in finance, admin, and marketing.",
      icon: <Users className="h-8 w-8" />,
    },
    {
      title: "Data-Driven Approach",
      description: "We use real metrics to drive success.",
      icon: <BarChart3 className="h-8 w-8" />,
    },
  ]

  return (
    <section id="why-lk" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why L&K?</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              What makes us different from other business service providers.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 py-12 sm:grid-cols-2 md:gap-12">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex items-start gap-4 transition-all duration-200"
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div
                className={cn(
                  "flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-300",
                  hoveredItem === index ? "bg-primary text-primary-foreground" : "",
                )}
              >
                {reason.icon}
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold">{reason.title}</h3>
                <p className="text-muted-foreground">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

