import Image, { StaticImageData } from 'next/image';
import React from 'react';
import Button from './Button';

type PropType = {
    image: StaticImageData,
    name: string,
    opportunity: string
}

function Tender(props: PropType) {
    const { image, name, opportunity } = props;

    return (
        <div className='flex flex-row items-center px-3 my-3 py-9 rounded-md justify-between border-2'>
            <Image src={image} alt={name} />
            <div className='items-start basis-3/4'>
                <b>{name}</b><br />
                <span>Tender Opportunity:</span><span>{` ${opportunity}`}</span>
            </div>
            <div>
                <Button text='View Details' />
            </div>
        </div>
    );
}

export default Tender;