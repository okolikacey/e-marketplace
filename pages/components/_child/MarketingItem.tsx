import Image, { StaticImageData } from 'next/image';
import React from 'react';
import Button from './Button';

type dataType = {
    id: Number,
    image: StaticImageData,
    company: String,
    description: String,
    location: String
}

type PropType = { data: dataType }

function MarketingItem(props: PropType) {
    const { image, company, description, location } = props.data;

    return (
        <div className='flex flex-row items-start w-[350px] border-2 my-4 rounded-md py-5 px-3 gap-2'>
            <Image src={image} alt='company icon' height={100} width={100} className='w-1/3' />

            <div className='flex flex-col justify-between gap-3 w-2/3 h-[100%]'>
                <b>{company}</b>
                <span>{location}</span>
                <b>{description}</b>
                <div className=''>
                    <Button text='View Details' />
                </div>
            </div>

        </div>
    );
}

export default MarketingItem;