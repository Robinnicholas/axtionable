import Image from 'next/image'
import React from 'react'

export const FullTimne = () => {
  return (
    <div className='inline-flex w-32 h-7 items-center justify-center rounded-4xl gap-1.5 border-[0.5px] border-[#6C757D] px-2 py-1.5'>
        <Image src="/clock.svg" width={16} height={16} alt='clock-icon'/>
        <span className='font-ibm-plex-mono text-sm'>Full-time</span>
    </div>
  )
}

export const Remote = () => {
  return (
    <div className='inline-flex w-24 h-7 items-center justify-center rounded-4xl gap-1.5 border-[0.5px] border-[#6C757D] px-2 py-1.5'>
        <span className='font-ibm-plex-mono text-sm'>Remote</span>
    </div>
  )
}

export const Applied = () => {
  return (
    <div className='inline-flex w-24 h-7 items-center justify-center rounded-4xl gap-1.5 border-[0.5px] border-[#6C757D] px-5 py-2.5 bg-success-green'>
        <Image src="/applied.svg" width={16} height={16} alt='applied-icon'/>
        <span className='font-ibm-plex-mono text-sm'>Applied</span>
    </div>
  )
}