import Image from 'next/image'
import React from 'react'

type ArticleProps = {
    title: string;
    description: string;
    image: {
        src: string;
        alt: string;
    };
}
const AboutCard = ({ title, description, image }:ArticleProps) => {

  return (
    <article className='p-12 bg-black rounded-3xl max-w-85 md:max-w-105 h-full'>
        <div className='flex flex-col text-white'>
            <Image src={image.src} width={32} height={32} className='size-8 mb-6' alt={image.alt}/>
            <div>
                <h2 className='font-ibm-plex-mono font-bold text-3xl mb-4'>{title}</h2>
                <p className='font-inter text-sm'>
                {description}
                </p>
            </div>
        </div>
    </article>
  )
}

export default AboutCard