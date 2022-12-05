import React from 'react';

type PropType = {
    name: string;
    itemCount: string;
}

function NavItemHeaders(props: PropType) {
    const { name, itemCount } = props;
    return (
        <div className='flex flex-row justify-between border rounded-md px-5 py-2'>
            <span className='text-cgreen font-bold'>{name}</span>
            <span>{`${itemCount} results found`}</span>
        </div>
    );
}

export default NavItemHeaders;