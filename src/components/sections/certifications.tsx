import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { certificationsData } from '@/data/portfolio-data';
import { Award } from 'lucide-react';

export default function Certifications() {
  return (
    <section id="certifications" className="min-h-screen flex items-center">
      <div className="w-full space-y-12">
        <div className="text-center">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Certifications</h2>
          <p className="text-lg text-muted-foreground mt-2">
            My credentials and qualifications.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificationsData.map((cert) => (
            <Card key={cert.title} className="bg-background/20 backdrop-blur-lg border border-border/40 shadow-lg">
              <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <CardTitle className="font-headline text-xl">{cert.title}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">Issued by {cert.issuer}</p>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <Badge key={skill} variant="outline">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
