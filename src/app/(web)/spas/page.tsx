'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

import Search from '@/components/Search/Search';
import { Spa } from '../../../models/spa';
import { getSpas } from '@/libs/apis';
import SpaCard from '@/components/SpaCard/SpaCard';
//import RoomCard from '@/components/RoomCard/RoomCard';

const Spas = () => {
    const [spaTypeFilter, setSpaTypeFilter] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const searchParams = useSearchParams();

    useEffect(() => {
        const searchQuery = searchParams.get('searchQuery');
        const spaType = searchParams.get('spaType');

        if (spaType) setSpaTypeFilter(spaType);
        if (searchQuery) setSearchQuery(searchQuery);
    }, []);

    async function fetchData() {
        return getSpas();
    }

    const { data, error, isLoading } = useSWR('get/goldenView', fetchData);

    if (error) throw new Error('Cannot fetch data');
    if (typeof data === 'undefined' && !isLoading)
        throw new Error('Cannot fetch data');

    const filterSpa = (spa: Spa[]) => {
        return spa.filter(spa => {
            // Apply room type filter

            if (
                spaTypeFilter &&
                spaTypeFilter.toLowerCase() !== 'all' &&
                spa.type.toLowerCase() !== spaTypeFilter.toLowerCase()
            ) {
                return false;
            }

            //   Apply search query filter
            if (
                searchQuery &&
                !spa.name.toLowerCase().includes(searchQuery.toLowerCase())
            ) {
                return false;
            }

            return true;
        });
    };

    const filteredSpa = filterSpa(data || []);

    return (
        <div className='container mx-auto pt-10'>
            <Search
                spaTypeFilter={spaTypeFilter}
                searchQuery={searchQuery}
                setSpaTypeFilter={setSpaTypeFilter}
                setSearchQuery={setSearchQuery}
            />

            <div className='flex mt-20 justify-between flex-wrap'>
                {filteredSpa.map(spa => (
                    <SpaCard key={spa._id} spa={spa} />
                ))}
            </div>

        </div>
    );
};

export default Spas;


{/** 
'use client';

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const Spas = () => {
    const [spaTypeFilter, setSpaTypeFilter] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const searchParams = useSearchParams();

    useEffect(() => {
        const searchQuery = searchParams.get('searchQuery');
        const spaType =searchParams.get('spaType');
        console.log(searchQuery);
        console.log(spaType);
    }, [])
    return (
        <div>page</div>
    )
}

export default Spas;

*/}