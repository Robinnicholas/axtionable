import { FlashBadge, OutlineBadge } from "../components/Badge";
import Button from "../components/Button";
import { Container } from "../components/Container";
import Header from "../components/Layout/Header";
import AboutSection from "../components/Layout/AboutSection";
import TestimonialCard from "../components/TestimonialCard";

const testimonials = [
  {
    companyImage: {
      src: "caribou.svg",
      alt: "Caribou Logo",
    },
    socialImage: {
      src: "linkedin.svg",
      alt: "Linkedin Logo",
    },
    description: "I was skeptical at first, but this job platform exceeded my expectations. The AI-driven job matching system is incredibly accurate, helping me find roles that truly fit my experience and career ambitions. What I love most is how easy it is to apply directly and track my applications."
  },
  {
    companyImage: {
      src: "caribou.svg",
      alt: "Caribou Logo",
    },
    socialImage: {
      src: "x.svg",
      alt: "X Logo",
    },
    description: "This platform completely changed my job search! I found the perfect role in just a few weeks. Highly recommended!"
  },
  {
    companyImage: {
      src: "caribou.svg",
      alt: "Caribou Logo",
    },
    socialImage: {
      src: "linkedin.svg",
      alt: "Linkedin Logo",
    },
    description: "I was skeptical at first, but this job platform exceeded my expectations. The AI-driven job matching system is incredibly accurate, helping me find roles that truly fit my experience and career ambitions. What I love most is how easy it is to apply directly and track my applications."
  },
  {
    companyImage: {
      src: "caribou.svg",
      alt: "Caribou Logo",
    },
    socialImage: {
      src: "x.svg",
      alt: "X Logo",
    },
    description: "This platform completely changed my job search! I found the perfect role in just a few weeks. Highly recommended!"
  }
]
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
      <AboutSection />
      <section className="relative pb-25 md:pb-32 lg:pb-40">
        <div className="absolute inset-y-0 right-0 left-[90%] bg-linear-to-r to-white from-white/0 z-10"></div>
        <div className="absolute inset-y-0 right-[90%] left-0 bg-linear-to-r to-white/0 from-white z-10"></div>
        <Container>
          <div className="flex flex-col items-center">
            <OutlineBadge className="mb-4">Testimonials</OutlineBadge>
            <p className="font-ibm-plex-mono font-bold text-lg">See why our users love axtionable.</p>
          </div>
          </Container>
          <div className="overflow-x-hidden my-8 md:my-16">
            <div className="flex gap-9">
              <ul className="animate-marquee flex flex-row shrink-0 gap-9 justify-between">
                {testimonials.map((testimonial, idx) => {
                  return (
                    <li key={idx} className="shrink-0">
                      <TestimonialCard
                        companyImage={testimonial.companyImage}
                        socialImage={testimonial.socialImage}
                        description={testimonial.description}
                      />
                    </li>
                  )
                })}
              </ul>
              <ul className="animate-marquee flex flex-row shrink-0 gap-9 justify-between">
                {testimonials.map((testimonial, idx) => {
                  return (
                    <li key={idx} className="shrink-0">
                      <TestimonialCard
                        companyImage={testimonial.companyImage}
                        socialImage={testimonial.socialImage}
                        description={testimonial.description}
                      />
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
          <Container>
          <div className="flex justify-center">
            <Button className="h-8 px-4 md:h-14 md:px-6">Get Curated Jobs</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
