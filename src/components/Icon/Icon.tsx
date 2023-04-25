import React from 'react';

const Icon: React.FC<{ className?: string; iconName?: string }> = ({className, iconName}) => {
    return (
        <i className={`${iconName} ${className}`}/>
    );
};

export default Icon;