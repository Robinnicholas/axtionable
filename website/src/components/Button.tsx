import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

// Define the base props
type BaseButtonProps = {
    variant?: 'dark' | 'outline',
    size?: "small" | "medium" | "large",
    children: React.ReactNode,
    hasIcon?: boolean,
    className?: string,
}

// Define props for button type
type ButtonTypeProps = BaseButtonProps & {
    type: "button",
}

// Define props for link type
type LinkTypeProps = BaseButtonProps & {
    type: "link",
    href: string, // href is mandatory when type is "link"
}

// Combine the two types using a union
type ButtonProps = ButtonTypeProps | LinkTypeProps;

const Button = ({ variant = 'dark', size = "medium", hasIcon = false, children, className, type = "button", ...props }: ButtonProps) => {
    const sizeMap = {
        "small": "h-8 px-4",
        "medium": "h-14 px-6",
        "large": "h-20 px-8",
    }

    const sizeClass = sizeMap[size] || sizeMap["medium"]; // Default to "medium" if size is invalid

    const outline = "bg-accent text-black border border-[#4A4A4A]"
    const dark = "text-white bg-black"

    const commonClasses = `inline-flex items-center rounded-4xl justify-center cursor-pointer gap-2 text-nowrap w-fit relative disabled:pointer-events-none disabled:bg-gray-400 py-2 transition-shadow duration-300 hover:shadow-[4px_4px_0px_0px_#4A4A4A] ${sizeClass} ${className} ${variant === 'outline' ? outline : dark}`;

    if (type === "link") {
        return (
            <Link href={(props as LinkTypeProps).href} className={commonClasses}>
                {children}
                {hasIcon && <Image src="/arrow-right.svg" width={24} height={24} alt='arrow-right' />}
            </Link>
        );
    }

    return (
        <button className={commonClasses}>
            {children}
            {hasIcon && <Image src="/arrow-right.svg" width={24} height={24} alt='arrow-right' />}
        </button>
    );
}

export default Button;