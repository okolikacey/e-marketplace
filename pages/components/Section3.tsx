import React from 'react';
import Card from './_child/Card';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

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
        </Card>
    );
}

export default Section3;