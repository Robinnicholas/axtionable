import React from 'react'
import { Container } from '../Container'
import { OutlineBadge } from '../Badge'
import AboutCard from '../AboutCard';

const articleData = [
  {
    title: "Who we are",
    description: "We are an opportunity discovery platform that allows you to find tailor-made possibilities with a single click. We make job hunting as simple as getting groceries from Quick-Com.",
    image: {
      src: "search-refraction.svg",
      alt: "Search Refraction icon",
    },
  },
  {
    title: "What we do",
    description: "We deliver personalized leads to candidates who are seeking better career prospects and facilitate their growth trajectory.",
    image: {
      src: "target.svg",
      alt: "target icon",
    },
  },
  {
    title: "How we do",
    description: "We follow an approach which is a combination of our proprietary AI engine plus human intervention to pull out the best available job listings from the entire internet.",
    image: {
      src: "settings.svg",
      alt: "setting icon",
    },
  },
  {
    title: "Why we do",
    description: "We found gaps in the market where the right kind of talent doesn't find suitable employer. On the other hand employer find hiring challenges while scouting a good team player.",
    image: {
      src: "link.svg",
      alt: "Link icon",
    },
  },
];

const AboutSection = () => {
  return (
    <section className="py-16 md:py-32">
        <Container className="flex flex-col items-center">
          <OutlineBadge className="mb-4">About Us</OutlineBadge>
          <p className="font-ibm-plex-mono font-bold text-lg mb-9">See our mission and what drives us</p>
          <ul className="flex flex-wrap justify-center gap-7 md:gap-12 max-w-5xl">
            {articleData.map(article => {
              return (
                <li key={article.title}>
                  <AboutCard
                    key={article.title}
                    title={article.title}
                    description={article.description}
                    image={article.image}
                  />
                </li>
              )
            })}
          </ul>
        </Container>
      </section>
  )
}

export default AboutSection