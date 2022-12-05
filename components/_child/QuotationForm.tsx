import React from 'react';
import Button from './Button';

function QuotationForm(props) {
    return (
        <div className='bg-white flex flex-col p-10 gap-3 rounded-lg'>
            <b className='text-xl'>
                Want to get quotations?
            </b>

            <form className='flex flex-col gap-5'>
                <input className='border rounded-md h-12 placeholder-style' placeholder='Product Name' />
                <input className='border rounded-md h-32 placeholder:pl-4' placeholder='Product Description' />
                <div className='flex flex-row gap-5'>
                    <input className='border rounded-md h-12 placeholder-style' placeholder='Purchase Quantity' />
                    <input className='border rounded-md h-12 placeholder-style' placeholder='Price(s)' />

                </div>
                <div className='w-1/3'>
                    <Button text='Request for Quotation' />
                </div>
            </form>
        </div>

    );
}

export default QuotationForm;