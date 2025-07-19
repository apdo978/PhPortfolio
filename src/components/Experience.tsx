import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

const experiences = [

  {
    year: "2025",
    position: "Medical Representative ",
    company: "Eba Pharmaceutical Company",
    location: "Cairo, Egypt",
    description: "Engaged in pharmaceutical sales and marketing, promoting pharmaceutical products to healthcare professionals and building strong client relationships.",
    achievements: [
      "Achieved sales targets and contributed to market growth",
      "Developed and delivered product presentations to healthcare providers",
      "Collaborated with cross-functional teams to optimize marketing strategies",
      "Maintained up-to-date knowledge of industry trends and competitor activities"
    ]
  },
  {
    year: "2025",
    position: "Medical Call Center Agent",
    company: "Pharma Call Center Clinics",
    location: "Cairo, Egypt",
    description: "Provided support and information to patients and healthcare professionals regarding medications and treatment options.",
    achievements: [
      "Handled patient inquiries and provided accurate medication information",
      "Assisted in resolving medication-related issues",
      "Maintained detailed records of patient interactions",
      "Collaborated with healthcare providers to ensure optimal patient care"
    ]
  },
  {
    year: "2022",
    position: "Educational Promoter",
    company: "Indian Educational Universities",
    location: "Cairo, Egypt",
    description: "Promoted educational programs and opportunities to prospective students, focusing on Indian universities and their offerings.",
    achievements: [
      "Conducted informational sessions for students and parents",
      "Developed promotional materials highlighting educational programs",
      "Collaborated with university representatives to facilitate admissions",
      "Provided guidance on study abroad opportunities"
    ]
  },
  {
    year: "2024",
    position: "Clinical Pharmacy Intern",
    company: "El Hussien Hospital",
    location: "Cairo, Egypt",
    description: "Completed comprehensive clinical training in clinical pharmacy services, working alongside healthcare teams in specialized pediatric care.",
    achievements: [
      "Participated in multidisciplinary medical rounds",
      "Gained experience in clinical dosing and drug safety",
      "Assisted in medication reconciliation processes",
      "Contributed to clinical decision-making for ICU patients"
    ]
  },
  {
    year: "2024",
    position: "Scientific Research Intern",
    company: "Alazhar University",
    location: "Cairo, Egypt",
    description: "Conducted research in pharmaceutical sciences, focusing on drug formulation and development under the supervision of faculty members.",
    achievements: [
      "Assisted in the development of novel drug delivery systems",
      "Conducted stability studies on pharmaceutical formulations",
      "Collaborated with a team of researchers on various projects",
      "Presented research findings at university symposiums"
    ]
  },
    {
    year: "2021-2024",
    position: "Pharmacist",
    company: "Community Pharmacy",
    location: "6th of October City, Egypt",
    description: "Providing comprehensive pharmaceutical care services including medication dispensing, patient counseling, and clinical consultations in a busy community setting.",
    achievements: [
      "Gained extensive experience working in various pharmacies",
      "Provided medication therapy management and patient education",
      "Developed expertise in community pharmacy operations",
      "Enhanced patient safety through accurate dispensing practices"
    ]
  },
  {
    year: "2022 - 2024",
    position: "English Language Tutor",
    company: "Private Practice",
    location: "Egypt",
    description: "Provided English language instruction to diverse student groups, focusing on improving language skills and conversational fluency.",
    achievements: [
      "Taught English to private student groups",
      "Developed customized learning materials",
      "Improved students' language proficiency significantly",
      "Enhanced communication and teaching skills"
    ]
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">Professional Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A proven track record of excellence in pharmaceutical care and clinical practice
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="card-shadow hover:shadow-lg transition-smooth">
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl text-secondary mb-2">{exp.position}</CardTitle>
                    <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Building className="h-4 w-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <Badge variant="outline" className="w-fit">
                    <Calendar className="h-4 w-4 mr-2" />
                    {exp.year}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {exp.description}
                </p>
                <div>
                  <h4 className="font-semibold text-secondary mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};