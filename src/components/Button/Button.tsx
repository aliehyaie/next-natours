import React, {PropsWithChildren} from 'react';
import {twMerge} from "tailwind-merge";

const Button: React.FC<PropsWithChildren & { className?: string; type?: 'primary' | 'secondary' }> = ({
                                                                                                          children,
                                                                                                          type = 'primary',
                                                                                                          className = ''
                                                                                                      }) => {
    return (
        <button className={`
        ${twMerge (type === 'primary' ? `bg-white text-text py-4
         rounded-full
         transition-all
         relative
        hover:shadow-button-hover
        active:shadow-button-active
        before:content-[""]
        before: transition-all
        before:duration-300
        before:inline-block
        before:h-full
        before:w-full
        before:rounded-full
        before:bg-white
        before:absolute
        before:top-0
        before:left-0
        before:-z-10
        before::bg-white
        hover:before:opacity-0
        hover:before:scale-x-[1.4]
        hover:before:scale-y-[1.6]
        px-10 inline-block hover:-translate-y-1 active:-translate-y-px
        ` : `text-primary inline-block border-b border-primary 
        p-1 text-base 
        transition-all duration-200
        hover:bg-primary hover:text-white hover:shadow-[0_1rem_2rem_rgba(0,0,0,0.15)] hover:-translate-y-0.5
        focus:outline-none
        active:shadow-[0_0.5rem_1rem_rgba(0,0,0,0.15)] active:translate-0
        `, className)}
        `}>
            {children}
        </button>
    );
};

export default Button;