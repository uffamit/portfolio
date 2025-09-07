import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { heroData } from '@/data/portfolio-data';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center">
      <div className="flex flex-col items-center gap-6">
        <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight">
          {heroData.name}
        </h1>
        <p className="text-xl md:text-2xl text-primary font-medium">
          {heroData.title}
        </p>
        <p className="max-w-3xl text-lg text-foreground/80 leading-relaxed">
          {heroData.bio}
        </p>
        <Button asChild size="lg" className="mt-4 group">
          <Link href={heroData.contactLink}>
            Get in Touch
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
