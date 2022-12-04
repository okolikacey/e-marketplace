import React from 'react';
import Image from 'next/image'


type PropType = {
    text: string,
    icon?: string,
}

function Button(props: PropType) {
    return (
        <div className='bg-cgreen px-3 py-3 rounded-md text-white flex flex-row gap-1 text-sm flex-wrap'>
            {props.icon && <Image src={props.icon} alt='login icon' height={20} width={20} />}
            {props.text}
        </div>
    );
}

export default Button;