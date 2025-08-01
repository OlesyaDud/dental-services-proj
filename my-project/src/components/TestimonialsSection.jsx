import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Downtown Patient",
    rating: 5,
    text: "The best dental experience I've ever had! The staff is incredibly professional and caring. Dr. Smith made me feel at ease during my procedure, and the results exceeded my expectations.",
    treatment: "Cosmetic Dentistry",
  },
  {
    name: "Michael Chen",
    location: "Westside Patient",
    rating: 5,
    text: "I was terrified of dentists until I found DentalCare. Their gentle approach and modern techniques made my root canal completely painless. I actually look forward to my appointments now!",
    treatment: "Root Canal Therapy",
  },
  {
    name: "Emily Rodriguez",
    location: "Northside Patient",
    rating: 5,
    text: "My whole family goes to DentalCare. From my 5-year-old's first cleaning to my husband's dental implants, they handle everything with such care and expertise. Highly recommended!",
    treatment: "Family Dentistry",
  },
  {
    name: "David Wilson",
    location: "Eastside Patient",
    rating: 5,
    text: "The orthodontic treatment transformed my confidence completely. The clear aligners were comfortable and the results speak for themselves. Thank you for giving me the smile I always wanted!",
    treatment: "Orthodontics",
  },
  {
    name: "Lisa Thompson",
    location: "Central Patient",
    rating: 5,
    text: "Emergency dental care at its finest. When I chipped my tooth on a weekend, they saw me immediately and fixed it perfectly. Their commitment to patient care is outstanding.",
    treatment: "Emergency Care",
  },
  {
    name: "Robert Martinez",
    location: "Southside Patient",
    rating: 5,
    text: "Professional, clean, and modern facility with the latest technology. The team explained every step of my treatment plan and made sure I was comfortable throughout the entire process.",
    treatment: "Preventive Care",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-20">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Patients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our patients have to
            say about their experience with our dental care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group hover:shadow-medical transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-0 relative overflow-hidden"
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-primary/20" />
                </div>

                <p className="text-muted-foreground italic leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div className="pt-4 border-t border-border/50">
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </div>
                  <div className="text-xs text-primary font-medium mt-1">
                    {testimonial.treatment}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Join hundreds of satisfied patients who trust us with their dental
              care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center h-12 px-8 text-white font-semibold rounded-lg bg-gradient-to-r from-blue-600 to-blue-900 hover:from-blue-700 hover:to-blue-950 transition-all shadow-md"
              >
                Book Your Visit Today
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center h-12 px-8 border border-border bg-background text-foreground rounded-lg hover:bg-accent transition-colors font-medium"
              >
                Read More Reviews
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
