import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Pill, Stethoscope, Users, BarChart3, Globe, BookOpen, BarChart2Icon } from "lucide-react";

const skillCategories = [
  {
    title: "Clinical Expertise",
    icon: Stethoscope,
    skills: [
      { name: "Pharmacotherapy", level: 95 },
      { name: "Clinical Assessment", level: 90 },
      { name: "Drug Interactions", level: 92 },
      { name: "Medication Therapy Management", level: 88 }
    ]
  },
  {
    title: "Marketing & Sales",
    icon: BarChart2Icon,
    skills: [
      { name: "Pharmaceutical Marketing", level: 85 },
      { name: "Market Research", level: 62 },
      { name: "Customer Relationship Management", level: 80 },
      { name: "Sales Strategies", level: 70 },
      { name: "Digital Marketing", level: 98 }
    ]
  },
  {
    title: "Specialized Areas",
    icon: Pill,
    skills: [
      { name: "Oncology Pharmacy", level: 85 },
      { name: "Critical Care", level: 80 },
      { name: "Diabetes Management", level: 90 },
      { name: "Immunizations", level: 95 }
    ]
  },
  {
    title: "Professional Skills",
    icon: Users,
    skills: [
      { name: "Patient Counseling", level: 93 },
      { name: "Team Leadership", level: 87 },
      { name: "Quality Improvement", level: 85 },
      { name: "Clinical Research", level: 82 }
    ]
  },
  {
    title: "Technical Proficiency",
    icon: BarChart3,
    skills: [
      { name: "Epic Systems", level: 90 },
      { name: "Clinical Documentation", level: 88 },
      { name: "Data Analysis", level: 75 },
      { name: "Pharmacy Informatics", level: 80 }
    ]
  },
  {
    title: "Communication & Languages",
    icon: BarChart3,
    skills: [
      { name: "Active listener", level: 90 },
      { name: "Professionalism", level: 88 },
      { name: "Market Analysis", level: 75 },
      { name: "Market Informatics", level: 80 }
    ]
  }
];

const languages = [
  { name: "English", level: "fluent" },
  { name: "Deutsch Gr", level: "Intermediate" },
];

const specializations = [
  "Pharmaceutical Marketing",
  "Preclinical Selling",
  "Degetilization",
  "Pharmaceutical Sales",
  "Medication Safety",
  "Clinical Protocols",
  "Drug Information",
  "Patient Education",
  "Quality Assurance",
  "Pharmaceutical Research",
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive skill set spanning clinical practice, patient care, and pharmaceutical research
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl text-secondary">
                  <category.icon className="h-6 w-6 text-primary" />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Languages */}
          <Card className="card-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl text-secondary">
                <Globe className="h-6 w-6 text-primary" />
                Languages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {languages.map((lang, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="font-medium">{lang.name}</span>
                    <Badge variant="outline">{lang.level}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Specializations */}
          <Card className="card-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl text-secondary">
                <BookOpen className="h-6 w-6 text-primary" />
                Specializations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {specializations.map((spec, index) => (
                  <Badge key={index} variant="secondary" className="text-sm">
                    {spec}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};