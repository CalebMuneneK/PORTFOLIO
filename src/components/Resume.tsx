import React, { useRef, forwardRef, useImperativeHandle } from "react";
import { Mail, Github, Linkedin, MapPin, Globe, Phone } from "lucide-react";
import { useReactToPrint } from "react-to-print";
import { Button } from "@/components/ui/button";
import { saveAs } from "file-saver";

interface ResumeProps {
  hideExport?: boolean;
  onPrint?: () => void;
}

const Resume = forwardRef<HTMLDivElement, ResumeProps>(
  ({ hideExport, onPrint }, ref) => {
    const resumeRef = useRef<HTMLDivElement>(null);

    // Forward internal ref to parent
    useImperativeHandle(ref, () => resumeRef.current as HTMLDivElement);

    // const handlePrint = useReactToPrint({
    //   content: () => resumeRef.current,
    //   documentTitle: "Caleb_Munene_Resume",
    // });

    const exportToWord = () => {
      const target = resumeRef.current;
      if (!target) return;
      const htmlContent = target.innerHTML;
      const wordHtml = `<!DOCTYPE html><html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charSet='utf-8'><title>Resume</title></head><body>${htmlContent}</body></html>`;
      const blob = new Blob([wordHtml], {
        type: "application/msword;charset=utf-8",
      });
      saveAs(blob, "Caleb_Munene_Resume.doc");
    };

    return (
      <>
        {!hideExport && (
          <div className="flex justify-end mb-4 gap-2 print:hidden">
            <Button
              // onClick={onPrint || handlePrint}
              className="bg-primary text-white hover:bg-primary/90 px-6 py-2 rounded-lg shadow-md transition-all"
            >
              Print / Save as PDF
            </Button>
            <Button
              onClick={exportToWord}
              className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-lg shadow-md transition-all"
            >
              Download as Word
            </Button>
          </div>
        )}
        <section
          ref={resumeRef}
          className="max-w-5xl mx-auto p-8 glass-effect rounded-3xl border shadow-2xl print:shadow-none print:bg-white"
        >
          {/* Header */}
          <header className="flex flex-col lg:flex-row items-start lg:items-center justify-between border-b border-border/50 pb-8 mb-8">
            <div className="flex-1">
              <h1 className="text-5xl print:text-3xl font-bold gradient-text mb-3">
                Caleb Munene
              </h1>
              <p className="text-xl print:text-lg text-muted-foreground mb-4 font-light">
                Software Developer
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                {[
                  {
                    icon: Phone,
                    text: "+254 740630349",
                  },
                  {
                    icon: Mail,
                    text: "carebmunene3@gmail.com",
                    href: "mailto:carebmunene3@gmail.com",
                  },
                  {
                    icon: MapPin,
                    text: "Nairobi, Kenya",
                  },
                ].map(({ icon: Icon, text, href }, index) => {
                  const Tag = href ? "a" : "div";
                  return (
                    <Tag
                      key={index}
                      {...(href && {
                        href,
                        target: "_blank",
                        rel: "noopener noreferrer",
                      })}
                      className="flex items-center gap-2 px-3 py-2 glass-effect rounded-full border hover:border-primary/50 transition-all duration-300 hover-lift"
                    >
                      <Icon size={16} className="text-primary" />
                      <span className="text-foreground">{text}</span>
                    </Tag>
                  );
                })}
              </div>
            </div>
          </header>

          {/* Objective */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
              <span className="w-2 h-8 bg-gradient-to-b from-primary to-purple-500 rounded-full mr-3"></span>
              Objective
            </h2>
            <div className="glass-effect rounded-2xl p-6 border">
              <p className="text-muted-foreground leading-relaxed text-lg">
                To secure a software development role where I can apply my expertise in full-stack
                development, mobile and web applications, and database management to build innovative and
                scalable solutions while continuously growing my skills.
              </p>
            </div>
          </section>

          {/* Skills */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
              <span className="w-2 h-8 bg-gradient-to-b from-primary to-purple-500 rounded-full mr-3"></span>
              Skills & Competencies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Programming & Frameworks",
                  skills: "Java (Spring Boot, JavaFX, Hibernate), Dart (Flutter), JavaScript (Angular), PHP (Laravel), HTML5, CSS3",
                },
                {
                  title: "Databases",
                  skills: "MySQL, PostgreSQL, Firebase, MongoDB",
                },
                {
                  title: "Version Control & APIs",
                  skills: "Git, GitHub, RESTful APIs, Postman",
                },
                {
                  title: "Principles & Design",
                  skills: "OOP, MVC Architecture, Adobe Photoshop, Illustrator",
                },
                {
                  title: "Soft Skills",
                  skills: "Problem-solving, Communication, Adaptability, Time management, Attention to detail",
                },
              ].map(({ title, skills }, index) => (
                <div
                  key={index}
                  className="glass-effect rounded-2xl p-6 border hover:border-primary/20 transition-all duration-300"
                >
                  <h3 className="font-semibold text-foreground mb-2">{title}</h3>
                  <p className="text-muted-foreground">{skills}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
              <span className="w-2 h-8 bg-gradient-to-b from-primary to-purple-500 rounded-full mr-3"></span>
              Experience
            </h2>
            <div className="space-y-6">
              <div className="glass-effect rounded-2xl p-6 border">
                <h3 className="text-xl font-semibold text-primary mb-1">
                  Software Developer – Techsavanna Technologies
                </h3>
                <p className="text-sm text-muted-foreground mb-4">Jan 2025 – Present, Nairobi, Kenya</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Developing and maintaining full-stack applications using Java Spring Boot and Angular.</li>
                  <li>Designing and optimizing MySQL databases for performance.</li>
                  <li>Implementing RESTful APIs for frontend-backend communication.</li>
                  <li>Enhancing performance, troubleshooting issues, and ensuring best practices.</li>
                </ul>
              </div>

              <div className="glass-effect rounded-2xl p-6 border">
                <h3 className="text-xl font-semibold text-primary mb-1">
                  Cyber Attendant – Ternspin Limited
                </h3>
                <p className="text-sm text-muted-foreground mb-4">Mar 2024 – Dec 2024, Nairobi, Kenya</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Designed digital and print materials with Adobe Photoshop & Illustrator.</li>
                  <li>Assisted customers with document processing, printing, and internet services.</li>
                  <li>Maintained and troubleshooted computer systems.</li>
                  <li>Handled data entry, online applications, and administrative tasks.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
              <span className="w-2 h-8 bg-gradient-to-b from-primary to-purple-500 rounded-full mr-3"></span>
              Education
            </h2>
            <div className="space-y-4">
              <div className="glass-effect rounded-2xl p-6 border">
                <p className="text-muted-foreground text-lg">
                  Bachelor of Science in Information Technology – Kabarak University, Nakuru (2021 – 2024)
                </p>
              </div>
              <div className="glass-effect rounded-2xl p-6 border">
                <p className="text-muted-foreground text-lg">
                  Moi High School Mbiruri, Embu (2017 – 2020) – KCSE Certificate
                </p>
              </div>
            </div>
          </section>

          {/* Communication */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
              <span className="w-2 h-8 bg-gradient-to-b from-primary to-purple-500 rounded-full mr-3"></span>
              Communication
            </h2>
            <div className="glass-effect rounded-2xl p-6 border">
              <p className="text-muted-foreground text-lg">
                Strong written and verbal communication skills, with the ability to provide constructive feedback and collaborate effectively with teams and stakeholders.
              </p>
            </div>
          </section>

          {/* References */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
              <span className="w-2 h-8 bg-gradient-to-b from-primary to-purple-500 rounded-full mr-3"></span>
              References
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-effect rounded-2xl p-6 border">
                <p className="text-muted-foreground"><strong>Kevin Oyunda</strong><br />Supervisor, Techsavanna Technologies<br />Phone: +254724240395</p>
              </div>
              <div className="glass-effect rounded-2xl p-6 border">
                <p className="text-muted-foreground"><strong>Patrick Mutugi</strong><br />Manager, Ternspin Technologies<br />Phone: +254715204141</p>
              </div>
            </div>
          </section>
        </section>
      </>
    );
  }
);

Resume.displayName = "Resume";
export default Resume;
