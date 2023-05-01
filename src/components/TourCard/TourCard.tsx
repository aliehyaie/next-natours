import React from 'react';

const TourCard: React.FC<{
    className?: string, type?: 'primary' | 'secondary' | 'tertiary',
    title: string, facilities: string[]
}> = ({
          className = '',
          type = 'primary',
          title,
          facilities
      }) => {
    const sideClasses = 'h-[32.25rem] transition-all ' +
        'duration-700 min-w-[350px] absolute top-0 left-0' +
        ' backface-hidden ease shadow-[0_1.5rem_4rem_rgba(0,0,0,0.15)] rounded overflow-hidden'

    return (
        <div
            className={`
            group
            relative
            w-full
            perspective-[93.75rem]
           ${className}`}>
            <div className={`${sideClasses} group-hover:-rotate-y-180`}>
                <div
                    style={{
                        clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)',
                        backgroundImage: type === 'primary' ?
                            "linear-gradient(to right bottom, #ffb900 , #ff7730), url('/img/nat-5.jpg')" :
                            type === 'secondary' ? "linear-gradient(to right bottom, #7ed56f , #28b485), url('/img/nat-6.jpg')" :
                                "linear-gradient(to right bottom, #2998ff , #5643fa), url('/img/nat-7.jpg')"
                    }}
                    className={`bg-cover h-56
                    bg-blend-screen
                 ${type === 'primary' ? '' : ''}`}/>
                <h4 className='text-3xl font-light uppercase text-white absolute text-right
                 w-9/12 top-[120px] right-5'>
                    <span
                        className={`py-4 px-5 box-decoration-clone ${type === 'primary' ? 'bg-gradient-to-br from-secondaryLight/80 to-secondaryDark/80' : ''}`}>
                        {title}
                    </span>
                </h4>
                <div className=''>
                    <ul className='list-none w-5/6 m-auto'>
                        {facilities.map((facility, index) => <li className='text-center text-sm p-4 [&:not(:last-child)]:border-b border-grey-light2 ' key={index}>{facility}</li>)}
                    </ul>
                </div>
            </div>
            <div
                className={`${sideClasses} ${type === 'primary' ? 'primary-gradient' : type === 'secondary' ? 'secondary-gradient'
                    : 'tertiary-gradient'}
                  rotate-y-180 group-hover:rotate-y-0`}>
                Back
            </div>
        </div>
    );
};

export default TourCard;