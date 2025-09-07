import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { socialLinks } from '@/data/portfolio-data';
import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import ContactForm from './contact-form';

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-6 sm:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Get In Touch</h2>
          <p className="text-lg text-muted-foreground mt-2">
            I'm open to discussing new opportunities and projects.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="md:col-span-2">
            <Card className="bg-card border-border/50">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Send me a message</CardTitle>
                    <CardDescription>I'll get back to you as soon as possible.</CardDescription>
                </CardHeader>
                <CardContent>
                    <ContactForm />
                </CardContent>
            </Card>
          </div>
          <div className="space-y-6">
            <h3 className="font-headline text-2xl font-semibold">Contact Information</h3>
            <div className="space-y-4 text-lg">
                <a href={`mailto:${socialLinks.email}`} className="flex items-center gap-4 group">
                    <Mail className="h-6 w-6 text-primary" />
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">{socialLinks.email}</span>
                </a>
                 <Link href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                    <Linkedin className="h-6 w-6 text-primary" />
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">Amit Divekar</span>
                </Link>
                 <Link href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                    <Github className="h-6 w-6 text-primary" />
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">@Amit-Divekar</span>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
