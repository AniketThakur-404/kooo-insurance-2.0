import { home, solutionsPage } from "@/content/site";
import { Hero } from "@/components/home/hero";
import { SolutionsGrid } from "@/components/home/solutions-grid";
import { Testimonials } from "@/components/home/testimonials";
import { InsurersGrid } from "@/components/home/insurers-grid";
import { ImageBand } from "@/components/sections/image-band";
import { NumberedRows } from "@/components/sections/numbered-rows";
import { CtaBand } from "@/components/sections/cta-band";

export default function Home() {
  return (
    <>
      {/* The hero is sticky inside this wrapper, so the solutions panel slides over it. */}
      <div className="relative">
        <Hero />
        <SolutionsGrid />
      </div>
      <ImageBand
        image="/images/photos/pexels-1128317.jpg"
        title={home.trusted.title}
        link={{ label: "About Kooo", href: "/about" }}
      />
      <NumberedRows title="Why choose us" items={home.whyChooseUs} />
      <Testimonials />
      <InsurersGrid />
      <CtaBand title={solutionsPage.cta.title} text={solutionsPage.cta.text} label="Let’s Talk" />
    </>
  );
}
