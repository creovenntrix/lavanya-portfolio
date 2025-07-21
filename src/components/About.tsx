import { Card, CardContent } from '@/components/ui/card';
import { Brain, Heart, Lightbulb, Target } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Brain,
      title: "Continuous Learning",
      description:
        "I believe in constantly expanding my knowledge and staying updated with the latest technologies and methodologies in ML and software development.",
    },
    {
      icon: Target,
      title: "Problem-Solving Focus",
      description:
        "I approach challenges with a systematic mindset, breaking down complex problems into manageable components and finding innovative solutions.",
    },
    {
      icon: Heart,
      title: "Passion for Impact",
      description:
        "I'm driven by the potential of technology to make a positive difference in people's lives and solve meaningful real-world problems.",
    },
    {
      icon: Lightbulb,
      title: "Innovation Mindset",
      description:
        "I enjoy exploring new ideas, experimenting with emerging technologies, and finding creative approaches to traditional challenges.",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Me
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              As a dedicated computer science student specializing in AI and Machine Learning, I'm passionate about
              the intersection of technology and human potential. My journey in tech is driven by curiosity,
              a commitment to excellence, and the belief that technology should serve humanity.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Beyond coding and algorithms, I enjoy exploring how technology can bridge gaps, create opportunities,
              and solve complex challenges. I'm always eager to collaborate, learn from others, and contribute to
              projects that make a meaningful impact.
            </p>
          </div>
        </div>

        {/* Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card
              key={index}
              className="group transition-all duration-300 hover:-translate-y-2 hover:shadow-lg 
                         bg-white/80 dark:bg-slate-800 backdrop-blur-sm 
                         border-2 border-gray-300 dark:border-slate-600 rounded-xl animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-full shadow-md">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
