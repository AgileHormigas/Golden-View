'use client';

import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Spa } from '../../models/spa';


type Props = {
    featuredSpa: Spa
}

const FeaturedSpa: FC<Props> = props => {
    const { featuredSpa } = props;
    return (

        <section>
            <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="bg-[#038C7F] p-8 md:p-12 lg:px-16 lg:py-24">
                        <div className="mx-auto max-w-xl text-center">
                            <h2 className="text-2xl font-bold text-white md:text-3xl">
                                Feature Spa
                            </h2>

                            <p className="hidden text-white/90 sm:mt-4 sm:block">
                                {featuredSpa.description}
                            </p>
                            <div className='flex flex-col md:flex-row md:items-end justify-between mt-5'>
                                <div className='flex mb-3 md:mb-0'>
                                    <div className='flex gap-3 flex-col items-center justify-center mr-4'>
                                        <p className='text-xs lg:text-xl text-center'>Start From</p>
                                        <p className='md:font-bold flex font-medium text-lg xl:text-5xl'>
                                            $ {featuredSpa.price}
                                        </p>
                                    </div>
                                    <div className='flex gap-3 flex-col items-center justify-center mr-4'>
                                        <p className='text-xs lg:text-xl text-center'>Discount</p>
                                        <p className='md:font-bold flex font-medium text-lg xl:text-5xl'>
                                            $ {featuredSpa.discount}
                                        </p>
                                    </div>
                                </div>
                                <Link
                                    href={`/spas/${featuredSpa.slug.current}`}
                                    className='border h-fit text-center border-tertiary-dark text-tertiary-dark px-3 py-2 lg:py-5 lg:px-7 rounded-2xl font-bold lg:text-xl'
                                >
                                    More Details
                                </Link>

                            </div>


                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
                        <img
                            alt={featuredSpa.name}
                            src={featuredSpa.coverImage.url}
                            className="h-40 w-full object-cover sm:h-56 md:h-full"
                        />

                        <img
                            alt=""
                            src="https://leonardmedispa.com/wp-content/uploads/2017/03/facial-86487979-1.jpg"
                            className="h-40 w-full object-cover sm:h-56 md:h-full"
                        />
                    </div>
                </div>
            </div>
        </section>

    )
}

export default FeaturedSpa;



