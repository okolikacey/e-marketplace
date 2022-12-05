import React from 'react';
import Card from './_child/Card';
import SectionHeader from './_child/SectionHeader';
import coilTubing from '../public/images/coiled_tubing.png'
import controlValue from '../public/images/Control_Valve.png'
import Hydraulic_Production_Packer from '../public/images/Hydraulic_Production_Packer.png'
import Mechnical_Flex_Grip from '../public/images/Mechnical_Flex_Grip.png'
import Product2 from './_child/Product2';



const DATA = [
    {
        id: 1,
        image: coilTubing,
        name: "Coil Tubing Units",
        price: "N130,000,000",
        company: "NLNG"
    },
    {
        id: 2,
        image: controlValue,
        name: "Control Valve",
        price: 'Undisclosed',
        company: "Petraco Oil Ltd"
    },
    {
        id: 3,
        image: Hydraulic_Production_Packer,
        name: "Hydraulic Production Packer",
        price: "Undisclosed",
        company: "NLNG"
    },
    {
        id: 4,
        image: Mechnical_Flex_Grip,
        name: "Mechanical Flex Grip",
        price: "N433,400,000",
        company: "NLNG"
    },
]

function Products(props) {
    return (
        <Card>
            <SectionHeader title="Products" />

            <div className='flex flex-row justify-between'>
                {DATA.map(product => <Product2 key={product.id} data={product} />)}
            </div>
        </Card>
    );
}

export default Products;