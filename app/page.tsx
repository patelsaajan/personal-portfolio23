import Hero from "@/components/hero/index";
import About from "@/components/about";
import Bio from "@/components/bio/index";
import Projects from "@/components/projects";
import PopoutCards from "@/components/popoutCards";
import Badges from "@/components/grid/badgeLayout";

export default function Page() {
  return (
    <>
      <Hero />
      <About />
      <Bio />
      <Projects />
      <PopoutCards />
      <Badges />
    </>
  );
}
