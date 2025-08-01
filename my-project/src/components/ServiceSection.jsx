import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Smile,
  Heart,
  Zap,
  Scissors,
  Shield,
  Sparkles,
  Stethoscope,
  RefreshCw,
} from "lucide-react";

const services = [
  {
    icon: Smile,
    title: "General Dentistry",
    description:
      "Comprehensive oral health care including cleanings, fillings, and preventive treatments.",
    features: [
      "Regular Cleanings",
      "Cavity Fillings",
      "Oral Exams",
      "Preventive Care",
    ],
  },
  {
    icon: Sparkles,
    title: "Cosmetic Dentistry",
    description:
      "Transform your smile with our advanced cosmetic dental treatments and procedures.",
    features: ["Teeth Whitening", "Veneers", "Bonding", "Smile Makeovers"],
  },
  {
    icon: RefreshCw,
    title: "Orthodontics",
    description:
      "Straighten your teeth with traditional braces or modern clear aligner treatments.",
    features: [
      "Traditional Braces",
      "Clear Aligners",
      "Retainers",
      "Bite Correction",
    ],
  },
  {
    icon: Heart,
    title: "Periodontal Care",
    description:
      "Specialized treatment for gum disease and maintaining healthy gums.",
    features: [
      "Gum Disease Treatment",
      "Deep Cleaning",
      "Gum Surgery",
      "Maintenance",
    ],
  },
  {
    icon: Zap,
    title: "Emergency Care",
    description:
      "Immediate dental care for urgent situations and dental emergencies.",
    features: [
      "24/7 Availability",
      "Pain Relief",
      "Urgent Repairs",
      "Emergency Surgery",
    ],
  },
  {
    icon: Stethoscope,
    title: "Oral Surgery",
    description:
      "Advanced surgical procedures including extractions and implant placement.",
    features: [
      "Tooth Extractions",
      "Dental Implants",
      "Wisdom Teeth",
      "Bone Grafting",
    ],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6 md:px-20">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Dental Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide comprehensive dental care using the latest technology and
            techniques to ensure you receive the best possible treatment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden rounded-2xl border-0 bg-gradient-card transition-all duration-300 hover:-translate-y-2 hover:shadow-xl before:absolute before:inset-0 before:rounded-2xl before:border before:border-transparent before:group-hover:border-blue-400 before:pointer-events-none"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <service.icon className="h-8 w-8 text-blue-600 group-hover:text-blue-700 transition-colors" />
                </div>
                <CardTitle className="text-xl font-semibold text-card-foreground">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Don't see what you're looking for? We offer many more specialized
            treatments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center h-12 px-8 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Schedule Consultation
            </a>
            <a
              href="tel:555-123-4567"
              className="inline-flex items-center justify-center h-12 px-8 border border-border bg-background text-foreground rounded-lg hover:bg-accent transition-colors font-medium"
            >
              Call Us Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
