import Image, { StaticImageData } from 'next/image';
import React from 'react';
import Button from './Button';

type dataProp = {
    id: number,
    image: StaticImageData,
    name: string,
    price: string,
    company: string
}

type PropType = {
    data: dataProp
}

function Product2(props: PropType) {
    const { image, name, price, company } = props.data;
    return (
        <div className='flex flex-col'>
            <div className='bg-gray-100 w-[260px] h-[240px] rounded-lg flex items-center justify-center my-3'>
                <Image src={image} alt="Image of item" />
            </div>
            <div className='flex flex-col justify-center text-center border-2 rounded-lg p-3 border-green-500'>
                <b className='text-xl'>{name}</b>

                <span className='text-cgreen'>{price}</span>
                <span>{company}</span>
                <Button text='View Details' />

            </div>
        </div>
    );
}

export default Product2;