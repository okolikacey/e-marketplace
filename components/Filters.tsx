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
        </div>
    );
}


export default Filters;