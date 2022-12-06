import Filters from '../components/Filters';
import Card from '../components/_child/Card';
import NavItemHeaders from '../components/_child/NavItemHeaders';
import Wrapper from '../layout/Wrapper';
import { productsAndServicesType } from '../types/productsServiceType';

const filters = [
    {
        id: 1,
        sectionName: 'States',
        options: [
            { id: 1, isActive: false, name: 'Abia State' },
            { id: 2, isActive: false, name: 'Adamawa' },
            { id: 3, isActive: false, name: 'Akwa Ibom State' },
        ]
    },
    {
        id: 2,
        sectionName: 'Category',
        options: [
            { id: 1, isActive: false, name: 'Drilling Rigs' },
            { id: 2, isActive: false, name: 'Cementing' },
            { id: 3, isActive: false, name: 'Valves' },
        ]
    },
    {
        id: 3,
        sectionName: 'Company',
        options: [
            { id: 1, isActive: false, name: 'Marginal Fields' },
            { id: 2, isActive: false, name: 'LLNG' },
            { id: 3, isActive: false, name: 'NOGIC' },
        ]
    },
    {
        id: 1,
        sectionName: 'Condition',
        options: [
            { id: 1, isActive: false, name: 'New' },
            { id: 2, isActive: false, name: 'Refubished' },
            { id: 3, isActive: false, name: 'Used' },
        ]
    }
]

function ProdAndServices(props: productsAndServicesType) {
    return (
        <Wrapper>
            <Card>
                <NavItemHeaders name='Product and Services' itemCount='2,000' />
                <div className='my-4'>
                    <Filters data={props.filters} />
                </div>
            </Card>
        </Wrapper>
    );
}

export async function getStaticProps() {


    return {
        props: { filters },
    }
}

export default ProdAndServices;