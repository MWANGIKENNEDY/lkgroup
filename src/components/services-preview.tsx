"use client"

import { useState } from "react"
import Link from "next/link"
import { Calendar, DollarSign, BarChart3, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function ServicesPreview() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const services = [
    {
      title: "Executive Assistance",
      description: "Let us handle your calendar, emails, and administrative tasks so you can focus on what matters.",
      icon: <Calendar className="h-10 w-10" />,
      link: "#executive-assistance",
    },
    {
      title: "Financial Consulting",
      description: "Expert financial guidance to optimize your cash flow, budgeting, and tax planning.",
      icon: <DollarSign className="h-10 w-10" />,
      link: "#financial-consulting",
    },
    {
      title: "Digital Marketing",
      description: "Boost your online presence with our comprehensive digital marketing strategies.",
      icon: <BarChart3 className="h-10 w-10" />,
      link: "#digital-marketing",
    },
  ]

  return (
    <section id="services" className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Comprehensive business support tailored to your specific needs.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={index}
              className={cn(
                "group relative overflow-hidden transition-all duration-300 hover:shadow-lg",
                hoveredCard === index ? "shadow-lg" : "",
              )}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className={cn(
                  "absolute inset-0 bg-primary/5 transform transition-transform duration-500",
                  hoveredCard === index ? "scale-100" : "scale-0",
                )}
              />

              <CardHeader className="p-6">
                <div
                  className={cn(
                    "mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-300",
                    hoveredCard === index ? "bg-primary text-primary-foreground" : "",
                  )}
                >
                  {service.icon}
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button variant="ghost" className="p-0 h-auto" asChild>
                  <Link href={service.link} className="group inline-flex items-center">
                    See More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

