import { Button } from "@/components/ui/button";
import { ParallaxLayer } from "@/components/parallax/parallax-layer";
import { RevealSection } from "@/components/sections/reveal-section";
import { HeroCanvas } from "@/components/three/hero-canvas";

export default function Home() {
  return (
    <main className="flex-1">
      <section className="relative flex h-screen items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <HeroCanvas />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold tracking-tight md:text-7xl">Kooo Insurance</h1>
          <p className="mt-4 text-lg text-muted-foreground">Next.js · GSAP · Lenis · Three.js · Framer Motion</p>
          <Button className="mt-8" size="lg">
            Get a quote
          </Button>
        </div>
      </section>

      <section className="relative flex h-[120vh] items-center justify-center overflow-hidden">
        <ParallaxLayer speed={200} className="absolute left-[10%] top-1/4 size-40 rounded-full bg-indigo-500/30 blur-2xl" />
        <ParallaxLayer speed={-150} className="absolute right-[15%] bottom-1/4 size-56 rounded-full bg-pink-500/30 blur-2xl" />
        <ParallaxLayer speed={60}>
          <h2 className="text-4xl font-semibold md:text-6xl">Parallax layers</h2>
        </ParallaxLayer>
      </section>

      <RevealSection />
    </main>
  );
}
