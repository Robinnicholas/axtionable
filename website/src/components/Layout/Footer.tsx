import React from 'react'
import { Container } from '../Container'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='py-11.5 md:py-16 lg:py-12 bg-black'>
            <Container>
                <div className='md:flex md:justify-between mb-12 md:mb-24'>
                    <div className='mb-9 md:mb-0'>
                        <Image src="axtionable-white.svg" className="md:w-48 md:h-8 lg:hidden" width={146} height={24} alt="axtionable-logo" />
                        <Image src="axtionable-lg-white.svg" className="hidden lg:block" width={146} height={24} alt="axtionable-logo" />
                        <p className='mt-4 font-ibm-plex-mono md:text-base text-xs text-white mb-8'>Find opportunities that<br className='md:hidden' /> actually Make Sense.</p>
                        <ul className='flex gap-4'>
                            <li>
                                <Link href="/">
                                    <Image src="facebook-social.svg" width={24} height={24} alt='facebook-logo' />
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <Image src="x-social.svg" width={24} height={24} alt='x-logo' />
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <Image src="linkedin-social.svg" width={24} height={24} alt='linkedin-logo' />
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <Image src="insta-social.svg" width={24} height={24} alt='insta-logo' />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='md:flex md:gap-16'>
                        <div className='mb-6 md:mb-0'>
                            <p className='mb-4 md:mb-6 font-semibold font-ibm-plex-mono text-base text-white'>Company</p>
                            <ul className='md:space-y-4 font-inter text-sm text-[#AFB4B8]'>
                                <li><Link className='hover:underline hover:text-white' href="/">Help</Link></li>
                                <li><Link className='hover:underline hover:text-white' href="/">About Us</Link></li>
                                <li><Link className='hover:underline hover:text-white' href="/">Team</Link></li>
                            </ul>
                        </div>
                        <div>
                            <p className='mb-4 md:mb-6 font-semibold font-ibm-plex-mono text-base text-white'>Legal</p>
                            <ul className='md:space-y-4 font-inter text-sm text-[#AFB4B8]'>
                                <li><Link className='hover:underline hover:text-white' href="/">Privacy</Link></li>
                                <li><Link className='hover:underline hover:text-white' href="/">Terms</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <p className='md:text-center font-inter text-xs text-[#AFB4B8]'>© All Rights Reserved. 2025, axtionable.in.</p>
            </Container>
        </footer>
    )
}

export default Footer