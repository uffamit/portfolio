
import Footer from '@/components/footer';
import Header from '@/components/header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download } from 'lucide-react';
import Link from 'next/link';

export default function NotesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-6 sm:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">Notes</h1>
          <p className="text-lg text-muted-foreground mt-2">
            Downloadable notes and resources.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <Card className="bg-background/20 backdrop-blur-lg border border-border/40 shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">SYBSc CS Practicals</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-muted-foreground">
                  sybsc cs practical DS and DBMS(SQL)
                </p>
                <Button asChild className="group w-full sm:w-auto">
                  <Link href="/doc/dsa_and_sql.pdf" target="_blank" download>
                    Download PDF
                    <Download className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-0.5" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
          <p className="text-center text-sm text-destructive mt-4">
            For educational purposes only. Any use in cheating or anything happened the IG group and owner of this site is not responsible.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
