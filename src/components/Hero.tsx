import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Download } from "lucide-react";
import React, { useRef } from "react";
import { toast } from "sonner";

export const Hero = () => {
  const phoneRef = useRef(null);
  const emailRef = useRef(null);
  const textRef = useRef(null);
 const handleCopy = async (ref) => {
      try {
        await navigator.clipboard.writeText(ref.current.textContent);
        toast.info(ref.current.textContent + " copied successfully!");
      } catch (err) {
        toast.error("Failed to copy text");
      
      }
    }
  
  
  return (
    <section id="about" className="hero-gradient py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Content */}
          <div className="text-center lg:text-left">
            <div className="mb-8">
              <Badge variant="secondary" className="mb-4 px-4 py-2">
                Licensed Pharmacist & Developer
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
                Abdelrhman Muhamed
              </h1>
              <h2 className="text-xl lg:text-2xl text-primary-glow mb-6">
                PharmD • Pharmacist Developer • Medical Representative • Healthcare Profissional
              </h2>
              <p className="text-lg text-white/90 leading-relaxed">
                Innovative pharmacist combining traditional pharmaceutical expertise with modern 
                technology solutions. Experienced in General pharmacy practice and passionate about 
                Markting Languages Sales For More healthcare solutions to improve patient outcomes.
              </p>
            </div>

            {/* Contact Quick Links */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <a href="mailto:talktoboda01@gmail.com">
              <Button ref={emailRef} onClick={() => { handleCopy(emailRef) }} variant="outline" size="sm" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Mail className="h-4 w-4 mr-2" />
                talktoboda01@gmail.com
              </Button>
              </a>
              <Button ref={textRef} onClick={() => { handleCopy(textRef) }} variant="outline" size="sm" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Phone  className="h-4 w-4 mr-2"  />
                +201271175532
              </Button>
              <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <MapPin className="h-4 w-4 mr-2" />
                6th of October City, Egypt
              </Button>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="/Abdelrhman.pdf"
                  target="_blank"
                  rel="noopener noreferrer">
              <Button  size="lg" className="bg-white text-secondary hover:bg-white/90 transition-smooth">
                <Download  className="h-5 w-5 mr-2" />
                Show CV
              </Button>
              </a> 
              {/* <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                View Portfolio
              </Button> */}
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 overflow-hidden soft-shadow">
                <a  href="https://www.linkedin.com/in/abd-el-rahman-abd-el-ghafar-a466a8276" target="_blank" rel="noopener noreferrer"><img 
                  src="/30110012118451.jpg"
                  alt="Abdelrhman Muhamed - Professional Pharmacist"
                  className="w-full h-full cursor-pointer object-cover transition-transform transform hover:scale-105 "
                />
                </a>
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                <Badge className="bg-white text-accent-foreground font-bold">2024</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};