import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar } from 'lucide-react';
import ParticleBackground from '@/components/particle-background';
import Header from '@/components/header';
import Footer from '@/components/footer';

export const metadata = {
  title: "Blogs",
  description: "Blogs, project breakdowns, and tech tutorials.",
  alternates: {
    canonical: 'https://amitdevx.tech/blogs',
  },
  openGraph: {
    title: "Blogs | Amit Divekar",
    description: "Blogs, project breakdowns, and tech tutorials.",
    url: 'https://amitdevx.tech/blogs',
    type: 'website',
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="relative overflow-x-hidden">
      <ParticleBackground />
      <Header />
      <section className="min-h-screen pt-32 pb-12 px-6 sm:px-8 flex flex-col items-center">
        <div className="container mx-auto max-w-5xl space-y-12">
        
        {/* Header - Matches your Projects Section */}
        <div className="text-center space-y-4">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">
            Blogs
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Deep dives into code, bugs I've fixed, and systems I've built.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <Card 
              key={post.slug} 
              // This class string matches your Projects card style exactly
              className="bg-background/20 backdrop-blur-lg border border-border/40 shadow-lg flex flex-col transition-all duration-300 hover:border-primary/50 hover:shadow-primary/20 hover:shadow-2xl group"
            >
              <CardHeader>
                <div className="flex justify-between items-center mb-4">
                  <Badge variant="outline" className="font-normal opacity-70 flex gap-1 items-center">
                    <Calendar className="w-3 h-3" /> {post.date}
                  </Badge>
                </div>
                <CardTitle className="font-headline text-2xl group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription className="line-clamp-2 mt-2 text-base">
                  {post.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                    {post.tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                        </Badge>
                    ))}
                </div>
              </CardContent>

              <CardFooter>
                <Button asChild variant="ghost" className="w-full justify-between group-hover:bg-primary/10">
                  <Link href={`/blogs/${post.slug}`}>
                    Read Article <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
    <Footer />
    </div>
  );
}
