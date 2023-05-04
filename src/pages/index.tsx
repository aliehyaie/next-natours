import Header from "../components/Header/Header";
import Container from "@/components/Hoc/Container/Container";
import Button from "@/components/Button/Button";
import Image from "next/image";
import Icon from "@/components/Icon/Icon";
import FeatureCard from "@/components/FeatureCard/FeatureCard";
import TourCard from "@/components/TourCard/TourCard";
import ReviewCard from "@/components/ReviewCard/ReviewCard";

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
                                            hover:outline-primary
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
                                            hover:outline-primary
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
                                            hover:outline-primary
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
                    <Container>
                        <div className='flex justify-between items-center flex-wrap gap-4'>
                            <FeatureCard iconName='icon-basic-world' title='Explore the world'
                                         description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem eaque iusto maiores odio omnis porro quas reiciendis rerum temporibus.'/>
                            <FeatureCard iconName='icon-basic-compass' title='Meet nature'
                                         description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem eaque iusto maiores odio omnis porro quas reiciendis rerum temporibus.'/>
                            <FeatureCard iconName='icon-basic-map' title='Find your way'
                                         description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem eaque iusto maiores odio omnis porro quas reiciendis rerum temporibus.'/>
                            <FeatureCard iconName='icon-basic-heart' title='Leave a healthier life'
                                         description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem eaque iusto maiores odio omnis porro quas reiciendis rerum temporibus.'/>
                        </div>
                    </Container>
                </section>
                <section className='-mt-20 pt-64 pb-40 bg-grey-light1'>
                    <Container>
                        <h2 className='secondary-header mb-20'>
                            Most popular tours
                        </h2>
                        <div className='flex justify-between'>
                            <TourCard
                                title='The Sea Explorer'
                                type='secondary'
                                facilities={[
                                    '3 day tour',
                                    'Up to 30 people',
                                    '2 tour guides',
                                    'Sleep in cozy hotels',
                                    'Difficulty: easy'
                                ]}
                                price={297}
                            />
                            <TourCard
                                title='The Forest Hiker'
                                type='primary'
                                facilities={[
                                    '7 day tour',
                                    'Up to 40 people',
                                    '6 tour guides',
                                    'Sleep in provided tents',
                                    'Difficulty: medium'
                                ]}
                                price={497}
                            />
                            <TourCard
                                title='The Snow Adventurer'
                                type='tertiary'
                                facilities={[
                                    '5 day tour',
                                    'Up to 15 people',
                                    '3 tour guides',
                                    'Sleep in provided tents',
                                    'Difficulty: hard'
                                ]}
                                price={497}
                            />
                        </div>
                        <div className='text-center'>
                            <Button className='bg-primary text-white mt-24 before:bg-primary'>
                                Discover all tours
                            </Button>
                        </div>
                    </Container>
                </section>
                <section className='py-36 bg-grey-light1'>
                    <Container>
                        <h2 className='secondary-header mb-20'>
                            We make people genuinely happy
                        </h2>
                        <div className='flex flex-col gap-12'>
                            <ReviewCard user='Jack Wilson'
                                        title='WOW! My life is completely different now'
                                        description='   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
                    asperiores,
                    corporis dignissimos earum mollitia odit sit sunt tempora. Cumque,
                    reprehenderit.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, quaerat!
                '
                                        userPic='/img/nat-8.jpg'/>
                            <ReviewCard user='Mary Smith'
                                        title='I had the best week ever with my family'
                                        description='   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
                    asperiores,
                    corporis dignissimos earum mollitia odit sit sunt tempora. Cumque,
                    reprehenderit.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, quaerat!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, vel.
                '
                                        userPic='/img/nat-9.jpg'/>
                            <div className='text-center'>
                                <Button type='secondary'>
                                    Read all Stories &rarr;
                                </Button>
                            </div>
                        </div>
                    </Container>
                </section>
            </main>
        </>
    )
}
