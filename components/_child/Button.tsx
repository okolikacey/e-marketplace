import React from 'react';
import Image from 'next/image'


type PropType = {
    text: string,
    Icon?: string,
    style?: { bgColor?: string; textColor?: string },
}

function Button(props: PropType) {
    const { text, Icon, style } = props
    return (
        <div className={
            `${style?.bgColor ? style.bgColor : 'bg-cgreen'}
             px-3 py-3
            rounded-md 
            ${style?.textColor ? style.textColor : 'text-white'} 
            flex flex-row gap-1 text-sm flex-wrap justify-center`
        }>
            {Icon && <Icon />}
            {text}
        </div>
    );
}

export default Button;