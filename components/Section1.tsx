import React from 'react';
import Card from './_child/Card';
import backdrop from '../public/images/backdrop.png'
import color1 from '../../public/images/Vector 13.png'
import color2 from '../../public/images/Vector 14.png'
import Image from 'next/image';
import { url } from 'inspector';
import SecOneNews from './_child/SecOneNews';

function Section1(props) {
    const bg = {
        backgroundImage: `url(${backdrop.src})`,
    }
    return (
        <Card>
            <div className='flex flex-row gap-2'>
                <div className='flex basis-4/5 bg-cover bg-center' style={bg}>
                    <div className='self-end relative'>
                        {/* <Image src={color1} alt='img' height={350} className='right-0' />
                        <Image src={color2} alt='img' className='absolute bottom-0 right-0' /> */}
                    </div>
                </div>
                <div className='flex basis-1/5 flex-col gap-3'>
                    <SecOneNews />
                    <SecOneNews />
                </div>
            </div>

        </Card>
    );
}

export default Section1;