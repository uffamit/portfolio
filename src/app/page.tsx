import ParticleBackground from '@/components/particle-background';
import Header from '@/components/header';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Experience from '@/components/sections/experience';
import Projects from '@/components/sections/projects';
import Certifications from '@/components/sections/certifications';
import Skills from '@/components/sections/skills';
import Contact from '@/components/sections/contact';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
      <ParticleBackground />
      <Header />
      <main className="container mx-auto px-6 sm:px-8">
        <div className="flex flex-col gap-24 sm:gap-32 md:gap-48">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Certifications />
          <Skills />
        </div>
      </main>
      <div className="mt-24 sm:mt-32 md:mt-48">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
