import React from 'react';
import Card from './_child/Card';
import SectionHeader from './_child/SectionHeader';
import Service from './_child/Service';
import lng from '../../public/images/NLNG-Logo.png'
import petraco from '../../public/images/petraco.png'
import MarketingItem from './_child/MarketingItem';


const DATA = [
    {
        id: 1,
        image: lng,
        company: "NLNG",
        description: "Well Completion",
        location: "Port Harcourt, Nigeria"
    },
    {
        id: 2,
        image: lng,
        company: "NLNG",
        description: 'Drilling and Production chemical supply',
        location: "Port Harcourt, Nigeria"
    },
    {
        id: 3,
        image: petraco,
        company: "Repairs",
        description: 'Mud Logging & Data processing',
        location: "Port Harcourt, Nigeria"
    }
]

function Marketing(props) {
    return (
        <Card>
            <SectionHeader title="Marketing" />

            <div className='flex flex-row justify-between'>
                {DATA.map(item => <MarketingItem key={item.id} data={item} />)}
            </div>
        </Card>
    );
}

export default Marketing;