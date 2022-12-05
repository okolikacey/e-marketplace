import Link from 'next/link';
import React from 'react';
import { RiArrowDownSLine } from 'react-icons/ri'

function NavOptions(props) {
    return (
        <div className='px-20 py-5 flex flex-row flex-wrap text-xs justify-between mt-0.5 bg-white'>
            <div className='flex flex-row gap-4 items-center'>
                <Link href={'/'}>HOME</Link>
                <div className='flex flex-row items-center gap-2'>
                    CATEGORIES
                    <RiArrowDownSLine />
                </div>
                <div>ADVERTS</div>
                <Link href={'/productsandservices'}>PRODUCTS AND SERVICES</Link>
                <div>COMPANIES</div>
            </div>
            <div className='flex flex-row gap-4'>
                <div className='flex flex-row gap-1 px-2 rounded-md border border-black items-center h-8'>
                    English
                    <RiArrowDownSLine />
                </div>
                <div className='flex flex-row gap-1 px-2 rounded-md border border-black items-center h-8'>
                    NGN
                    <RiArrowDownSLine />
                </div>
            </div>
        </div>
    );
}

export default NavOptions;