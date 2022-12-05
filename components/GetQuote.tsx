import React from 'react';
import backdrop from '../public/images/backdrop3.png'
import Button from './_child/Button';
import QuotationForm from './_child/QuotationForm';

function GetQuote(props) {
    const bg = {
        backgroundImage: `linear-gradient(to right,
            rgba(255,255,255, 0.75),
            rgba(8,83,156, 0)),url(${backdrop.src})`,
    }

    return (
        <div className='flex flex-row justify-between items-center px-20 py-[20px]' style={bg}>
            <div className='flex flex-col w-1/3 gap-6'>
                <b className='text-xl'>EASY SOURCING</b>
                <p className='leading-[20px]'>
                    An easy way to post your sourcing requests and
                    get quotes.</p>

                <p className='leading-[20px]'>
                    One request, multiple quotes<br />
                    Verified suppliers matching<br />
                    Quotes comparison and sample request
                </p>
                <div className='w-1/3'>
                    <Button text='Learn More' />
                </div>
            </div>
            <div className='w-2/4'>
                <QuotationForm />
            </div>
        </div>
    );
}

export default GetQuote;