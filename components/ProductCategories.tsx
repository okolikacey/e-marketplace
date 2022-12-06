import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import Card from './_child/Card';
import prod1 from '../public/images/prod1.png';
import prod2 from '../public/images/prod2.png';
import prod3 from '../public/images/prod3.png';
import prod4 from '../public/images/prod4.png';
import prod5 from '../public/images/prod5.png';
import prod6 from '../public/images/prod6.png';
import prod7 from '../public/images/prod7.png';
import prod8 from '../public/images/prod8.png';

import Product from './_child/Product';

import 'swiper/css';
import "swiper/css/navigation";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const DATA = [
    {
        id: 1,
        image: prod1,
        name: 'Rigs'
    },
    {
        id: 2,
        image: prod2,
        name: 'Pumps'
    },
    {
        id: 3,
        image: prod3,
        name: 'Coiled Tubing'
    },
    {
        id: 4,
        image: prod4,
        name: 'Downhole Tools'
    },
    {
        id: 5,
        image: prod5,
        name: 'Casting'
    },
    {
        id: 6,
        image: prod6,
        name: 'Drill Bits'
    },
    {
        id: 7,
        image: prod7,
        name: 'Cementing'
    },
    {
        id: 8,
        image: prod8,
        name: 'Valves'
    },
    {
        id: 9,
        image: prod7,
        name: 'Cementing'
    },
    {
        id: 10,
        image: prod8,
        name: 'Valves'
    }
]

function ProductCategories(props) {
    return (
        <Card>
            {/* TO-DO add manual slider */}
            <div className='mt-3 mb-10 text-xl px-4'>
                <b>Browse through major <span className='text-cgreen'>Product Categories</span></b>
            </div>
            <div className='flex flex-row items-center my-4'>

                <div className='w-1/7'>
                    <div onClick={() => console.log('forward')} className='bg-ctransgreen w-8 h-8 rounded-full flex justify-center items-center prev cursor-pointer'>
                        <IoIosArrowBack />
                    </div>

                </div>
                <Swiper
                    slidesPerView={8}
                    navigation={{ prevEl: '.prev', nextEl: '.next' }}
                    modules={[Navigation]}

                >
                    {DATA.map(product => <SwiperSlide>
                        <Product key={product.id} image={product.image} name={product.name} />
                    </SwiperSlide>)}
                </Swiper>
                <div className='w-1/7'>
                    <div className='bg-ctransgreen w-8 h-8 rounded-full flex justify-center items-center basis-1 next cursor-pointer'>
                        <IoIosArrowForward />
                    </div>
                </div>
            </div>
        </Card>
    );
}

export default ProductCategories;