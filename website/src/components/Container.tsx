import { cn } from '@/src/lib/utils';

export function Container({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<div
			className={cn('max-w-160 md:max-w-240 lg:max-w-356 mx-auto w-full px-5', className)}
		>
			{children}
		</div>
	);
}
