import React from 'react';
import Image from "next/image";
import Button from "@/components/Button/Button";

const Header = () => {
    return (
        <header className='h-[95vh] font-bold
         bg-top
         bg-hero bg-cover
         main-clip
         relative
         '>
            <div className='absolute top-10 left-10'>
                <Image src='/img/logo-white.png' width={60} height={35} alt='Logo'/>
            </div>
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center'>
                <h1 className='text-white uppercase flex flex-col gap-2'>
                    <span className='text-6xl tracking-[36px] animate-moveLeft'>Outdoors</span>
                    <span className='text-xl tracking-[16px] animate-moveRight'>is where life happens</span>
                   </h1>
                <Button className='mt-6 animate-moveBottom'>
                    DISCOVER OUR TOURS
                </Button>
            </div>
        </header>
    );
};

export default Header;