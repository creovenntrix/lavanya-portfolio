import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Instagram, Github } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "lavanyausikela4@gmail.com",
      href: "mailto:lavanyausikela4@gmail.com",
      description: "Feel free to reach out for collaborations or opportunities."
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/usikela-lavanya-214b25273",
      color: "hover:text-blue-400"
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/lavanya_usikela",
      color: "hover:text-pink-400"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/lavanyausikela",
      color: "hover:text-gray-300"
    }
  ];

  const availabilityList = [
    "Machine Learning Projects",
    "Web Development Collaborations",
    "Research Opportunities",
    "Internship Positions",
    "Tech Discussions"
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-background text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Connect</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Open to collaborations, opportunities, or meaningful tech conversations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* LEFT: Contact Info and CTA */}
          <div className="space-y-6">
            <Card className="bg-gray-900 border border-gray-700 rounded-xl text-white">
              <CardContent className="p-6">
                {contactInfo.map((info, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="p-3 bg-primary rounded-lg">
                      <info.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">{info.label}</h4>
                      <Button variant="link" className="p-0 h-auto text-blue-400 font-medium" asChild>
                        <a href={info.href}>{info.value}</a>
                      </Button>
                      <p className="text-sm text-gray-300 mt-2">{info.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-primary border border-gray-700 text-white rounded-xl">
              <CardContent className="p-6 text-center">
                <h4 className="text-xl font-bold mb-2">Actively Looking For Opportunities</h4>
                <p className="text-gray-100 mb-4 text-sm">
                  I’m open to internships and entry-level roles in ML, Data Science & Software Development.
                </p>
                <Button variant="secondary" asChild>
                  <a href="mailto:lavanyausikela4@gmail.com?subject=Opportunity%20Discussion">
                    Discuss Now
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* RIGHT: Social + Available For */}
          <div className="space-y-6">
            <Card className="bg-gray-900 border border-gray-700 rounded-xl text-white">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-4">Social Media</h4>
                <div className="space-y-3">
                  {socialLinks.map((link, i) => (
                    <Button
                      key={i}
                      variant="ghost"
                      className={`w-full justify-start flex gap-3 items-center text-white hover:bg-gray-800 ${link.color}`}
                      asChild
                    >
                      <a href={link.href} target="_blank" rel="noopener noreferrer">
                        <link.icon className="w-5 h-5" />
                        {link.label}
                      </a>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border border-gray-700 rounded-xl text-white">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-3">Available For</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  {availabilityList.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FINAL CTA */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-to-br from-primary to-primary-dark border-0 text-white rounded-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Collaborate?</h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto text-sm">
                Whether it’s an exciting project or an internship role — I’m always happy to connect with enthusiastic minds.
              </p>
              <Button size="lg" variant="secondary" className="text-primary" asChild>
                <a href="mailto:lavanyausikela4@gmail.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Send Message
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
