import Image from 'next/image'
import React from 'react'

type ButtonProps =
    { size?: "small" | "medium" | "large", children: React.ReactNode, className?: string } 
const Button = ({ size = "medium", children, className }: ButtonProps) => {
    const sizeMap = {
        "small": "h-8 px-4",
        "medium": "h-14 px-6",
        "large": "h-20 px-8",
    }

    const sizeClass = sizeMap[size] || sizeMap["medium"]; // Default to "medium" if size is invalid

    return (
        <button className={`inline-flex items-center rounded-4xl justify-center cursor-pointer gap-2 text-nowrap w-fit relative disabled:pointer-events-none text-white bg-black disabled:bg-gray-400  py-2 transition-shadow duration-300 hover:shadow-[4px_4px_0px_0px_#4A4A4A] ${sizeClass} ${className}`}>
            {children}
            <Image src="/arrow-right.svg" width={24} height={24} alt='arrow-right' />
        </button>
    )
}

export default Button