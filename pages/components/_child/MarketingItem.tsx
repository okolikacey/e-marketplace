import Image, { StaticImageData } from 'next/image';
import React from 'react';
import Button from './Button';

type dataType = {
    image: StaticImageData,
    company: String,
    description: String,
    location: String
}

type PropType = { data: dataType }

function MarketingItem(props: PropType) {
    const { image, company, description, location } = props.data;

    return (
        <div className='flex flex-row items-start border-2 my-4 rounded-md py-5 px-3 gap-2'>
            <Image src={image} alt='company icon' height={100} width={100} />

            <div className='flex flex-col gap-2'>
                <b>{company}</b>
                <span>{location}</span>
                <b>{description}</b>
                <Button text='View Details' />

            </div>

        </div>
    );
}

export default MarketingItem;