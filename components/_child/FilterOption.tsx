import React from 'react';
import { RiArrowDownSLine } from 'react-icons/ri'

type PropType = {
    name: string;
}

function FilterOption(props: PropType) {
    return (
        <div className='flex flex-row justify-between items-center py-3 px-3 border-y-2'>
            {props.name}
            <RiArrowDownSLine />
        </div>
    );
}

export default FilterOption;