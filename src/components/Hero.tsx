import { Github, Linkedin, Instagram, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import lavanyaPhoto from '@/assets/lavanya-photo.jpg';

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        {/* Profile Image */}
        <div className="mb-8 animate-scale-in">
          <div className="relative w-48 h-48 mx-auto mb-6">
            <img
              src={lavanyaPhoto}
              alt="Lavanya Usikela"
              className="w-full h-full rounded-full object-cover shadow-soft border-4 border-white/50 animate-float"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-10"></div>
          </div>
        </div>

        {/* Name and Title */}
        <div className="mb-8 space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground">
            Lavanya Usikela
          </h1>
          <h2 className="text-xl md:text-2xl text-primary font-medium">
            Aspiring Machine Learning Engineer | Tech Enthusiast | Lifelong Learner
          </h2>
        </div>

        {/* Description */}
        <div className="mb-10 max-w-3xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed">
            I am an aspiring Machine Learning Engineer passionate about using data-driven insights to solve real-world problems. 
            I have a foundational grasp of model deployment, data analysis, and algorithm optimization, and I'm comfortable 
            working with Python, Java, and C. I'm currently exploring web development and expanding my technical toolkit every day.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <Button 
            variant="outline" 
            size="lg" 
            asChild
            className="bg-white/50 hover:bg-white hover:shadow-soft transition-all duration-300"
          >
            <a href="mailto:lavanyausikela4@gmail.com" className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Email
            </a>
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            asChild
            className="bg-white/50 hover:bg-white hover:shadow-soft transition-all duration-300"
          >
            <a href="https://www.linkedin.com/in/usikela-lavanya-214b25273" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            asChild
            className="bg-white/50 hover:bg-white hover:shadow-soft transition-all duration-300"
          >
            <a href="https://www.instagram.com/lavanya_usikela" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Instagram className="w-5 h-5" />
              Instagram
            </a>
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            asChild
            className="bg-white/50 hover:bg-white hover:shadow-soft transition-all duration-300"
          >
            <a href="https://github.com/lavanyausikela" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
