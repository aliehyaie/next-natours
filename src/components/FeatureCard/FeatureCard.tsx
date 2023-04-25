import React from 'react';
import Icon from "@/components/Icon/Icon";

const FeatureCard: React.FC<{ iconName: string; title: string; description: string; }> = ({
                                                                                              title,
                                                                                              iconName,
                                                                                              description
                                                                                          }) => {
    return (
        <div className='bg-white bg-opacity-80 text-base p-6 text-center rounded-sm shadow-[0_1rem_2.5rem_rgba(0,0,0,0.15)] flex flex-col gap-2.5
        transition-all duration-300
            hover:-translate-y-1.5
            max-w-[300px]

        '>
            <Icon className='text-6xl main-gradient bg-clip-text text-transparent' iconName={iconName}/>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default FeatureCard;