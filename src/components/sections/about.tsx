import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { aboutData } from '@/data/portfolio-data';
import { GraduationCap, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center" aria-labelledby="about-heading">
      <div className="w-full space-y-12">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          {/* Profile Image with Animated Frame */}
          <div className="relative w-48 h-48 shrink-0">
            {/* Animated rotating gradient border */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-purple-500 to-secondary animate-spin-slow opacity-75 blur-sm" aria-hidden="true"></div>
            
            {/* Inner glow ring */}
            <div className="absolute inset-0.5 rounded-full bg-gradient-to-br from-primary/50 to-secondary/50 animate-pulse" aria-hidden="true"></div>
            
            {/* Image container */}
            <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-primary shadow-2xl">
              <Image
                src="/images/amit-divekar.jpg"
                alt="Professional portrait of Amit Divekar, Software Engineer specializing in Cloud, DevOps, and Full-Stack Development"
                fill
                sizes="(max-width: 768px) 150px, 192px"
                className="object-cover"
                priority
                loading="eager"
              />
            </div>
            
            {/* Orbiting particles */}
            <div className="absolute inset-0 animate-spin-slow" aria-hidden="true">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full blur-[1px]"></div>
            </div>
            <div className="absolute inset-0 animate-spin-slow animation-delay-2000" aria-hidden="true">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-secondary rounded-full blur-[1px]"></div>
            </div>
            <div className="absolute inset-0 animate-spin-slow animation-delay-4000" aria-hidden="true">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-purple-500 rounded-full blur-[1px]"></div>
            </div>
          </div>
          
          <div className="text-center md:text-left">
            <h2 id="about-heading" className="font-headline text-4xl md:text-5xl font-bold">About - Full-Stack Software Engineer</h2>
            <p className="text-lg text-muted-foreground mt-2 max-w-4xl">
              {aboutData.bio}
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <Card className="bg-background/15 backdrop-blur-lg border border-border/40 shadow-lg transition-all duration-300 hover:border-primary/50 hover:shadow-primary/20 hover:shadow-2xl">
            <CardHeader className="flex flex-row items-center gap-4">
              <GraduationCap className="h-8 w-8 text-primary" />
              <CardTitle className="font-headline text-2xl">Education</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <h3 className="font-semibold text-lg">{aboutData.education.degree}</h3>
              <p className="text-muted-foreground">{aboutData.education.institution}</p>
              <p className="text-sm text-muted-foreground">{aboutData.education.duration} &bull; {aboutData.education.cgpa}</p>
              <div>
                <h4 className="font-medium mb-2">Relevant Coursework:</h4>
                <div className="flex flex-wrap gap-2">
                  {aboutData.education.courses.map((course) => (
                    <Badge key={course} variant="secondary">{course}</Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-background/15 backdrop-blur-lg border border-border/40 shadow-lg transition-all duration-300 hover:border-primary/50 hover:shadow-primary/20 hover:shadow-2xl">
            <CardHeader className="flex flex-row items-center gap-4">
              <Sparkles className="h-8 w-8 text-primary" />
              <CardTitle className="font-headline text-2xl">Hobbies & Interests</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 list-inside">
                {aboutData.hobbies.map((hobby) => (
                  <li key={hobby} className="flex items-start gap-3">
                     <span className="h-2 w-2 rounded-full bg-primary mt-2.5 shrink-0" />
                    <span>{hobby}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
