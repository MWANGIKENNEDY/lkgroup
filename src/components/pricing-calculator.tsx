"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { CheckCircle } from "lucide-react"

export function PricingCalculator() {
  const [hours, setHours] = useState(10)
  const [selectedPlan, setSelectedPlan] = useState("growth")

  const plans = [
    {
      id: "starter",
      name: "Starter",
      price: 500,
      description: "Basic admin & support",
      features: [
        "Email & calendar management",
        "Basic administrative tasks",
        "5 hours of support per month",
        "Monthly reporting",
      ],
    },
    {
      id: "growth",
      name: "Growth",
      price: 1500,
      description: "Full business assistance",
      features: [
        "Everything in Starter",
        "Financial bookkeeping",
        "Social media management",
        "15 hours of support per month",
        "Weekly reporting",
      ],
    },
    {
      id: "vip",
      name: "VIP Custom",
      price: 3500,
      description: "Tailored business management",
      features: [
        "Everything in Growth",
        "Dedicated account manager",
        "Strategic business planning",
        "Unlimited support hours",
        "Daily reporting & check-ins",
      ],
    },
  ]

  return (
    <section id="pricing" className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Pricing & Packages</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Simple, transparent, and flexible pricing to suit your business needs.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-5xl py-12">
          {/* Interactive Pricing Calculator */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle>Custom Quote Calculator</CardTitle>
              <CardDescription>
                Adjust the slider to estimate your monthly cost based on support hours needed.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-medium">Support Hours: {hours} hours/month</span>
                    <span className="text-sm font-medium">Estimated Cost: ${hours * 100}/month</span>
                  </div>
                  <Slider
                    value={[hours]}
                    min={5}
                    max={40}
                    step={1}
                    onValueChange={(value) => setHours(value[0])}
                    className="w-full"
                  />
                  <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                    <span>5 hours</span>
                    <span>40 hours</span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" asChild>
                <Link href="#contact">Get a Custom Quote</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Pricing Tiers */}
          <div className="grid gap-6 md:grid-cols-3">
            {plans.map((plan) => (
              <Card
                key={plan.id}
                className={`relative overflow-hidden transition-all ${selectedPlan === plan.id ? "border-primary shadow-lg" : ""}`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                {plan.id === "growth" && (
                  <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 rotate-45 bg-primary px-6 py-1 text-xs font-medium text-primary-foreground">
                    Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle>${plan.price}/month</CardTitle>
                  <CardDescription className="text-lg font-medium">{plan.name}</CardDescription>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant={selectedPlan === plan.id ? "default" : "outline"} asChild>
                    <Link href="#contact">Get Started</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

