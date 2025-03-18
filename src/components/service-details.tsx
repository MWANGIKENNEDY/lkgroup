"use client";

import { useState } from "react";
import Link from "next/link";
import { Calendar, DollarSign, BarChart3, CheckCircle } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function ServiceDetails() {
  const [activeTab, setActiveTab] = useState("executive");

  const services = {
    executive: {
      title: "Executive Assistance",
      description:
        "Professional administrative support to help you manage your business efficiently.",
      features: [
        "Calendar & email management",
        "Research & workflow automation",
        "Project coordination & high-level admin",
        "Meeting preparation and follow-up",
        "Travel arrangements and logistics",
      ],
      cta: {
        text: "Hire an Assistant",
        link: "#contact",
      },
      icon: <Calendar className="h-8 w-8" />,
    },
    financial: {
      title: "Financial Consulting",
      description:
        "Expert financial guidance to optimize your business finances and growth.",
      features: [
        "Budgeting, bookkeeping & forecasting",
        "Cash flow & tax planning",
        "Business risk management",
        "Financial analysis and reporting",
        "Investment strategy and planning",
      ],
      cta: {
        text: "Talk to a Financial Expert",
        link: "#contact",
      },
      icon: <DollarSign className="h-8 w-8" />,
    },
    marketing: {
      title: "Digital Marketing",
      description:
        "Comprehensive marketing strategies to boost your online presence and growth.",
      features: [
        "Social media growth & paid ads",
        "SEO, content & branding strategies",
        "Online reputation & PR",
        "Email marketing campaigns",
        "Analytics and performance tracking",
      ],
      cta: {
        text: "Boost My Online Presence",
        link: "#contact",
      },
      icon: <BarChart3 className="h-8 w-8" />,
    },
  };

  return (
    <section id="service-details" className="py-16 ">
      <div className="px-4 md:px-6 container mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Services
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore our comprehensive range of business services designed to
              help you grow.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-4xl py-12">
          <Tabs
            defaultValue="executive"
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="executive">Executive</TabsTrigger>
              <TabsTrigger value="financial">Financial</TabsTrigger>
              <TabsTrigger value="marketing">Marketing</TabsTrigger>
            </TabsList>

            {Object.entries(services).map(([key, service]) => (
              <TabsContent key={key} value={key} className="mt-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                  <div className="space-y-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="mt-4" asChild>
                      <Link href={service.cta.link}>{service.cta.text}</Link>
                    </Button>
                  </div>
                  <div className="rounded-lg border bg-card p-8 shadow-sm">
                    <div className="aspect-video w-full overflow-hidden rounded-lg bg-muted">
                      <Image
                        src={`/placeholder.svg?height=400&width=600&text=${service.title}`}
                        alt={service.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
