
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { projectsData } from '@/data/portfolio-data';
import { Github, ExternalLink, FileText } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen flex items-center">
      <div className="w-full space-y-12">
        <div className="text-center">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Projects</h2>
          <p className="text-lg text-muted-foreground mt-2">
            A selection of my recent work.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <Card key={project.title} className="bg-background/20 backdrop-blur-lg border border-border/40 shadow-lg flex flex-col transition-all duration-300 hover:border-primary/50 hover:shadow-primary/20 hover:shadow-2xl">
              <CardHeader>
                <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button asChild variant="outline" className="w-full">
                  <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Link>
                </Button>
                {project.liveLink && (
                  <Button asChild className="w-full">
                    <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                )}
                {project.docLink && (
                  <Button asChild className="w-full">
                    <Link href={project.docLink} target="_blank" rel="noopener noreferrer">
                      <FileText className="mr-2 h-4 w-4" />
                      Docs
                    </Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

    