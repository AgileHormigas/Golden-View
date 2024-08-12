'use client';

import Link from 'next/link';
import { useContext } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { useSession } from 'next-auth/react';

import ThemeContext from '@/context/themeContext';
import Image from 'next/image';

const Header = () => {
    const { darkTheme, setDarkTheme } = useContext(ThemeContext);

    const { data: session } = useSession();
    console.log(session);

    return (
        <header className="p-4 dark:bg-gray dark:text-gray-800">
            <div className="container flex justify-between h-16 mx-auto md:justify-center md:space-x-8">
                <ul className="items-stretch hidden space-x-3 md:flex">
                    <li className="flex items-center px-4 -mb-1 border-b-2 dark:border-  dark:text-[#F2C641] dark:border-[#F2C641]">
                        {session?.user ? (
                            <Link href={`/users/${session.user.id}`} >
                                {session.user.image ? (
                                    <div className='w-10 h-10 rounded-full overflow-hidden'>
                                        <Image
                                            src={session.user.image}
                                            alt={session.user.name!}
                                            width={40}
                                            height={40}
                                        />
                                    </div>
                                ) : (
                                    <FaUserCircle className='cursor-pointer' />
                                )}
                            </Link>) : (
                            <Link href='/auth' >
                                <FaUserCircle className='cursor-pointer' />
                            </Link>)}
                    </li>
                    <li className="flex items-center px-4 -mb-1 border-b-2 dark:border-  dark:text-[#F2C641] dark:border-[#F2C641]">
                        {darkTheme ? (
                            <MdOutlineLightMode
                                className='cursor-pointer'
                                onClick={() => {
                                    setDarkTheme(false);
                                    localStorage.removeItem('spa-theme');
                                }}
                            />
                        ) : (
                            <MdDarkMode
                                className='cursor-pointer'
                                onClick={() => {
                                    setDarkTheme(true);
                                    localStorage.setItem('spa-theme', 'true');
                                }}
                            />
                        )}
                    </li>

                </ul>

                <Link href='/' className='font-black text-tertiary-light flex items-center p-2' >
                    <Image
                        src='/logo.png'
                        alt='logo'
                        width={90}
                        height={90}
                        className="flex items-center "

                    />
                </Link>

                <ul className="items-stretch hidden space-x-3 md:flex">
                    <li className="flex items-center px-4 -mb-1 border-b-2 dark:border-  dark:text-[#F2C641] dark:border-[#F2C641] hover:-translate-y-2 duration-500 transition-all">
                        <Link href='/' className='noopener noreferrer'>Home</Link>
                    </li>
                    <li className="flex items-center px-4 -mb-1 border-b-2 dark:border-  dark:text-[#F2C641] dark:border-[#F2C641] hover:-translate-y-2 duration-500 transition-all">
                        <Link href='/spas' className='noopener noreferrer'>Therapy</Link>
                    </li>
                    <li className="flex items-center px-4 -mb-1 border-b-2 dark:border-  dark:text-[#F2C641] dark:border-[#F2C641] hover:-translate-y-2 duration-500 transition-all">
                        <Link href='/' className='noopener noreferrer'>Training School</Link>
                    </li>
                    <li className="flex items-center px-4 -mb-1 border-b-2 dark:border-  dark:text-[#F2C641] dark:border-[#F2C641] hover:-translate-y-2 duration-500 transition-all">
                        <Link href='/' className='noopener noreferrer'>Contact</Link>

                    </li>

                </ul>
                <button title="Button" type="button" className="p-4 md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-800">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </header>

    );
};

export default Header;

