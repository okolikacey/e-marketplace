import React from 'react';
import { RiArrowDownSLine } from 'react-icons/ri'
import { filterType } from '../../types/commonTypes';
import { filterItemPropType } from '../../types/propTypes';
import FilterBody from './FilterBody';

function FilterItem({ data }: filterItemPropType) {
    const { sectionName, options } = data;
    return (
        <>
            <div className='flex flex-row justify-between items-center py-3 px-3 border-y-2 font-bold'>
                {sectionName}
                <RiArrowDownSLine />
            </div>
            <FilterBody data={options} />
        </>
    );
}

export default FilterItem;