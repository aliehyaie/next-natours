import React from 'react';
import Button from "@/components/Button/Button";

const TourCard: React.FC<{
    className?: string, type?: 'primary' | 'secondary' | 'tertiary',
    title: string, facilities: string[],
    price: number
}> = ({
          className = '',
          type = 'primary',
          title,
          facilities,
          price
      }) => {
    const sideClasses = 'h-full transition-all ' +
        'duration-700 w-full  absolute top-0 left-0' +
        ' backface-hidden ease shadow-[0_1.5rem_4rem_rgba(0,0,0,0.15)] rounded'

    return (
        <div
            className={`
            group
            relative
            w-[350px]
            h-[32.25rem]
            perspective-[93.75rem]
           ${className}`}>
            <div className={`${sideClasses} group-hover:-rotate-y-180`}>
                <div
                    style={{
                        clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)',
                        backgroundImage: type === 'primary' ?
                            "linear-gradient(to right bottom, #7ed56f , #28b485), url('/img/nat-6.jpg')" :
                            type === 'secondary' ? "linear-gradient(to right bottom, #ffb900 , #ff7730), url('/img/nat-5.jpg')" :
                                "linear-gradient(to right bottom, #2998ff , #5643fa), url('/img/nat-7.jpg')"
                    }}
                    className={'bg-cover rounded-t h-56 bg-blend-screen'}/>
                <h4 className='text-3xl font-light uppercase text-white absolute text-right
                 w-9/12 top-24 leading-loose right-5'>
                    <span
                        className={`py-4 px-5 box-decoration-clone ${type === 'primary' ? 'bg-gradient-to-br from-primaryLight/80 to-primaryDark/80'
                            : type==='secondary' ? 'bg-gradient-to-br from-secondaryLight/80 to-secondaryDark/80' 
                                : 'bg-gradient-to-br from-tertiaryLight/80 to-tertiaryDark/80'}`}>
                        {title}
                    </span>
                </h4>
                <ul className='list-none w-5/6 m-auto mt-2'>
                    {facilities.map((facility, index) => <li
                        className='text-center text-sm p-4 [&:not(:last-child)]:border-b border-grey-light2 '
                        key={index}>{facility}</li>)}
                </ul>
            </div>
            <div
                className={`${sideClasses} ${type === 'primary' ? 'primary-gradient' : type === 'secondary' ? 'secondary-gradient'
                    : 'tertiary-gradient'}
                  rotate-y-180 group-hover:rotate-y-0
                   flex flex-col justify-center gap-20
                  `}>
                    <div className='flex flex-col gap-2 items-center text-white'>
                        <span className='text-sm uppercase'>Only</span>
                        <span className='text-6xl font-thin'>${price}</span>
                    </div>
                    <Button className='justify-center self-center' type='primary'>
                        Book now!
                    </Button>
            </div>
        </div>
    );
};

export default TourCard;