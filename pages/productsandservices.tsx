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
    }
]

function ProdAndServices(props: productsAndServicesType) {
    return (
        <Wrapper>
            <Card>
                <NavItemHeaders name='Product and Services' itemCount='2,000' />
                <div>
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