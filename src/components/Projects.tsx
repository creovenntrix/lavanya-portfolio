import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database } from 'lucide-react';

const projects = [
  {
    title: "Hybrid Ant Colony Optimization for Dynamic Path Optimization",
    description:
      "Developed an advanced navigation algorithm using Python and machine learning techniques to optimize dynamic path finding. Implemented hybrid ant colony optimization to solve complex routing problems with real-time adaptability.",
    technologies: ["Python", "Machine Learning", "Optimization Algorithms", "Data Analysis"],
    icon: Code,
    gradient: "bg-gradient-to-tr from-sky-500 to-blue-600",
    features: [
      "Dynamic path calculation with real-time updates",
      "Hybrid optimization combining multiple algorithms",
      "Performance analysis and visualization tools",
      "Scalable architecture for large datasets",
    ],
  },
  {
    title: "Code Genie",
    description:
      "Created a comprehensive online resource platform for coders featuring interactive tutorials, code snippets, and learning materials. Built with modern web technologies to provide an intuitive user experience for programming education.",
    technologies: ["HTML5", "CSS3", "JavaScript", "MySQL", "Responsive Design"],
    icon: Database,
    gradient: "bg-gradient-to-tr from-emerald-500 to-teal-600",
    features: [
      "Interactive coding tutorials and examples",
      "Searchable code snippet library",
      "User progress tracking system",
      "Mobile-responsive design",
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-[#f8fafc] dark:bg-[#0f172a]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of some meaningful projects demonstrating problem-solving, algorithmic thinking, and modern UI development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg rounded-xl 
              border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800"
            >
              <Card className="bg-transparent shadow-none border-0">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl ${project.gradient} shadow-md`}>
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-5">
                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300">{project.description}</p>

                  {/* Features */}
                  <div>
                    <h4 className="text-gray-800 dark:text-white font-medium mb-2">Key Features</h4>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex gap-2 items-start">
                          <span className="w-1.5 h-1.5 bg-blue-500 dark:bg-blue-400 rounded-full mt-1" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-gray-800 dark:text-white font-medium mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <Badge
                          key={i}
                          className="bg-gray-100 dark:bg-slate-700 text-gray-800 dark:text-white border border-gray-300 dark:border-slate-600"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
