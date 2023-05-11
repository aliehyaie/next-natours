import React, {HTMLProps} from 'react';
import {twMerge} from "tailwind-merge";

const Radio: React.FC<{ className?: string } & HTMLProps<HTMLInputElement>> = ({className = '', ...props}) => {
    return (
        <div className='w-full'>
            <input
                {...props}
                className={twMerge('peer hidden', className)}
                type='radio'
            />
            <label className='cursor-pointer text-base flex gap-4 peer-checked:[&>span:after]:opacity-100' htmlFor={props.id}>
                <span className='h-7 w-7 rounded-full border-4 border-primary block
                flex items-center justify-center
                    after:block after:w-3.5 after:h-3.5 after:bg-primary after:rounded-full after:opacity-0 after:transition-all after:duration-200
                '/>
                {props.label}
            </label>
        </div>
    );
};

export default Radio;