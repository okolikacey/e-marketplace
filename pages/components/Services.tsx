import React from 'react';
import Card from './_child/Card';
import Product2 from './_child/Product2';
import SectionHeader from './_child/SectionHeader';
import diagnostics from '../../public/images/diagnostics.png'
import repairs from '../../public/images/repairs.png'
import revamping from '../../public/images/revamping.png'
import spare_parts from '../../public/images/spare_parts.png'
import Service from './_child/Service';

const DATA = [
    {
        id: 1,
        image: spare_parts,
        name: "Spare Parts",
        description: "Originat manufactures' spare parts for the plant's lifecycle",
        company: "Petraco Oil Ltd"
    },
    {
        id: 2,
        image: revamping,
        name: "Revamping & Upgrades",
        description: 'Enhancing equipment life dor higher efficiency, reliability and safety',
        company: "NPDC"
    },
    {
        id: 3,
        image: repairs,
        name: "Repairs",
        description: 'Enhancing equipment life dor higher efficiency, reliability and safety',
        company: "NLNG"
    },
    {
        id: 4,
        image: diagnostics,
        name: "Diagnostics & Remote Mon.",
        description: "Solutions and Products for remote monitoring of plants and drives",
        company: "Petraco Oil Ltd"
    },
]

function Services(props) {
    return (
        <Card>
            <SectionHeader title="Services" />

            <div className='flex flex-row justify-between'>
                {DATA.map(service => <Service key={service.id} data={service} />)}
            </div>
        </Card>
    );
}

export default Services;