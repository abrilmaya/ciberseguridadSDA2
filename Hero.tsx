import heroImage from "@/assets/hero-cybersecurity.jpg";
import { Shield, Lock, Eye } from "lucide-react";
import Mascot from "./Mascot";

const Hero = () => {
  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Escudo de ciberseguridad digital protegiendo una red" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-background" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <div className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary-foreground backdrop-blur-sm text-sm font-medium mb-6 border border-primary/30">
            Tu guía de seguridad digital
          </span>
        </div>
        
        <h1 
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Protégete en el
          <br />
          <span className="text-amber-light">Mundo Digital</span>
        </h1>
        
        <p 
          className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          Aprende a navegar de forma segura por internet, protege tus cuentas 
          y encuentra ayuda cuando la necesites.
        </p>
        
        <div 
          className="flex flex-wrap justify-center gap-4 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          <a 
            href="#consejos"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg gradient-hero text-primary-foreground font-semibold shadow-glow hover:opacity-90 transition-opacity"
          >
            <Eye className="w-5 h-5" />
            Ver Consejos
          </a>
          <a 
            href="#ayuda"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground font-semibold hover:bg-primary-foreground/20 transition-colors"
          >
            <Shield className="w-5 h-5" />
            Necesito Ayuda
          </a>
        </div>
        
        {/* Stats */}
        <div 
          className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-16 animate-fade-up"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <Shield className="w-8 h-8 text-amber-light" />
            </div>
            <p className="text-2xl font-bold text-primary-foreground">100%</p>
            <p className="text-sm text-primary-foreground/70">Consejos Prácticos</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <Lock className="w-8 h-8 text-amber-light" />
            </div>
            <p className="text-2xl font-bold text-primary-foreground">Fácil</p>
            <p className="text-sm text-primary-foreground/70">De Implementar</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <Eye className="w-8 h-8 text-amber-light" />
            </div>
            <p className="text-2xl font-bold text-primary-foreground">24/7</p>
            <p className="text-sm text-primary-foreground/70">Recursos Disponibles</p>
          </div>
        </div>
      </div>

      {/* Mascot at bottom */}
      <div className="absolute bottom-24 right-8 md:right-16 z-20 hidden md:block">
        <Mascot 
          pose="wave" 
          message="¡Hola! Soy Escudito y te guiaré por esta página. ¡Vamos a aprender sobre ciberseguridad!" 
          position="right"
        />
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/50 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-primary-foreground/70" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
