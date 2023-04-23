import React, {PropsWithChildren} from 'react';

const Container: React.FC<PropsWithChildren & { className?: string }> = ({className, children}) => {
    return (
        <div className={`max-w-[1200px] m-auto px-2 ${className}`}>
            {children}
        </div>
    );
};

export default Container;