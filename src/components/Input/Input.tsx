import React, {HTMLInputTypeAttribute} from 'react';
import {twMerge} from "tailwind-merge";

const Input: React.FC<{ className?: string } & React.HTMLProps<HTMLInputElement>> = ({className = '', ...props}) => {
    return (
        <div>
            <input
                {...props}
                className={twMerge('py-4 px-5 text-base rounded-sm bg-white/50 border-b-2 border-transparent outline-none ' +
                    'block w-full placeholder:text-grey-dark2 ' +
                    'focus:border-b-2 focus:border-primary focus:shadow-[0_1rem_2rem_rgba(0,0,0,0.1)] ' +
                    'focus:invalid:border-secondaryDark ' +
                    'peer transition-all duration-300 ease-linear', className)}
            />
            <label className='text-xs font-bold block ml-5 mt-2  transition-all duration-300 ease-linear peer-placeholder-shown:-translate-y-16 peer-placeholder-shown:opacity-0 peer-placeholder-shown:invisible
            peer-placeholder-shown:invisible
         ' htmlFor={props.id}>
                {props.label}
            </label>
        </div>
    );
};

export default Input;