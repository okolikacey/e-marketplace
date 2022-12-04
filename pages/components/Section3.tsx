import React from 'react';
import Card from './_child/Card';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import lnglogo from '../../public/images/NLNG-Logo.png'
import nuprclogo from '../../public/images/NUPRC-Logo.png'
import Tender from './_child/Tender';

const DATA = [
    {
        id: 1,
        image: lnglogo,
        name: 'Nigeria LNG Limited',
        opportunity: "Provision Of Welding Qa/qc And Ndt Services Nigeria LNG Limited is a liquefied natural gas Operator Of The Nnpc/mpn Joint Venture Tender Opportunity: Provision Of Welding Qa/qc And Ndt Services Tender Number:"
    },
    {
        id: 2,
        image: lnglogo,
        name: 'Nigeria LNG Limited',
        opportunity: "Provision Of Waste Management Services For Offshore And Benin Operations Tender Ref No: WthYA60Kl3e"
    },
    {
        id: 3,
        image: nuprclogo,
        name: 'Shafa Exploration and Production Company Ltd ',
        opportunity: "Invitation To Tender For Provision Of Fpso Integrity And Specialised Pipelines Inspection & Maintenance Services On Bonga Shafa Nigeria Exploration And Production Company Limited Tender Opportunity: Provision Of Fpso Integrity And"
    },
]

function Section3(props) {
    return (
        <Card>
            <div className='border-t-[8px] border-t-green-600'>
                <div className='flex flex-row justify-between border-2 p-5 text-green-600' >
                    <b className='text-2xl'>Tenders</b>
                    <div className='flex flex-row gap-3'>
                        <div className='bg-ctransgreen w-8 h-8 rounded-full flex justify-center items-center'>
                            <IoIosArrowBack />
                        </div>
                        <div className='bg-ctransgreen w-8 h-8 rounded-full flex justify-center items-center'>
                            <IoIosArrowForward />
                        </div>
                    </div>
                </div>
            </div>

            {DATA.map(tender => <Tender key={tender.id} image={tender.image} name={tender.name} opportunity={tender.opportunity} />)}
        </Card>
    );
}

export default Section3;