import { GraduationCap, School } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

const education = [
  {
    degree: 'Bachelor of Technology in Computer Science and Engineering',
    institution: 'Lovely Professional University',
    year: '2020 – 2024',
    icon: GraduationCap,
  },
  {
    degree: 'Intermediate (MPC)',
    institution: 'Sri Chaitanya Junior College',
    year: '2018 – 2020',
    icon: School,
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 bg-background text-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Education</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic background in engineering and science has built a solid
            foundation for my career in technology and machine learning.
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900 border border-gray-700 rounded-xl hover:shadow-xl transition-transform duration-300 hover:-translate-y-1">
                <CardHeader className="flex items-center gap-4">
                  <div className="p-3 bg-primary text-white rounded-xl shadow-md">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-white">
                    {item.degree}
                  </CardTitle>
                </CardHeader>

                <CardContent className="px-6 pb-6 text-gray-300">
                  <p className="font-medium text-white">{item.institution}</p>
                  <p className="text-sm mt-1">{item.year}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
