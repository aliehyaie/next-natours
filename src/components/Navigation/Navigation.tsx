import React from 'react';

const navLinks = [
    {
        title: "About Natous",
        href: "#",
        count:"01"
    },
    {
        title: "Your benefit",
        href: "#",
        count:"02"
    },
    {
        title: "Popular tours",
        href: "#",
        count:"03"
    },
    {
        title: "Stories",
        href: "#",
        count:"04"
    },
    {
        title: "Book now",
        href: "#",
        count:"05"
    }
];

const Navigation = () => {
    return (
        <div className="navigation">
            <input type="checkbox" className="hidden peer" id="nav-toggle"/>
            <label htmlFor="nav-toggle"
                   className="bg-white h-20 w-20 block fixed top-14 right-12 rounded-full z-50 shadow-[0_1rem_3rem_rgba(#000,0.1)]
                   flex justify-center items-center cursor-pointer group
                   peer-checked:[&_span]:bg-transparent
                   peer-checked:[&_span:before]:rotate-[135deg]
                   peer-checked:[&_span:before]:top-0
                   peer-checked:[&_span:after]:-rotate-[135deg]
                   peer-checked:[&_span:after]:top-0
                   ">
                <span className="w-8 h-[3px] bg-grey-dark3 inline-block
                       relative
                      group-hover:before:-top-3 group-hover:after:top-3
                    before:w-8 before:h-[3px] before:bg-grey-dark3 before:inline-block before:left-0 before:absolute before:-top-2 before:transition-all before:duration-200
                    after:w-8 after:h-[3px] after:bg-grey-dark3 after:inline-block after:absolute after:top-2 after:transition-all after:duration-200
                " />
            </label>
            <div
                className="h-16 w-16 rounded-full fixed top-16 right-14
                 peer-checked:scale-[120]
                 transition-transform duration-700
                 bg-[radial-gradient(#7ed56f,#28b485)] z-30">&nbsp;</div>
            <nav className='h-screen fixed top-0 right-0 z-40 opacity-0 w-0 transition-all duration-700 peer-checked:opacity-100 peer-checked:w-full'>
                <ul className='flex flex-col justify-center items-center h-full gap-4'>
                    {
                        navLinks.map(navLink => <li>
                                <a className='text-3xl font-light text-white uppercase py-2.5 px-5
                                flex gap-4
                                bg-[linear-gradient(120deg,rgba(255,255,255,0)0%,rgba(255,255,255,0)50%,rgba(255,255,255)50%)]
                                transition-all duration-500 bg-[length:220%]
                                hover:bg-[100%]
                                hover:text-primary
                                hover:translate-x-3
                                ' href="#"><span>{navLink.count}</span>{navLink.title}</a>
                            </li>
                        )
                    }
                </ul>
            </nav>
        </div>
    );
};

export default Navigation;