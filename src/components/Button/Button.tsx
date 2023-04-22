import React, {PropsWithChildren} from 'react';

const Button: React.FC<PropsWithChildren & {className?:string}> = ({children, className = ''}) => {
    return (
        <button className={`bg-white text-text py-4
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
           ${className}
        `}>
            {children}
        </button>
    );
};

export default Button;