import { Badge } from '@/components/ui/badge';
import { skillsData } from '@/data/portfolio-data';

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen flex items-center">
      <div className="w-full space-y-12">
        <div className="text-center">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Skills</h2>
          <p className="text-lg text-muted-foreground mt-2">
            My technical expertise and soft skills.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-headline font-semibold text-center">Technical Skills</h3>
            <div className="flex flex-wrap justify-center gap-3 p-6 rounded-lg bg-background/20 backdrop-blur-lg border border-border/40 shadow-lg">
              {skillsData.technical.map((skill) => (
                <Badge key={skill} className="text-sm px-4 py-2" variant="default">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-headline font-semibold text-center">Soft Skills</h3>
            <div className="flex flex-wrap justify-center gap-3 p-6 rounded-lg bg-background/20 backdrop-blur-lg border border-border/40 shadow-lg">
              {skillsData.soft.map((skill) => (
                <Badge key={skill} className="text-sm px-4 py-2" variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
