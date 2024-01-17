import About from "@/components/about";
import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro/>
      <SectionDivider/>
      <About/>
      {/*<Experience />*/}
      {/*<Contact />*/}
    </main>
  );
}
