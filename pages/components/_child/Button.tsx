import React from 'react';
import Image from 'next/image'


type PropType = {
    text: string,
    icon: string;
}

function Button(props: PropType) {
    return (
        <div className='bg-cgreen px-3 py-1 rounded-md text-white flex flex-row gap-1 text-sm'>
            <Image src={props.icon} alt='login icon' height={20} width={20} />
            {props.text}
        </div>
    );
}

export default Button;