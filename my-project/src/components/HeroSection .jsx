import { Button } from "@/components/ui/button";
import { Calendar, Star, Shield } from "lucide-react";
import heroImage from "@/assets/dental-hero.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-[#f9fbfc]"
    >
      <div className="container mx-auto px-6 md:px-20 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Your Smile is Our
                <span className="text-blue-600 block"> Priority</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-500 max-w-xl">
                Experience exceptional dental care in a comfortable, modern
                environment. We're committed to helping you achieve optimal oral
                health and a beautiful smile.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-blue-500 to-blue-800 text-white px-6 py-3 rounded-md text-base font-semibold shadow-md flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Book Your Appointment Today
              </Button>
              <Button
                variant="outline"
                className="px-6 py-3 text-base font-semibold"
              >
                Learn More About Our Services
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-8 pt-8 border-t border-gray-200">
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-gray-500">
                  500+ Happy Patients
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-500" />
                <span className="text-sm text-gray-500">
                  Licensed & Insured
                </span>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={heroImage}
                alt="Modern dental clinic"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent" />
            </div>

            {/* Floating Cards */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Easy Scheduling</p>
                  <p className="text-sm text-gray-500">Book online 24/7</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Safe & Clean</p>
                  <p className="text-sm text-gray-500">
                    Advanced sterilization
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
