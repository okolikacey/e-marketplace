import Image, { StaticImageData } from 'next/image';
import React from 'react';


type PropType = {
    image: StaticImageData,
}


function Company(props: PropType) {
    const { image } = props;

    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='bg-white w-[200px] h-[90px] rounded-lg flex items-center justify-center'>
                <Image src={image} alt='company icon' />
            </div>
        </div>
    );
}

export default Company;