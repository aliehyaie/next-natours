import Header from "../components/Header/Header";
import Container from "@/components/Hoc/Container/Container";
import Button from "@/components/Button/Button";

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
                                        explicabo iste odio unde? Amet blanditiis culpa dolor obcaecati repellat repudiandae
                                        suscipit. Aut dignissimos et, officiis quas ratione sint!
                                    </p>
                                </div>
                                <div className='flex flex-col gap-4'>
                                    <h3 className='tertiary-header'>
                                        Leave adventures like you never have before
                                    </h3>
                                    <p className='paragraph'>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur beatae cumque
                                        error fugiat fugit iusto nemo, quam quas reiciendis voluptas?
                                    </p>
                                </div>
                                <Button className='self-start' type='secondary'>
                                    Learn more &rarr;
                                </Button>
                            </div>
                            <div className='flex-1'>
                                2
                            </div>
                        </div>
                    </Container>
                </section>
            </main>
        </>
    )
}
