import Gear from '../public/icons/option.svg'
import FilterOption from './_child/FilterOption';

function Filters(props) {
    return (
        <div className='flex flex-col border rounded-md w-1/4'>
            <div className='flex flex-row gap-2 px-3 py-6 font-bold text-lg items-center'>
                <Gear />
                Filters
            </div>
            <FilterOption name='States' />

        </div>
    );
}

export default Filters;