import { SkillsMarquee } from '@/components/ui/skills-marquee';

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen flex items-center py-20">
      <div className="w-full space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Skills</h2>
          <p className="text-lg text-muted-foreground">
            My technical expertise.
          </p>
        </div>

        <div className="space-y-16">
          
          {/* Technical Skills Marquee */}
          <div className="space-y-8">
            <h3 className="text-2xl font-headline font-semibold text-center">Technical Skills</h3>
            
            {/* Animated marquee */}
            <div className="relative w-full max-w-[90vw] md:max-w-5xl mx-auto">
               <SkillsMarquee />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
