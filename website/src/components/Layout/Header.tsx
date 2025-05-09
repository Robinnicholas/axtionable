import React from 'react'
import { Container } from '../Container'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="py-10 md:pt-12 md:pb-16 lg:pb-28">
        <Container>
          <Image src="axtionable.svg" className="lg:hidden" width={146} height={24} alt="axtionable-logo" />
          <Image src="axtionable-lg.svg" className="hidden lg:block" width={146} height={24} alt="axtionable-logo" />
        </Container>
      </header>
  )
}

export default Header