import React from 'react';

const TourCard: React.FC<{ className?: string, type?: 'primary' | 'secondary' | 'tertiary' }> = ({
                                                                                                     className = '',
                                                                                                     type = 'primary'
                                                                                                 }) => {
    const sideClasses = 'h-[31.25rem] transition-all duration-700 min-w-[350px] absolute top-0 left-0 backface-hidden ease shadow-[0_1.5rem_4rem_rgba(0,0,0,0.15)] rounded'
    console.log(type+'-gradient','secondary-gradient');

    return (
        <div
            className={`
            group
            relative
            w-full
            perspective-[93.75rem]
           ${className}`}>
            <div className={`${sideClasses} bg-primaryDark group-hover:-rotate-y-180`}>
                Front
            </div>
            <div className={`${sideClasses} ${type === 'primary' ? 'primary-gradient' : type==='secondary' ? 'secondary-gradient'
                : 'tertiary-gradient'}
                  rotate-y-180 group-hover:rotate-y-0`}>
                Back
            </div>
        </div>
    );
};

export default TourCard;