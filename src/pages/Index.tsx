import { Link } from "react-router-dom";
import { ArrowRight, Users, Award, Globe, TrendingUp, Zap, Shield, Target, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import heroMining from "@/assets/hero-mining.jpg";
import floatingElement1 from "@/assets/floating-element-1.png";
import floatingElement2 from "@/assets/floating-element-2.png";
import miningAction from "@/assets/mining-action-1.jpg";
import labProcessing from "@/assets/lab-processing.jpg";
import teamConsulting from "@/assets/team-consulting.jpg";
import processingPlant from "@/assets/processing-plant.jpg";

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

        {/* Enhanced Floating Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <img 
            src={floatingElement1} 
            alt="" 
            className="absolute top-20 left-10 w-16 h-16 opacity-30 float-animation hover-scale"
          />
          <img 
            src={floatingElement2} 
            alt="" 
            className="absolute top-40 right-20 w-20 h-20 opacity-20 float-animation float-delay-1 animate-rotate-slow"
          />
          <img 
            src={floatingElement1} 
            alt="" 
            className="absolute bottom-40 left-1/4 w-12 h-12 opacity-25 float-animation float-delay-2"
          />
          <img 
            src={floatingElement2} 
            alt="" 
            className="absolute bottom-20 right-1/3 w-24 h-24 opacity-15 float-animation animate-pulse-glow"
          />
          <div className="absolute top-1/2 left-5 w-8 h-8 bg-primary/20 rounded-full float-animation opacity-60"></div>
          <div className="absolute top-1/3 right-10 w-6 h-6 bg-primary/30 rounded-full float-animation float-delay-1 opacity-40"></div>
          <div className="absolute bottom-1/3 left-1/3 w-10 h-10 bg-primary/10 rounded-full float-animation float-delay-2 opacity-50"></div>
        </div>

        {/* Enhanced Content with Animations */}
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif animate-slide-up">
            Your Trusted Partner in{" "}
            <span className="text-primary animate-pulse-glow">Gold Mining Excellence</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90 animate-slide-up" style={{animationDelay: '0.3s'}}>
            Delivering world-class consultancy, elution, chemicals, and equipment solutions 
            with over 15 years of industry expertise.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{animationDelay: '0.6s'}}>
            <Button className="btn-hero text-lg px-8 py-4 hover-scale" asChild>
              <Link to="/services" className="flex items-center space-x-2">
                <span>Explore Services</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              className="btn-outline-gold text-lg px-8 py-4 bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-secondary hover-scale"
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

      {/* Enhanced Stats Section with Background */}
      <section className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 parallax-bg opacity-10"
          style={{ backgroundImage: `url(${miningAction})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-accent to-background/95"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card 
                key={index} 
                className="card-gold text-center border-none hover-scale animate-slide-up" 
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <CardContent className="p-6">
                  <stat.icon className="h-12 w-12 text-primary mx-auto mb-4 animate-pulse-glow" />
                  <div className="text-3xl font-bold text-secondary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Services Preview with Images */}
      <section className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 parallax-bg opacity-5"
          style={{ backgroundImage: `url(${processingPlant})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-slide-up">
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
                href: "/services/consultancy",
                icon: Target,
                bgImage: teamConsulting
              },
              {
                title: "Gold Elution",
                description: "Advanced elution processes for maximum gold recovery efficiency.",
                href: "/services/elution",
                icon: Zap,
                bgImage: labProcessing
              },
              {
                title: "Mining Chemicals",
                description: "High-quality chemicals optimized for gold mining operations.",
                href: "/services/chemicals",
                icon: Shield,
                bgImage: labProcessing
              },
              {
                title: "Mining Equipment",
                description: "State-of-the-art equipment for professional mining operations.",
                href: "/services/equipment",
                icon: Star,
                bgImage: miningAction
              }
            ].map((service, index) => (
              <Link key={index} to={service.href} className="block animate-slide-up" style={{animationDelay: `${index * 0.2}s`}}>
                <Card className="card-corporate group cursor-pointer relative overflow-hidden h-80">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${service.bgImage})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/70 to-transparent"></div>
                  <CardContent className="p-6 text-center relative z-10 h-full flex flex-col justify-between">
                    <div>
                      <div className="w-16 h-16 bg-primary/20 backdrop-blur-sm rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors duration-300">
                        <service.icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3 font-serif">
                        {service.title}
                      </h3>
                      <p className="text-white/80 mb-4 text-sm">
                        {service.description}
                      </p>
                      <div className="flex items-center justify-center text-primary group-hover:text-primary-light transition-colors duration-300">
                        <span className="text-sm font-medium">Learn More</span>
                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12 animate-slide-up" style={{animationDelay: '0.8s'}}>
            <Button className="btn-hero hover-scale" asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section with Background */}
      <section className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 parallax-bg"
          style={{ backgroundImage: `url(${teamConsulting})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/90 to-secondary/95"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6 font-serif text-secondary-foreground animate-slide-up">
            Ready to Elevate Your Mining Operations?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto text-secondary-foreground animate-slide-up" style={{animationDelay: '0.3s'}}>
            Partner with Kodiak Solutions Limited and experience the difference that professional expertise makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{animationDelay: '0.6s'}}>
            <Button className="btn-hero hover-scale" asChild>
              <Link to="/contact">Get Started Today</Link>
            </Button>
            <Button 
              variant="outline" 
              className="btn-outline-gold bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-secondary hover-scale"
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
