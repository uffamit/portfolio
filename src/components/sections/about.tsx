import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { aboutData } from '@/data/portfolio-data';
import { GraduationCap, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center">
      <div className="w-full space-y-12">
        <div className="text-center">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">About Me</h2>
          <p className="text-lg text-muted-foreground mt-2">
            My education, passions, and personal interests.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <Card className="bg-background/20 backdrop-blur-lg border-border/20 shadow-lg">
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
          <Card className="bg-background/20 backdrop-blur-lg border-border/20 shadow-lg">
            <CardHeader className="flex flex-row items-center gap-4">
              <Sparkles className="h-8 w-8 text-primary" />
              <CardTitle className="font-headline text-2xl">Hobbies & Interests</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 list-inside">
                {aboutData.hobbies.map((hobby) => (
                  <li key={hobby} className="flex items-center gap-3">
                     <span className="h-2 w-2 rounded-full bg-primary" />
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
