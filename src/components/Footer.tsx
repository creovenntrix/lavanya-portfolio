import { Button } from '@/components/ui/button';
import { Heart, ArrowUp, Linkedin, Instagram, Github, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Mail,
      href: "mailto:lavanyausikela4@gmail.com",
      label: "Email"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/usikela-lavanya-214b25273",
      label: "LinkedIn"
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/lavanya_usikela",
      label: "Instagram"
    },
    {
      icon: Github,
      href: "https://github.com/lavanyausikela",
      label: "GitHub"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary-dark text-white py-12 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-light opacity-20"></div>
      
      <div className="max-w-6xl mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Lavanya Usikela</h3>
            <p className="text-white/80 leading-relaxed">
              Aspiring Machine Learning Engineer passionate about creating innovative solutions 
              and making a positive impact through technology.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {['About', 'Education', 'Projects', 'Skills', 'Certifications', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.querySelector(`#${item.toLowerCase()}`);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-white/80 hover:text-white transition-colors text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect With Me</h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  asChild
                  className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-primary transition-all"
                >
                  <a 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                </Button>
              ))}
            </div>
            <p className="text-white/80 text-sm">
              Open to opportunities in ML, AI, and Software Development
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2 text-white/80 mb-4 md:mb-0">
            <span>Designed & Built</span>
            <Heart className="w-4 h-4 text-red-400 animate-pulse" />
            <span>by Lavanya Usikela © {currentYear}</span>
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={scrollToTop}
            className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-primary transition-all flex items-center gap-2"
          >
            <ArrowUp className="w-4 h-4" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
