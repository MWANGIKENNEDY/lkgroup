import Link from "next/link"
import { BarChart3, Users, Shield } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { HeroSection } from "@/components/hero-section"
import { TestimonialMarquee } from "@/components/testimonial-marquee"
import { ServicesPreview } from "@/components/services-preview"
import { WhyChooseUs } from "@/components/why-choose-us"
import { ServiceDetails } from "@/components/service-details"
import { PricingCalculator } from "@/components/pricing-calculator"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import { NavigationMenu } from "@/components/navigation-menu"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <NavigationMenu />
      <main className="flex-1 ">
        <HeroSection />
        <TestimonialMarquee />
        <ServicesPreview />
        <WhyChooseUs />
        <ServiceDetails />
        <PricingCalculator />

        {/* Additional Features Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline" className="px-3 py-1">
                  Enhanced Experience
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Additional Features</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We go above and beyond to provide an exceptional experience for our clients.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Live Chat Support",
                  description: "Get immediate assistance through our AI or real-time agent chat.",
                  icon: <Users className="h-6 w-6" />,
                },
                {
                  title: "Multilingual Support",
                  description: "Expand your reach with our language selection options.",
                  icon: <Globe className="h-6 w-6" />,
                },
                {
                  title: "Client Dashboard",
                  description: "Access invoices, updates, and reports through our secure portal.",
                  icon: <BarChart3 className="h-6 w-6" />,
                },
                {
                  title: "Dark Mode Toggle",
                  description: "Switch themes for a modern experience tailored to your preference.",
                  icon: <Moon className="h-6 w-6" />,
                },
                {
                  title: "SEO Optimization",
                  description: "High search ranking with optimized content and structure.",
                  icon: <Search className="h-6 w-6" />,
                },
                {
                  title: "Accessibility Features",
                  description: "WCAG compliance ensures usability for all visitors.",
                  icon: <Shield className="h-6 w-6" />,
                },
              ].map((feature, index) => (
                <Card key={index} className="group relative overflow-hidden transition-all hover:shadow-lg">
                  <CardHeader className="p-6">
                    <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to reclaim your time and amplify your growth?
                </h2>
                <p className="text-primary-foreground/80 md:text-xl">
                  Let us handle your executive, financial, and marketing needs so you can focus on what matters most.
                </p>
              </div>
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 justify-end">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="#contact">{"Let's Work Together"}</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                  asChild
                >
                  <Link href="#services">Explore Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-2xl space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
              <p className="text-muted-foreground md:text-xl">
                Have questions or ready to get started? Reach out to us today.
              </p>
            </div>
            <div className="mx-auto mt-8 max-w-md">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

function Globe(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}

function Moon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  )
}

function Search(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}

