import Image from "next/image"

type TestimonialCardProps = {
    companyImage: {
        src: string;
        alt: string;
    };
    socialImage: {
        src: string;
        alt: string;
    }
    description: string;
}

const TestimonialCard = ({companyImage,socialImage,description}:TestimonialCardProps) => {
  return (
    <article className="p-6 bg-accent rounded-2xl border border-tertiary-dark max-w-90">
        <div className="flex gap-2 mb-4">
            <Image src={companyImage.src} width={55} height={55} alt={companyImage.alt}/>
            <div className="min-w-42">
                <span className="mb-2 font-ibm-plex-mono text-base">Caribou</span>
                <p className="font-inter text-sm text-[#A1A1A1]">CEO, Theatre.JS</p>
            </div>
            <Image src={socialImage.src} width={24} height={24} alt={socialImage.alt}/>
        </div>
        <p className="font-inter text-sm">{description}</p>
    </article>
  )
}

export default TestimonialCard