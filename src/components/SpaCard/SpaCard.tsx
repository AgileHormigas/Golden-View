import { FC } from 'react';
import Image from 'next/image';


import Link from 'next/link';
import { Spa } from '../../models/spa';

type Props = {
    spa: Spa;
};

const SpaCard: FC<Props> = props => {
    const {
        spa: { coverImage, name, price, type, description, slug, isBooked },
    } = props;

    return (
        <div className='rounded-xl w-72 mb-10 mx-auto md:mx-0 overflow-hidden text-black'>
            <div className='h-60 overflow-hidden'>
                <Image
                    src={coverImage.url}
                    alt={name}
                    width={250}
                    height={250}
                    className='img scale-animation'
                />
            </div>

            <div className='p-4 bg-white dark:bg-black dark:text-white'>
                <div className='flex justify-between text-xl font-semibold'>
                    <p>{name}</p>
                    <p>$ {price}</p>
                </div>



                <p className='pt-3 pb-6'>{description.slice(1, 100)}...</p>

                <Link
                    href={`/spas/${slug.current}`}
                    className='bg-[#038C7F] inline-block text-center w-full py-4 rounded-xl text-white text-xl font-bold hover:-translate-y-2 hover:shadow-lg transition-all duration-500'
                >
                    {isBooked ? 'BOOKED' : 'BOOK NOW'}
                </Link>
            </div>
        </div>
    );
};

export default SpaCard;
