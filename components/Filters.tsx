import { RiArrowDownSLine } from 'react-icons/ri';
import Gear from '../public/icons/option.svg'
import { filterPropType } from '../types/propTypes';
import FilterItem from './_child/FilterItem';

function Filters({ data }: filterPropType) {

    return (
        <div className='flex flex-col border rounded-md w-1/4'>
            <div className='flex flex-row gap-2 px-3 py-6 font-bold text-lg items-center'>
                <Gear />
                Filters
            </div>
            {data.map(item => <FilterItem key={item.id} data={item} />)}
            <div className='flex flex-row justify-between items-center py-3 px-3 border-y-2 font-bold'>
                Sell Price Ranges
                <RiArrowDownSLine />
            </div>
            <div className='flex flex-col my-3 px-3'>
                <div className='self-center w-[80%]'>
                    <input type='range' min='1' max='1000' className='w-[100%]' />
                </div>
                <div className='text-xs flex justify-between pl-6'>
                    <span>1</span>
                    <span>100,000,000</span>
                </div>
            </div>
        </div>
    );
}


export default Filters;