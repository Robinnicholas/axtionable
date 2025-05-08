import { FlashBadge } from "../components/Badge";
import Button from "../components/Button";
import { Container } from "../components/Container";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <section className="pt-10 pb-14 md:pb-28 md:pt-16 lg:pb-32 lg:pt-28">
        <Container>
          <div>
            <FlashBadge />
            <p className="font-inter text-sm mt-2.5 mb-4 md:mt-2 md:mb-8 lg:mb-12">Personalized job matches, real HR <br /> 
            connections, and no time wasted - just the <br /> 
            right opportunities for you.</p>
            <h1 className="text-black md:text-7xl font-ibm-plex-mono font-bold text-6xl lg:text-9xl">Discover <br className="md:hidden" /> Jobs <br /> like Never <br className="md:hidden" />
            <span>before.</span></h1>
          </div>
          <div className="mt-12 md:mt-16 lg:mt-24 h-11 md:h-20 bg-amber-200 rounded-4xl flex items-center justify-center">
            <p>search bar goes here</p>
          </div>
          <div className="flex justify-center">
          <Button className="mt-4 h-8 px-4 md:h-14 md:px-6 lg:h-20 lg:px-8">Get Curated Jobs</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
