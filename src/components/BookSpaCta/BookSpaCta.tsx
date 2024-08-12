
'use client';

import { Dispatch, FC, SetStateAction } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

type Props = {
    checkinDate: Date | null;
    setCheckinDate: Dispatch<SetStateAction<Date | null>>;
    checkoutDate: Date | null;
    setCheckoutDate: Dispatch<SetStateAction<Date | null>>;
    calcMinCheckoutDate: () => Date | null;
    price: number;
    discount: number;
    specialNote: string;
    isBooked: boolean;
    handleBookNowClick: () => void;
};

const BookSpaCta: FC<Props> = props => {
    const {
        price,
        discount,
        specialNote,
        checkinDate,
        setCheckinDate,
        checkoutDate,
        setCheckoutDate,
        calcMinCheckoutDate,
        isBooked,
        handleBookNowClick,
    } = props;

    const discountPrice = price - (price / 100) * discount;

    const calcNoOfDays = () => {
        if (!checkinDate || !checkoutDate) return 0;
        const timeDiff = checkoutDate.getTime() - checkinDate.getTime();
        const noOfDays = Math.ceil(timeDiff / (24 * 60 * 60 * 1000));
        return noOfDays;
    };
    return (
        <div className='px-7 py-6'>
            <h3>
                <span
                    className={`${discount ? 'text-gray-400' : ''} font-bold text-xl`}
                >
                    $ {price}
                </span>
                {discount ? (
                    <span className='font-bold text-xl'>
                        {' '}
                        | discount {discount}%. Now{' '}
                        <span className='text-tertiary-dark'>₵ {discountPrice}</span>
                    </span>
                ) : (
                    ''
                )}
            </h3>

            <div className='w-full border-b-2 border-b-secondary my-2' />

            <h4 className='my-8'>{specialNote}</h4>

            <div className='flex'>
                <div className='w-1/2 pr-2'>
                    <label
                        htmlFor='check-in-date'
                        className='block text-sm font-medium text-gray-900 dark:text-gray-400'
                    >
                        Check In date
                    </label>
                    <DatePicker
                        selected={checkinDate}
                        onChange={date => setCheckinDate(date)}
                        dateFormat='dd/MM/yyyy'
                        minDate={new Date()}
                        id='check-in-date'
                        className='w-full border text-black border-gray-300 rounded-lg p-2.5 focus:ring-primary focus:border-primary'
                    />
                </div>
                <div className='w-1/2 pl-2'>
                    <label
                        htmlFor='check-out-date'
                        className='block text-sm font-medium text-gray-900 dark:text-gray-400'
                    >
                        Check Out date
                    </label>
                    <DatePicker
                        selected={checkoutDate}
                        onChange={date => setCheckoutDate(date)}
                        dateFormat='dd/MM/yyyy'
                        disabled={!checkinDate}
                        //minDate={calcMinCheckoutDate()}
                        id='check-out-date'
                        className='w-full border text-black border-gray-300 rounded-lg p-2.5 focus:ring-primary focus:border-primary'
                    />
                </div>
            </div>
            {calcNoOfDays() > 0 ? (
                <p className='mt-3'>Total Price: $ {calcNoOfDays() * discountPrice}</p>
            ) : (
                <></>
            )}

            <button
                disabled={isBooked}
                onClick={handleBookNowClick}
                className='px-6 md:px-[50px] lg:px-[72px] py-2 md:py-5 bg-[#038C7F] rounded-lg md:rounded-2xl shadow-sm shadow-[#038C7F] text-white font-bold text-base md:text-xl hover:scale-110 duration-300 transition-all w-full mt-6 disabled:bg-gray-500 disabled:cursor-not-allowed'
            >
                {isBooked ? 'Booked' : 'Book Now'}
            </button>
        </div>

    )
}

export default BookSpaCta;


