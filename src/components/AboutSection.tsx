

import { Card, CardContent } from '@/components/ui/card';
import { Code2, Coffee, Database, Workflow, Users, Wrench } from 'lucide-react';


const AboutSection = () => {
  const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "Building robust applications with Java Spring Boot, Angular, and Flutter, ensuring seamless integration between frontend and backend.",
  },
  {
    icon: Database,
    title: "Database Management",
    description:
      "Designing and optimizing MySQL, PostgreSQL, Firebase, and MongoDB databases for efficiency, scalability, and reliability.",
  },
  {
    icon: Workflow,
    title: "API Integration",
    description:
      "Implementing and testing RESTful APIs with Postman to enable smooth communication between systems and services.",
  },
  {
    icon: Users,
    title: "Collaboration & Leadership",
    description:
      "Thriving in team environments with strong communication, adaptability, and problem-solving to deliver impactful results.",
  },
  {
    icon: Wrench,
    title: "Troubleshooting & Optimization",
    description:
      "Identifying and resolving technical issues quickly while improving application performance and adhering to best practices.",
  },
];

  const stats = [
    { number: '4+', label: 'Years Experience' },
    { number: '10+', label: 'Projects Completed' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <section
      id="about"
      className="section-padding bg-gradient-to-b from-background to-secondary/20"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-20">
          <div className="inline-block">
            <span className="text-primary font-semibold text-lg mb-4 block">
              About Me
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
              Passionate Developer
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          <div className="space-y-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
               I’m a dedicated software developer with a strong foundation in 
                <span className="text-primary font-semibold">
                  {" "}
                 both web and mobile application development.
                </span>
               My journey into technology began at Kabarak University, where I explored programming, database management, and full-stack development. 
               What started as an academic pursuit quickly transformed into a passion
               <span className="text-primary font-semibold">
                  {" "}
                 creating meaningful digital solutions
                </span>.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
             From building responsive interfaces with Angular and Flutter to designing efficient backends with Java Spring Boot and MySQL,
             I’ve learned that the true power of technology lies in solving real-world problems while keeping user experience at the center. 
             My professional experience at Techsavanna Technologies has sharpened my ability to design scalable systems, implement RESTful APIs, and troubleshoot complex issues.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                I believe
                <span className="text-primary font-semibold">
                  {" "}
                 great software is more than just clean code; it’s about delivering solutions that are reliable, user-friendly, and impactful
                </span>.
                I’m always eager to embrace new challenges, adapt to evolving technologies, and grow as part of a collaborative team.
              </p>

            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map(({ number, label }) => (
                <div key={label} className="text-center group">
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
                    {number}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {label}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              {[
                      "Java",
      "Dart (Flutter)",
      "Angular",
      "React",
      "HTML5",
      "CSS3",
      "MySQL",
      "Git",
      "GitHub",
      "RESTful APIs",
      "Postman",
      "Adobe Photoshop",
      "Illustrator",
      "Debugging & Troubleshooting"

              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 glass-effect rounded-full text-sm font-medium border hover:border-primary hover:text-primary transition-all duration-300 hover:scale-105"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            {highlights.map(({ icon: Icon, title, description }, ) => (
              <Card
                key={title}
                className="glass-effect border-0 hover-lift group"
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-primary to-purple-600 text-white group-hover:scale-110 transition-transform duration-300">
                      <Icon size={28} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                        {title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center glass-effect rounded-3xl p-12 border">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to bring your ideas to life?
            </h3>
            <p className="text-muted-foreground mb-8 text-lg">
              Let's collaborate and create something extraordinary together. I'm
              always excited to tackle new challenges and push creative
              boundaries.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Coffee className="text-primary" size={24} />
              <span className="text-muted-foreground">
                Let's grab a coffee and chat!
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
