import { Badge } from "@/components/ui/badge";
import { Heart, Linkedin, Mail, FileText } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* Branding */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Abdelrhman Muhamed</h3>
            <p className="text-white/80 mb-4">
                 Innovative pharmacist combining traditional pharmaceutical expertise with modern 
                technology solutions. Experienced in General pharmacy practice and passionate about 
                Markting Languages Sales For More healthcare solutions to improve patient outcomes.
            </p>
            <Badge className="bg-primary">PharmD, Licensed Pharmacist</Badge>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Professional</h4>
            <ul className="space-y-2 text-white/80">
                 <li>
                <a href="#about" className="hover:text-white transition-smooth">
                  About
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-smooth">
                  Experience
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-white transition-smooth">
                  Education
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition-smooth">
                  Skills
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-smooth">
                  About
                </a>
              </li>
         
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="space-y-3">
              <a 
                href="mailto:talktoboda01@gmail.com"
                className="flex items-center gap-3 text-white/80 hover:text-white transition-smooth"
              >
                <Mail className="h-4 w-4" />
                talktoboda01@gmail.com
              </a>
              <a 
                href="https://www.linkedin.com/in/abd-el-rahman-abd-el-ghafar-a466a8276"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/80 hover:text-white transition-smooth"
              >
                <Linkedin className="h-4 w-4" />
                Professional Profile
              </a>
              <a 
                href="#"
                className="flex items-center gap-3 text-white/80 hover:text-white transition-smooth"
              >
                <FileText className="h-4 w-4" />
                <a href="/Abdelrhman.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                >
                  Download Resume
                </a>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} <a 
            href="https://apdo978.github.io/Abdelrhman/" target="_blank" className="text-white/80 hover:text-white transition-smooth">Abdelrhman.Dev</a> All rights reserved.
          </p>
          <p className="text-white/60 text-sm flex items-center gap-2">
            Made with <Heart className="h-4 w-4 text-primary" /> for healthcare excellence By <a 
            href="https://apdo978.github.io/Abdelrhman/" target="_blank" className="text-white/80 hover:text-white transition-smooth">Abdelrhman.Dev</a> 
          </p>
        </div>
      </div>
    </footer>
  );
};