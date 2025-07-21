import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Brain, Lightbulb } from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    { name: "Python", level: "Advanced", category: "Programming" },
    { name: "Java", level: "Intermediate", category: "Programming" },
    { name: "C", level: "Intermediate", category: "Programming" },
    { name: "HTML5", level: "Advanced", category: "Web Development" },
    { name: "CSS3", level: "Advanced", category: "Web Development" },
    { name: "JavaScript", level: "Intermediate", category: "Web Development" },
    { name: "MySQL", level: "Intermediate", category: "Database" },
    { name: "MongoDB", level: "Beginner", category: "Database" },
    { name: "Machine Learning", level: "Intermediate", category: "AI/ML" },
    { name: "Data Structures & Algorithms", level: "Intermediate", category: "Computer Science" }
  ];

  const softSkills = [
    { name: "Communication", icon: Users, description: "Excellent verbal and written communication skills with ability to explain complex technical concepts clearly." },
    { name: "Adaptability", icon: Lightbulb, description: "Quick learner who adapts well to new technologies, frameworks, and changing project requirements." },
    { name: "Time Management", icon: Brain, description: "Strong organizational skills with ability to prioritize tasks and meet deadlines consistently." },
    { name: "Teamwork", icon: Users, description: "Collaborative team player with experience in group projects and cross-functional collaboration." }
  ];

  const skillCategories = [
    { name: "Programming", color: "bg-primary", skills: technicalSkills.filter(s => s.category === "Programming") },
    { name: "Web Development", color: "bg-secondary", skills: technicalSkills.filter(s => s.category === "Web Development") },
    { name: "Database", color: "bg-accent", skills: technicalSkills.filter(s => s.category === "Database") },
    { name: "AI/ML", color: "bg-primary-dark", skills: technicalSkills.filter(s => s.category === "AI/ML") },
    { name: "Computer Science", color: "bg-secondary-light", skills: technicalSkills.filter(s => s.category === "Computer Science") }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Advanced": return "bg-green-900 text-green-300 border-green-700";
      case "Intermediate": return "bg-blue-900 text-blue-300 border-blue-700";
      case "Beginner": return "bg-yellow-900 text-yellow-300 border-yellow-700";
      default: return "bg-gray-800 text-gray-300 border-gray-600";
    }
  };

  return (
    <section id="skills" className="py-20 px-4 bg-background text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Skills & Expertise</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical competencies and soft skills 
            that enable me to excel in machine learning and software development.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category) => (
              <Card
                key={category.name}
                className="bg-gray-900 border border-gray-700 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-lg font-semibold text-white">
                    <div className={`w-3 h-3 rounded-full ${category.color}`}></div>
                    {category.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.skills.map((skill, index) => (
                      <div key={index} className="flex items-center justify-between text-sm text-gray-200">
                        <span>{skill.name}</span>
                        <Badge
                          variant="outline"
                          className={`text-xs border ${getLevelColor(skill.level)}`}
                        >
                          {skill.level}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Soft Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {softSkills.map((skill, index) => (
              <Card
                key={index}
                className="bg-gray-900 border border-gray-700 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-xl shadow-md">
                      <skill.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-2">{skill.name}</h4>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
