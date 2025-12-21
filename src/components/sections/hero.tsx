import Link from 'next/link';
import { ArrowRight, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { heroData, socialLinks } from '@/data/portfolio-data';
import { SkillsMarquee } from '@/components/ui/skills-marquee';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center">
      <div className="flex flex-col items-center gap-6">
        <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight">
          <span className="text-foreground">Amit </span>
          <span className="text-secondary">Divekar</span>
        </h1>
        <p className="text-xl md:text-2xl text-primary font-medium">
          {heroData.title}
        </p>
        <p className="max-w-3xl text-lg text-foreground/80 leading-relaxed">
          {heroData.bio}
        </p>
        
        {/* Skills Marquee */}
        <div className="w-full max-w-5xl my-8">
          <SkillsMarquee />
        </div>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
          <Button asChild size="lg" className="group">
            <Link href={heroData.contactLink}>
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="group">
            <Link href="/cv" target="_blank" rel="noopener noreferrer">
              View Resume
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
           <Button asChild size="lg" variant="outline" className="group">
            <Link href={socialLinks.github} target="_blank" rel="noopener noreferrer">
              GitHub Profile
              <Github className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
