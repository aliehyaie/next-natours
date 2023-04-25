import Header from "../components/Header/Header";
import Container from "@/components/Hoc/Container/Container";
import Button from "@/components/Button/Button";
import Image from "next/image";
import Icon from "@/components/Icon/Icon";
import FeatureCard from "@/components/FeatureCard/FeatureCard";

export default function Home() {
    return (
        <>
            <Header/>
            <main>
                <section className='py-62.5 bg-grey-light1 -mt-[20vh]'>
                    <Container>
                        <h2 className='secondary-header mb-20'>
                            Exciting Tours For Adventurous People
                        </h2>

                        <div className='flex gap-horizontal'>
                            <div className='flex-1 flex flex-col gap-7.5'>
                                <div className='flex flex-col gap-4'>
                                    <h3 className='tertiary-header'>
                                        You're going to fall in love with nature
                                    </h3>
                                    <p className='paragraph'>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet beatae deleniti
                                        explicabo iste odio unde? Amet blanditiis culpa dolor obcaecati repellat
                                        repudiandae
                                        suscipit. Aut dignissimos et, officiis quas ratione sint!
                                    </p>
                                </div>
                                <div className='flex flex-col gap-4'>
                                    <h3 className='tertiary-header'>
                                        Leave adventures like you never have before
                                    </h3>
                                    <p className='paragraph'>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur beatae
                                        cumque
                                        error fugiat fugit iusto nemo, quam quas reiciendis voluptas?
                                    </p>
                                </div>
                                <Button className='self-start' type='secondary'>
                                    Learn more &rarr;
                                </Button>
                            </div>
                            <div className='flex-1'>
                                <div className='relative
                                group/composition
                                '>
                                    <Image width={300} height={256} src='/img/nat-1-large.jpg' alt='Photo 1'
                                           className='shadow-[0_1.5rem_4rem_rgba(0,0,0,0.4)]
                                            absolute
                                            left-0
                                            -top-8
                                            transition-all duration-200
                                            outline-offset-[1.25rem]
                                            hover:scale-105
                                            hover:-translate-y-1.5
                                            hover:outline
                                            hover:outline-[1rem]
                                            hover:outline-mediumGreen
                                            hover:shadow-[0_2.5rem_4rem_rgba(0,0,0,0.5)]
                                            group-hover/composition:[&:not(:hover)]:scale-95
                                            hover:z-10
                                        '
                                    />
                                    <Image width={300} height={256} src='/img/nat-2-large.jpg' alt='Photo 2'
                                           className='shadow-[0_1.5rem_4rem_rgba(0,0,0,0.4)]
                                            absolute
                                            right-0
                                            top-8
                                            transition-all duration-200
                                            outline-offset-[1.25rem]
                                            hover:scale-105
                                            hover:-translate-y-1.5
                                            hover:outline
                                            hover:outline-[1rem]
                                            hover:outline-mediumGreen
                                            hover:shadow-[0_2.5rem_4rem_rgba(0,0,0,0.5)]
                                            group-hover/composition:[&:not(:hover)]:scale-95
                                            hover:z-10
                                        '
                                    />
                                    <Image width={300} height={256} src='/img/nat-3-large.jpg' alt='Photo 3'
                                           className='shadow-[0_1.5rem_4rem_rgba(0,0,0,0.4)]
                                            absolute
                                            left-[20%]
                                            top-24
                                            transition-all duration-200
                                            outline-offset-[1.25rem]
                                            hover:scale-105
                                            hover:-translate-y-1.5
                                            hover:outline
                                            hover:outline-[1rem]
                                            hover:outline-mediumGreen
                                            hover:shadow-[0_2.5rem_4rem_rgba(0,0,0,0.5)]
                                            group-hover/composition:[&:not(:hover)]:scale-95
                                            hover:z-10
                                        '
                                    />
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>
                <section className='py-50 bg-features bg-cover -skew-y-6 [&>*]:skew-y-6 -mt-20'>
                    <div className='flex justify-between items-center flex-wrap px-4 gap-4'>
                        <FeatureCard iconName='icon-basic-world' title='Explore the world'
                                     description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem eaque iusto maiores odio omnis porro quas reiciendis rerum temporibus.'/>
                        <FeatureCard iconName='icon-basic-compass' title='Meet nature'
                                     description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem eaque iusto maiores odio omnis porro quas reiciendis rerum temporibus.'/>
                        <FeatureCard iconName='icon-basic-map' title='Find your way'
                                     description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem eaque iusto maiores odio omnis porro quas reiciendis rerum temporibus.'/>
                        <FeatureCard iconName='icon-basic-heart' title='Leave a healthier life'
                                     description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem eaque iusto maiores odio omnis porro quas reiciendis rerum temporibus.'/>

                    </div>
                </section>
            </main>
        </>
    )
}
