import Link from 'next/link';
import { Github, Linkedin } from 'lucide-react';
import { socialLinks } from '@/data/portfolio-data';

export default function Footer() {
  return (
    <footer className="bg-background/80 py-8 mt-16">
      <div className="container mx-auto px-6 sm:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Amit Divekar. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github className="h-6 w-6 text-muted-foreground transition-colors hover:text-foreground" />
          </Link>
          <Link href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="h-6 w-6 text-muted-foreground transition-colors hover:text-foreground" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
