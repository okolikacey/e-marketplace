import React, { MouseEventHandler, useState } from 'react';

type PropType = {
    name: string;
    isSelected: boolean;
    onSelect: (value: boolean) => void;
}

function RadioBox(props: PropType) {
    const { name, onSelect, isSelected } = props;

    return (
        <div className='flex flex-row items-center gap-5'>
            <div onClick={() => onSelect(!isSelected)} className='border h-4 w-4 rounded-full flex justify-center items-center'>
                {isSelected && <div className='bg-cgrey h-3 w-3 rounded-full'></div>}
            </div>
            <p>{name}</p>
        </div>
    );
}

export default RadioBox;