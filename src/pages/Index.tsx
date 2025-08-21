import { Link } from "react-router-dom";
import { ArrowRight, Users, Award, Globe, TrendingUp, Zap, Shield, Target, Star, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import africanMiningHero from "@/assets/african-mining-hero.jpg";
import floatingElement1 from "@/assets/floating-element-1.png";
import floatingElement2 from "@/assets/floating-element-2.png";
import africanMiningEquipment from "@/assets/african-mining-equipment.jpg";
import africanLabProcessing from "@/assets/african-lab-processing.jpg";
import africanTeamConsulting from "@/assets/african-team-consulting.jpg";
import africanProcessingPlant from "@/assets/african-processing-plant.jpg";

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

      {/* Hero Section with Advanced Animations */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden will-change-transform">
        {/* Background Image with Parallax */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
          style={{ backgroundImage: `url(${africanMiningHero})` }}
        />
        
        {/* Animated Overlay */}
        <div className="absolute inset-0 hero-overlay animate-fade-in" />

        {/* Professional Floating Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Large floating elements */}
          <img 
            src={floatingElement1} 
            alt="" 
            className="absolute top-20 left-10 w-16 h-16 opacity-30 animate-parallax-float hover-glow will-change-transform"
          />
          <img 
            src={floatingElement2} 
            alt="" 
            className="absolute top-40 right-20 w-20 h-20 opacity-20 animate-parallax-float animate-rotate-slow will-change-transform"
            style={{animationDelay: '-2s'}}
          />
          <img 
            src={floatingElement1} 
            alt="" 
            className="absolute bottom-40 left-1/4 w-12 h-12 opacity-25 animate-parallax-float will-change-transform"
            style={{animationDelay: '-4s'}}
          />
          <img 
            src={floatingElement2} 
            alt="" 
            className="absolute bottom-20 right-1/3 w-24 h-24 opacity-15 animate-parallax-float animate-pulse-glow will-change-transform"
            style={{animationDelay: '-1s'}}
          />
          
          {/* Morphing geometric shapes */}
          <div className="absolute top-1/2 left-5 w-8 h-8 bg-primary/20 animate-morph-float opacity-60 will-change-transform"></div>
          <div className="absolute top-1/3 right-10 w-6 h-6 bg-primary/30 animate-morph-float opacity-40 will-change-transform" style={{animationDelay: '-2s'}}></div>
          <div className="absolute bottom-1/3 left-1/3 w-10 h-10 bg-primary/10 animate-morph-float opacity-50 will-change-transform" style={{animationDelay: '-4s'}}></div>
          
          {/* Additional sparkle elements */}
          <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-primary/40 rounded-full animate-gold-sparkle will-change-transform"></div>
          <div className="absolute bottom-1/4 left-1/5 w-3 h-3 bg-primary/50 rounded-full animate-gold-sparkle will-change-transform" style={{animationDelay: '-1s'}}></div>
        </div>

        {/* Enhanced Content with Staggered Animations */}
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="animate-fade-in stagger-1">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif animate-slide-up will-change-transform">
              Your Trusted Partner in{" "}
              <span className="gold-text animate-gold-glow animate-text-reveal">Gold Mining Excellence</span>
            </h1>
          </div>
          <div className="animate-fade-in stagger-2">
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90 animate-slide-up will-change-opacity">
              Delivering world-class consultancy, elution, chemicals, and equipment solutions 
              with over 15 years of industry expertise.
            </p>
          </div>
          
          <div className="animate-fade-in stagger-3">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in will-change-transform">
              <Button className="btn-hero text-lg px-8 py-4 hover-lift hover-magnetic gold-hover-effect will-change-transform" asChild>
                <Link to="/services" className="flex items-center space-x-2">
                  <span>Explore Services</span>
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                className="btn-outline-gold text-lg px-8 py-4 bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-secondary hover-lift hover-glow will-change-transform"
                asChild
              >
                <Link to="/contact">
                  Get Quote
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce-in stagger-4">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center hover-glow cursor-pointer">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
          <p className="text-sm mt-2 opacity-75">Scroll to explore</p>
        </div>
      </section>

      {/* Professional Stats Section with Advanced Animations */}
      <section className="py-20 relative overflow-hidden will-change-transform">
        <div 
          className="absolute inset-0 parallax-bg opacity-10 will-change-transform"
          style={{ backgroundImage: `url(${africanMiningEquipment})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-accent to-background/95 animate-fade-in"></div>
        
        {/* Section Title */}
        <div className="container mx-auto px-4 relative z-10 mb-12">
          <div className="text-center animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4 font-serif gold-text animate-gold-glow">
              Proven Excellence
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Numbers that speak to our commitment and expertise
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card 
                key={index} 
                className="card-gold text-center border-none hover-lift hover-glow animate-bounce-in gold-hover-effect will-change-transform" 
                style={{animationDelay: `${index * 0.15}s`}}
              >
                <CardContent className="p-8 relative">
                  <div className="animate-zoom-in stagger-2">
                    <stat.icon className="h-16 w-16 text-primary mx-auto mb-6 animate-gold-pulse hover-magnetic" />
                  </div>
                  <div className="animate-number-counter stagger-3" style={{animationDelay: `${0.5 + index * 0.1}s`}}>
                    <div className="text-4xl md:text-5xl font-bold text-secondary mb-2 gold-text">{stat.value}</div>
                  </div>
                  <div className="animate-fade-in stagger-4" style={{animationDelay: `${0.8 + index * 0.1}s`}}>
                    <div className="text-muted-foreground font-medium text-lg">{stat.label}</div>
                  </div>
                  
                  {/* Enhanced gold particles */}
                  <div className="gold-particle" style={{top: '15px', left: '25px'}}></div>
                  <div className="gold-particle" style={{top: '35px', right: '20px'}}></div>
                  <div className="gold-particle" style={{bottom: '25px', left: '35px'}}></div>
                  <div className="gold-particle" style={{bottom: '15px', right: '30px'}}></div>
                  
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Services Preview with Advanced Interactions */}
      <section className="py-20 relative overflow-hidden will-change-transform">
        <div 
          className="absolute inset-0 parallax-bg opacity-5 will-change-transform"
          style={{ backgroundImage: `url(${africanProcessingPlant})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background animate-fade-in"></div>
        
        {/* Floating decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 bg-primary/5 rounded-full animate-morph-float"></div>
          <div className="absolute bottom-20 right-10 w-16 h-16 bg-primary/10 rounded-full animate-morph-float" style={{animationDelay: '-3s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20 animate-slide-up">
            <h2 className="text-4xl md:text-6xl font-bold text-secondary mb-6 font-serif gold-text animate-gold-glow">
              Our Core Services
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive mining solutions tailored to your specific needs and requirements, 
              backed by decades of industry expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Gold Mining Consultancy",
                description: "Expert guidance and strategic planning for your mining operations with proven methodologies.",
                href: "/services/consultancy",
                icon: Target,
                bgImage: africanTeamConsulting
              },
              {
                title: "Gold Elution",
                description: "Advanced elution processes for maximum gold recovery efficiency using cutting-edge technology.",
                href: "/services/elution",
                icon: Zap,
                bgImage: africanLabProcessing
              },
              {
                title: "Mining Chemicals",
                description: "High-quality chemicals optimized for gold mining operations with environmental compliance.",
                href: "/services/chemicals",
                icon: Shield,
                bgImage: africanLabProcessing
              },
              {
                title: "Mining Equipment",
                description: "State-of-the-art equipment for professional mining operations with full support services.",
                href: "/services/equipment",
                icon: Star,
                bgImage: africanMiningEquipment
              }
            ].map((service, index) => (
              <div key={index} className="animate-bounce-in will-change-transform" style={{animationDelay: `${index * 0.2}s`}}>
                <Link to={service.href} className="block group">
                  <Card className="card-corporate cursor-pointer relative overflow-hidden h-96 hover-lift gold-hover-effect will-change-transform border-2 border-transparent hover:border-primary/20">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-110 will-change-transform"
                      style={{ backgroundImage: `url(${service.bgImage})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/80 to-transparent group-hover:from-secondary/95"></div>
                    
                    {/* Interactive overlay */}
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-300"></div>
                    
                    <CardContent className="p-8 text-center relative z-10 h-full flex flex-col justify-between">
                      <div className="animate-zoom-in stagger-2">
                        <div className="w-20 h-20 bg-primary/20 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/40 transition-all duration-500 hover-magnetic animate-gold-pulse">
                          <service.icon className="w-10 h-10 text-primary animate-gold-sparkle group-hover:scale-110 transition-transform duration-300" />
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-4 font-serif gold-text group-hover:animate-gold-glow">
                          {service.title}
                        </h3>
                        <p className="text-white/90 mb-6 text-sm md:text-base leading-relaxed">
                          {service.description}
                        </p>
                        <div className="flex items-center justify-center text-primary group-hover:text-primary-light transition-all duration-300">
                          <span className="text-base font-semibold">Explore Service</span>
                          <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                        </div>
                      </div>
                      
                      {/* Corner decorations */}
                      <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary/30 group-hover:border-primary transition-colors duration-300"></div>
                      <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-primary/30 group-hover:border-primary transition-colors duration-300"></div>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 animate-scale-in stagger-6">
            <Button className="btn-hero text-lg px-10 py-5 hover-lift hover-magnetic gold-hover-effect will-change-transform" asChild>
              <Link to="/services" className="flex items-center space-x-2">
                <span>View All Services</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Professional CTA Section with Advanced Visual Effects */}
      <section className="py-20 relative overflow-hidden will-change-transform">
        <div 
          className="absolute inset-0 parallax-bg will-change-transform"
          style={{ backgroundImage: `url(${africanTeamConsulting})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/90 to-secondary/95 animate-fade-in"></div>
        
        {/* Animated geometric shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-24 h-24 border-2 border-primary/20 rounded-full animate-rotate-slow"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 bg-primary/10 rounded-lg animate-morph-float"></div>
          <div className="absolute top-1/2 left-5 w-12 h-12 border border-primary/30 rotate-45 animate-parallax-float"></div>
          <div className="absolute top-1/3 right-5 w-8 h-8 bg-primary/20 rounded-full animate-gold-sparkle"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 font-serif text-secondary-foreground gold-text animate-gold-glow">
              Ready to Elevate Your Mining Operations?
            </h2>
          </div>
          <div className="animate-slide-up stagger-2">
            <p className="text-xl md:text-2xl mb-12 opacity-95 max-w-4xl mx-auto text-secondary-foreground leading-relaxed">
              Partner with Kodiak Solutions Limited and experience the difference that professional 
              expertise, cutting-edge technology, and unwavering commitment to excellence makes in 
              your mining operations.
            </p>
          </div>
          
          <div className="animate-bounce-in stagger-3">
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button className="btn-hero text-lg px-10 py-5 hover-lift hover-magnetic gold-hover-effect will-change-transform group" asChild>
                <Link to="/contact" className="flex items-center space-x-2">
                  <span>Get Started Today</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                className="btn-outline-gold text-lg px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-secondary hover-lift hover-glow will-change-transform"
                asChild
              >
                <a 
                  href="https://wa.me/0710337605" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <MessageSquare className="h-5 w-5" />
                  <span>Chat on WhatsApp</span>
                </a>
              </Button>
            </div>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-16 animate-fade-in stagger-4">
            <div className="flex flex-wrap justify-center items-center gap-8 text-secondary-foreground/70">
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-primary animate-gold-pulse" />
                <span className="text-sm font-medium">15+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-primary animate-gold-pulse" />
                <span className="text-sm font-medium">200+ Successful Projects</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-5 w-5 text-primary animate-gold-pulse" />
                <span className="text-sm font-medium">12+ Countries Served</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
