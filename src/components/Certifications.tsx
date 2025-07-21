import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import {
  Award,
  ExternalLink,
  Calendar,
  Building,
} from 'lucide-react';

type Certification = {
  title: string;
  issuer: string;
  date: string;
  type: string;
  description: string;
  skills: string[];
  badge: string;
  color: string;
  certificateLink: string;
};

const certifications: Certification[] = [
  {
    title: "AWS Machine Learning Certification",
    issuer: "Amazon Web Services",
    date: "2024",
    type: "Professional",
    description:
      "Covers machine learning fundamentals, model development, deployment, and optimization on AWS platform.",
    skills: [
      "AWS SageMaker",
      "Model Deployment",
      "ML Pipeline",
      "Cloud Computing",
    ],
    badge: "🏆",
    color: "bg-gradient-primary",
    certificateLink: "https://example.com/aws-ml-cert",
  },
  {
    title: "AWS Cloud Foundation",
    issuer: "Amazon Web Services",
    date: "2024",
    type: "Foundation",
    description:
      "Foundational understanding of AWS cloud services, architecture, security, and best practices.",
    skills: [
      "Cloud Architecture",
      "AWS Services",
      "Security",
      "Cost Optimization",
    ],
    badge: "☁️",
    color: "bg-gradient-secondary",
    certificateLink: "https://example.com/aws-cloud-foundation",
  },
  {
    title: "Java Programming",
    issuer: "Oracle Academy",
    date: "2023",
    type: "Programming",
    description:
      "Covers object-oriented programming, data structures, and app development using Java.",
    skills: ["Java", "OOP", "Data Structures", "Software Development"],
    badge: "💻",
    color: "bg-gradient-accent",
    certificateLink: "https://example.com/java-programming",
  },
  {
    title: "Cambridge C1 English",
    issuer: "Cambridge Assessment English",
    date: "2023",
    type: "Language",
    description:
      "Demonstrates advanced English proficiency in academic and professional contexts.",
    skills: [
      "Advanced English",
      "Academic Writing",
      "Professional Communication",
      "Presentation Skills",
    ],
    badge: "🗣️",
    color: "bg-primary-dark",
    certificateLink: "https://example.com/cambridge-c1",
  },
];

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  const openModal = (cert: Certification) => setSelectedCert(cert);
  const closeModal = () => setSelectedCert(null);

  return (
    <section id="certifications" className="py-20 px-4 bg-background text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Certifications</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Certifications validating my expertise in cloud, ML, programming & communication.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <Card
                onClick={() => openModal(cert)}
                className="cursor-pointer group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gray-900 border border-gray-700 rounded-xl"
              >
                <CardHeader className="pb-4">
                  <div
                    className={`w-16 h-16 ${cert.color} rounded-xl flex items-center justify-center text-2xl shadow-md mb-4 mx-auto group-hover:scale-110 transition-transform`}
                  >
                    {cert.badge}
                  </div>
                  <CardTitle className="text-center text-lg font-bold text-white group-hover:text-primary transition-colors">
                    {cert.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="text-center space-y-3 text-gray-200">
                  <div className="flex items-center justify-center gap-1 text-sm text-gray-400">
                    <Building className="w-4 h-4" />
                    {cert.issuer}
                  </div>
                  <div className="flex items-center justify-center gap-1 text-sm text-gray-400">
                    <Calendar className="w-4 h-4" />
                    {cert.date}
                  </div>

                  <Badge
                    variant="secondary"
                    className="bg-white/10 border border-gray-600 text-white"
                  >
                    {cert.type}
                  </Badge>

                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full mt-4 bg-white/10 border border-gray-600 text-white hover:bg-white hover:text-primary"
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal(cert);
                    }}
                  >
                    <Award className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Modal Dialog */}
        <Dialog open={!!selectedCert} onOpenChange={closeModal}>
          <DialogContent className="max-w-2xl bg-gray-950 text-white border border-gray-700 backdrop-blur-md">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-3 text-2xl font-bold text-white">
                <div
                  className={`w-12 h-12 ${selectedCert?.color} rounded-xl flex items-center justify-center text-xl shadow-md`}
                >
                  {selectedCert?.badge}
                </div>
                {selectedCert?.title}
              </DialogTitle>
            </DialogHeader>

            <div className="space-y-6 pt-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-400">Issuing Authority</p>
                  <p className="font-medium text-white">{selectedCert?.issuer}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Date Obtained</p>
                  <p className="font-medium text-white">{selectedCert?.date}</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white">Description</h3>
                <p className="text-gray-300 mt-1">{selectedCert?.description}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white">Key Skills Covered</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {selectedCert?.skills.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-white/10 text-white border border-gray-600"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <Button
                  variant="outline"
                  className="flex items-center gap-2 bg-white/10 border border-gray-600 text-white hover:bg-white hover:text-primary"
                  onClick={() => {
                    if (selectedCert?.certificateLink) {
                      window.open(selectedCert.certificateLink, '_blank');
                    }
                  }}
                >
                  <ExternalLink className="w-4 h-4" />
                  View Certificate
                </Button>

                <Button
                  variant="secondary"
                  className="bg-white text-primary hover:bg-gray-100 transition-all font-medium"
                  onClick={closeModal}
                >
                  Close
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Certifications;
