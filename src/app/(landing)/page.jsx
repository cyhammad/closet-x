import { Hero } from "./_components/Hero";
import { Features } from "./_components/Features";
import { FAQ } from "./_components/FAQ";
import { Newsletter } from "./_components/Newsletter";

export default function LandingPage() {
  return (
    <div className="w-full flex flex-col items-center overflow-hidden">
      <Hero />
      <Features />
      <FAQ />
      <Newsletter />
    </div>
  );
}
