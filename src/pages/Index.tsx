import { Link } from "react-router-dom";
import { ArrowRight, Users, Award, Globe, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import heroMining from "@/assets/hero-mining.jpg";
import floatingElement1 from "@/assets/floating-element-1.png";
import floatingElement2 from "@/assets/floating-element-2.png";

const Index = () => {
  const stats = [
    { icon: TrendingUp, label: "Years in Service", value: "15+" },
    { icon: Award, label: "Projects Completed", value: "200+" },
    { icon: Users, label: "Clients Served", value: "50+" },
    { icon: Globe, label: "Countries Reached", value: "12+" },
  ];

  return (
    <Layout>
      <SEO 
        title="Your Trusted Partner in Gold Mining Excellence"
        description="Kodiak Solutions Limited delivers world-class gold mining consultancy, elution, chemicals, and equipment solutions. 15+ years of excellence in the mining industry."
        keywords="gold mining consultancy, mining solutions, elution services, mining equipment, mining chemicals, professional mining services"
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroMining})` }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 hero-overlay" />

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <img 
            src={floatingElement1} 
            alt="" 
            className="absolute top-20 left-10 w-16 h-16 opacity-30 float-animation"
          />
          <img 
            src={floatingElement2} 
            alt="" 
            className="absolute top-40 right-20 w-20 h-20 opacity-20 float-animation float-delay-1"
          />
          <img 
            src={floatingElement1} 
            alt="" 
            className="absolute bottom-40 left-1/4 w-12 h-12 opacity-25 float-animation float-delay-2"
          />
          <img 
            src={floatingElement2} 
            alt="" 
            className="absolute bottom-20 right-1/3 w-24 h-24 opacity-15 float-animation"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif">
            Your Trusted Partner in{" "}
            <span className="text-primary">Gold Mining Excellence</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Delivering world-class consultancy, elution, chemicals, and equipment solutions 
            with over 15 years of industry expertise.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="btn-hero text-lg px-8 py-4" asChild>
              <Link to="/services" className="flex items-center space-x-2">
                <span>Explore Services</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              className="btn-outline-gold text-lg px-8 py-4 bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-secondary"
              asChild
            >
              <Link to="/contact">
                Get Quote
              </Link>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="card-gold text-center border-none">
                <CardContent className="p-6">
                  <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-secondary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4 font-serif">
              Our Core Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive mining solutions tailored to your specific needs and requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Gold Mining Consultancy",
                description: "Expert guidance and strategic planning for your mining operations.",
                href: "/services/consultancy"
              },
              {
                title: "Gold Elution",
                description: "Advanced elution processes for maximum gold recovery efficiency.",
                href: "/services/elution"
              },
              {
                title: "Mining Chemicals",
                description: "High-quality chemicals optimized for gold mining operations.",
                href: "/services/chemicals"
              },
              {
                title: "Mining Equipment",
                description: "State-of-the-art equipment for professional mining operations.",
                href: "/services/equipment"
              }
            ].map((service, index) => (
              <Link key={index} to={service.href} className="block">
                <Card className="card-corporate group cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                      <div className="w-8 h-8 bg-primary rounded"></div>
                    </div>
                    <h3 className="text-xl font-semibold text-secondary mb-3 font-serif">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center justify-center text-primary group-hover:text-primary-dark transition-colors duration-300">
                      <span className="text-sm font-medium">Learn More</span>
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="btn-hero" asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 font-serif">
            Ready to Elevate Your Mining Operations?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Partner with Kodiak Solutions Limited and experience the difference that professional expertise makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-hero" asChild>
              <Link to="/contact">Get Started Today</Link>
            </Button>
            <Button 
              variant="outline" 
              className="btn-outline-gold bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-secondary"
              asChild
            >
              <a 
                href="https://wa.me/0710337605" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Chat on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
