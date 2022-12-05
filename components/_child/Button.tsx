import React from 'react';
import Image from 'next/image'


type PropType = {
    text: string,
    icon?: string,
    style?: { bgColor?: string; textColor?: string },
}

function Button(props: PropType) {
    const { text, icon, style } = props
    return (
        <div className={
            `${style?.bgColor ? style.bgColor : 'bg-cgreen'}
             px-3 py-3
            rounded-md 
            ${style?.textColor ? style.textColor : 'text-white'} 
            flex flex-row gap-1 text-sm flex-wrap justify-center`
        }>
            {icon && <Image src={icon} alt='login icon' height={20} width={20} />}
            {text}
        </div>
    );
}

export default Button;