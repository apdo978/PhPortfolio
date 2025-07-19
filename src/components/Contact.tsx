import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Linkedin, FileText, Calendar, Loader2 } from "lucide-react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { useState } from "react";
const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "talktoboda01@gmail.com",
    href: "mailto:talktoboda01@gmail.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+01271175532",
    href: "https://api.whatsapp.com/send/?phone=0201271175532&text&type=phone_number&app_absent=0"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "6th of October City, Egypt",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/abdelrhman-muhamed",
    href: "https://www.linkedin.com/in/abd-el-rahman-abd-el-ghafar-a466a8276"
  }
];
const formSchema = z.object({
  firstName: z.string().min(2, { message: "Name must be at least 2 characters" }),
  lastName: z.string().min(2, { message: "Name must be at least 2 characters" }),
  phoneInput: z.string().min(11, { message: "Phone number must be at least 11 digits" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  // subject: z.string().min(5, { message: "Subject must be at least 5 characters" }),
  messageName: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

export const Contact = () => {
    const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneInput: "",
      messageName: "",
    },
  });
  

   const [isSending, setIsSending] = useState(false);
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    
    const SERVICE_ID = "service_67kb1dc";
    const TEMPLATE_ID = "template_y85lxo7";
    const PUBLIC_KEY = "pTJXgAYxxtFObHDBu";
     setIsSending(true);
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, values, PUBLIC_KEY)
      .then(() => {
        toast.success("Message sent successfully!");
    toast.success("Thanks for your message! I'll get back to you soon.");

      form.reset();
    setIsSending(false);

      })
      .catch((error) => {
          toast.error("Failed to send message. Please try again.");
    setIsSending(false);

        });
   
  };
  return (
    <section id="contact" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">Let's Connect</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on pharmaceutical initiatives or discuss opportunities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <Card className="card-shadow mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-secondary">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-smooth group"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-secondary">{info.label}</p>
                        <p className="text-muted-foreground">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="space-y-4">
              <a href="/Abdelrhman.pdf"
                  target="_blank"
                  download
                  rel="noopener noreferrer">
                <Button className="w-full justify-start" size="lg">
                  <FileText className="h-5 w-5 mr-3" />
                  Download Resume
                </Button>
              </a>
              <a href="#contact">
                <Button  variant="outline" className="w-full justify-start" size="lg">
                  <Calendar className="h-5 w-5 mr-3" />
                  Schedule Consultation
                </Button>
              </a>
            </div>

            {/* Availability */}
            <Card className="card-shadow mt-8">
              <CardHeader>
                <CardTitle className="text-lg">Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Consultations</span>
                    <Badge variant="outline">Limited</Badge>

                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Speaking Engagements</span>
                    <Badge className="bg-accent/10 text-accent">Available</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Contract Work</span>
                    <Badge className="bg-accent/10 text-accent">Available</Badge>

                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="card-shadow">
            <CardHeader>
              <CardTitle className="text-2xl text-secondary">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-secondary mb-2 block">
                        First Name
                    </label>
                   <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <Input placeholder="John" {...field} />
                      <FormMessage />
                    </FormItem>
                  )}
                />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-secondary mb-2 block">
                      Last Name
                    </label>
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <Input placeholder="Doe" {...field} />
                      <FormMessage />

                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-secondary mb-2 block">
                    Email
                  </label>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <Input type="email" placeholder="john.doe@example.com" {...field} />
                      <FormMessage />

                      </FormItem>
                    )}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-secondary mb-2 block">
                    phoneInput
                  </label>
                  <FormField
                    control={form.control}
                    name="phoneInput"
                    render={({ field }) => (
                      <FormItem>
                        <Input placeholder="Your phone number " {...field} />
                      <FormMessage />

                      </FormItem>
                    )}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-secondary mb-2 block">
                    Message
                  </label>
                  <FormField
                    control={form.control}
                    name="messageName"
                    render={({ field }) => (
                      <FormItem>
                        <Textarea
                          placeholder="Tell me about your project or question..."
                          className="min-h-32"
                          {...field}
                        />
                      <FormMessage />

                      </FormItem>
                    )}
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                   {isSending ? (
          <Loader2 className="animate-spin mr-2 h-4 w-4" />
        ) :  "Send Message"}
                </Button>
              </form>
            </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};