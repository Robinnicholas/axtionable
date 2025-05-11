import React, { useId } from 'react'
import { cn } from '../lib/utils'

type InputBaseProps = {
    errorMessage?: string;
    className?: string;
    inputwrapperClassNames?: string;
};
type InputType = 'text' | 'email' | 'tel';


export type InputProps = {
    type: InputType;
    label: string;
    field?: string;
} & InputBaseProps &
    React.InputHTMLAttributes<HTMLInputElement>;


const Input = ({
    type,
    label,
    className,
    errorMessage,
    inputwrapperClassNames,
    ...rest
}: InputProps) => {
    const fieldId = useId();
    return (
        <div
            className={cn('relative', inputwrapperClassNames)}
            data-testid="input-wrapper"
        >
            <label
                className={cn('pb-2 text-xs text-[#6A6A6A]')}
                htmlFor={fieldId}
            >
                {label}
            </label>
            <input
                className={cn("h-13 w-full rounded border px-4 py-2 text-black outline-none transition duration-200 ease-in-out hover:border-action  border-[#A1A1A18A] focus:border-black text-sm",
                    className
                )}
                id={fieldId}
                placeholder={label}
                type={type}
                {...rest}
            />
            {errorMessage && (
                <p className="text-danger-red pt-1 text-[10px]">
                    {errorMessage}
                </p>
            )}
        </div>
    )
}

export default Input