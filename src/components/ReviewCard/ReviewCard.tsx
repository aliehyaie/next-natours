import React from 'react';
import Image from "next/image";

const ReviewCard: React.FC<{ user: string; title: string; userPic: string, description: string }> = ({
                                                                                                         user,
                                                                                                         userPic,
                                                                                                         title,
                                                                                                         description
                                                                                                     }) => {
    return (
        <div
            className='w-9/12 m-auto shadow-[0_3rem_6rem_rgba(0,0,0,0.1)] p-16 bg-white/60 rounded text-base -skew-x-12 group'>
            <div className='skew-x-12'>
                <figure className='w-36 h-36 story-circle bg-secondaryLight float-left mr-8 relative'>
                    <Image src={userPic}
                           className='scale-150 transition-all duration-500
                            group-hover:blur-sm
                            group-hover:brightness-75
                            group-hover:scale-100'
                           alt='Person on a tour' style={{objectFit: 'cover'}}
                           fill/>
                    <figcaption className='absolute top-1/2 left-1/2 text-white uppercase text-center
                     text-lg translate-y-[20%] -translate-x-1/2 opacity-0
                     transition-all duration-500
                       group-hover:-translate-y-1/2 group-hover:opacity-100
                     '>
                        {user}
                    </figcaption>
                </figure>
                <h3 className='tertiary-header mb-4'>{title}</h3>
                <p>
                    {description}
                </p>
            </div>
        </div>
    );
};

export default ReviewCard;