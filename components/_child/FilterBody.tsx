import { useState } from 'react';
import { IoMdSearch } from 'react-icons/io'
import { filterOptionPropType } from '../../types/propTypes';
import RadioBox from '../RadioBox';

function FilterBody({ data }: filterOptionPropType) {

    // const [isSelected, setIsSelected] = useState<boolean>(data.isActive)



    return (
        <div className='px-4 flex flex-col'>
            <div className='border-2 rounded-md border-cgreen px-2 my-2 h-10 flex flex-row items-center'>
                <IoMdSearch color='green' />
                <input className='grow outline-none' placeholder='Search' />
            </div>

            {data.map(option => <RadioBox key={option.id} name={option.name} isSelected={option.isActive} onSelect={(value) => console.log(value)} />)}
        </div>
    );
}

export default FilterBody;