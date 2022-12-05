import Filters from '../components/Filters';
import Card from '../components/_child/Card';
import NavItemHeaders from '../components/_child/NavItemHeaders';
import Wrapper from '../layout/Wrapper';

function ProdAndServices(props) {
    return (
        <Wrapper>
            <Card>
                <NavItemHeaders name='Product and Services' itemCount='2,000' />
                <div>
                    <Filters />
                </div>
            </Card>
        </Wrapper>
    );
}

export default ProdAndServices;