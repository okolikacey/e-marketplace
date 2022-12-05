import Image, { StaticImageData } from 'next/image';
import React from 'react';

type PropType = {
    image: StaticImageData,
    name: string
}

function Product(props: PropType) {
    const { image, name } = props;
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='bg-clightgreen w-[120px] h-[120px] rounded-lg flex items-center justify-center'>
                <Image src={image} alt={name} />
            </div>
            <a className='text-xs mt-2'>{name}</a>
        </div>
    );
}

export default Product;