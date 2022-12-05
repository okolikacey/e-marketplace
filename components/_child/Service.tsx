import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Button from './Button';

type dataProp = {
    id: number,
    image: StaticImageData,
    name: string,
    description: string,
    company: string
}

type PropType = {
    data: dataProp
}

function Service(props: PropType) {
    const { image, name, description, company } = props.data;
    return (
        <div className='flex flex-col w-[260px]'>
            <div className='bg-gray-100  h-[240px] rounded-lg flex items-center justify-center my-3'>
                <Image src={image} alt="Image of item" />
            </div>
            <div className='flex flex-col h-[180px] justify-center text-center border-2 rounded-lg p-3 border-green-500'>
                <b className='text-lg'>{name}</b>

                <span className='text-[8px]'>{description}</span>
                <span className='my-3'>{company}</span>
                <Button text='View Details' />

            </div>
        </div>
    );
}

export default Service;