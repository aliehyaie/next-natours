import React from 'react';
import Image from "next/image";
import Container from "@/components/Hoc/Container/Container";

const footerItems = [
    {
        title: 'Company',
        link: '#',
        id: 'company'
    },
    {
        title: 'Contact us',
        link: '#',
        id: 'contact-us'
    },
    {
        title: 'Carriers',
        link: '#',
        id: 'carriers'
    },
    {
        title: 'Privacy policy',
        link: '#',
        id: 'privacy-policy'
    },
    {
        title: 'Terms',
        link: '#',
        id: 'terms'
    }
];
const Footer = () => {
    return (
        <footer className='bg-grey-dark3 py-24 text-sm'>
            <div className='mb-20'>
                <Image width={150} height={150} src='/img/logo-green-2x.png' alt='Full Logo' className='m-auto'/>
            </div>
            <Container>
                <div className='flex justify-between'>
                    <div className='flex-1 inline-block'>
                        <ul className='flex gap-4 border-t border-grey-dark1 pt-8 w-fit'>
                            {footerItems.map(footerItem => <li key={footerItem.id}>
                                <a className='text-grey-light1 uppercase transition-all duration-200 bg-grey-dark3 inline-block
                                    hover:text-primary hover:shadow-[0_1rem_2rem_rgba(0,0,0,0.4)] hover:rotate-6 hover:scale-125
                                    visited:text-primary visited:shadow-[0_1rem_2rem_rgba(0,0,0,0.4)] visited:rotate-6 visited:scale-125
                                ' href={footerItem.link}>{footerItem.title}</a>
                            </li>)}
                        </ul>
                    </div>
                    <div className='flex-1'>
                        <p className='border-t border-grey-dark1 pt-8 w-10/12'>
                            Built by <a href="#" className='text-grey-light1 uppercase transition-all duration-200 bg-grey-dark3 inline-block hover:text-primary hover:shadow-[0_1rem_2rem_rgba(0,0,0,0.4)] hover:rotate-6 hover:scale-125
                                    visited:text-primary visited:shadow-[0_1rem_2rem_rgba(0,0,0,0.4)] visited:rotate-6 visited:scale-125'>
                            Ali Ehyaie </a> for this online course <a href="#" className='text-grey-light1 uppercase transition-all duration-200 bg-grey-dark3 inline-block hover:text-primary hover:shadow-[0_1rem_2rem_rgba(0,0,0,0.4)] hover:rotate-6 hover:scale-125
                                    visited:text-primary visited:shadow-[0_1rem_2rem_rgba(0,0,0,0.4)] visited:rotate-6 visited:scale-125'> Advanced css and Sass. </a> Copyright &copy; by Ali Ehyaie. You are
                            100% allowed to use this webpage for both personal and commercial use
                            , but Not to claim ir as your own design. A credit to original author, Ali Ehyaie, is of
                            course highly appreciated!
                        </p>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;