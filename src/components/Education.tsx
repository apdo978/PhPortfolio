import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Pharmacy PharmD",
    institution: "Faculty of Pharmacy, Al-Azhar University",
    year: "2025",
    gpa: "VGood",
    honors: "Graduate",
    description: "Comprehensive pharmaceutical education with focus on clinical pharmacy practice, pharmacology, medicinal chemistry, and patient care in accordance with Egyptian pharmaceutical standards."
  }
];

const certifications = [
  {
    name: "Licensed Pharmacist",
    issuer: "Egyptian Pharmaceutical Society",
    year: "2025",
    status: "Active",
  },
  {
    name: "Medical Representative Sales & Marketing",
    issuer: "MARCYRL for Pharmaceutical industries",
    year: "2025",
    status: "Completed",
    href:"/public/1752923972124-IMG_20250719_141929.jpg"
  },
  {
    name: "Industrial Pharmacy",
    issuer: "Multi-Care for Pharmaceutical industries",
    year: "2025",
    status: "Completed",
    href:"/public/1752923971424-IMG_20250719_141821.jpg"
  },
  {
    name: "QC,QA Training in Epico",
    issuer: "Epico Pharmaceutical Company",
    year: "2024",
    status: "Completed"
  },
  {
    name: "OTC Clinical-cosmetics Course",
    issuer: "Pharma Academy",
    year: "2024",
    status: "Completed"
  },

];

export const Education = () => {
  return (
    <section id="education" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">Education & Certifications</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Committed to continuous learning and professional development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-secondary mb-6 flex items-center gap-3">
              <GraduationCap className="h-6 w-6 text-primary" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="card-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-secondary">{edu.degree}</CardTitle>
                    <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                      <span className="font-medium">{edu.institution}</span>
                      <Badge variant="outline">
                        <Calendar className="h-3 w-3 mr-1" />
                        {edu.year}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-3">
                        <Badge className="bg-primary/10 text-primary">GPA: {edu.gpa}</Badge>
                        <Badge className="bg-accent/10 text-accent">{edu.honors}</Badge>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {edu.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-secondary mb-6 flex items-center gap-3">
              <Award className="h-6 w-6 text-primary" />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="card-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-semibold text-secondary text-lg leading-tight">
                        {cert.name}
                      </h4>
                      <Badge 
                        className={cert.status === 'Active' ? 'bg-accent/10 text-accent' : 'bg-muted text-muted-foreground'}
                      >
                        {cert.status}
                      </Badge>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <span>{cert.issuer}</span>
                      <span>•</span>
                      <span>{cert.year}</span>
                    </div>
                    <button className="mt-4 text-primary hover:underline transition-colors">
                     {cert.href? <a href={cert.href} target="_blank" rel="noopener noreferrer">View Certificate</a> : null}
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};