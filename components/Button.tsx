import { cn } from '@/lib/utils';

interface ButtonProps {
    buttonText: string;
    link: string;
    className?: string;
}

const Button = ({ buttonText, link, className }: ButtonProps) => {
    const handleClick = () => {
        window.location.href = link;
    };

    return (
        <button
            className={cn(
                "rounded-xl bg-white border-2 sm:border-4 border-black font-bold",
                "text-4xl sm:text-5xl md:text-6xl lg:text-8xl",
                "pt-4 sm:pt-6 md:pt-7 lg:pt-10 px-2",
                "cursor-pointer",
                "focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50",
                className
            )}
            style={{ fontFamily: 'Areeeb', lineHeight: '0.7' }}
            onClick={handleClick}
        >
            {buttonText}
        </button>
    );
};

export default Button;
