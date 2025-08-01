import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Users, Clock, MapPin } from "lucide-react";
import teamImage from "@/assets/dental-team.jpg";

const stats = [
  { icon: Users, number: "500+", label: "Happy Patients" },
  { icon: Award, number: "15+", label: "Years Experience" },
  { icon: Clock, number: "24/7", label: "Emergency Care" },
  { icon: MapPin, number: "3", label: "Locations" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                About DentalCare
              </h2>
              <p className="text-lg text-muted-foreground">
                For over 15 years, we've been dedicated to providing exceptional
                dental care to our community. Our team of experienced
                professionals combines advanced technology with compassionate
                care to ensure every patient feels comfortable and confident in
                their treatment.
              </p>
            </div>

            <div className="space-y-6">
              {/* Mission */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">
                  Our Mission
                </h3>
                <p className="text-muted-foreground">
                  To provide comprehensive, high-quality dental care in a warm,
                  welcoming environment while building lasting relationships
                  with our patients and helping them achieve optimal oral
                  health.
                </p>
              </div>

              {/* Why Choose Us */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">
                  Why Choose Us
                </h3>
                <ul className="space-y-2">
                  {[
                    "State-of-the-art equipment and technology",
                    "Experienced and compassionate dental team",
                    "Comprehensive treatment planning",
                    "Comfortable, modern facilities",
                    "Flexible scheduling and payment options",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-muted-foreground"
                    >
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <button className="inline-flex items-center justify-center h-12 px-8 text-white font-semibold rounded-lg bg-gradient-to-r from-blue-600 to-blue-900 hover:from-blue-700 hover:to-blue-950 transition-all shadow-md">
              Meet Our Team
            </button>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Image */}
            <div className="relative">
              <img
                src={teamImage}
                alt="Our dental team"
                className="w-full h-96 object-cover rounded-2xl shadow-medical"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="bg-gradient-card border-0 text-center p-6"
                >
                  <CardContent className="space-y-2 p-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto">
                      <stat.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="text-2xl font-bold text-foreground">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
