import Image from 'next/image';
import React from 'react';
import logo from '../../../public/images/logo.png'
import Button from './Button';
import { BiSearch } from 'react-icons/bi'
import loginIcon from '../../../public/icons/loginicon.svg'

function Navigation(props) {
    return (
        <div className='px-20 py-5 flex flex-row flex-wrap'>
            <div className='flex-none'>
                <Image src={logo} height={150} width={150} alt='logo' />
            </div>
            <div className='grow flex flex-row px-5 items-center'>
                <div className='text-white bg-cgreen h-8 px-2 flex rounded-l items-center gap-1 text-sm'>
                    <h5>Search</h5>
                    <BiSearch className='mt-1' />
                </div>
                <input type='text' className='block h-8 px-3 py-2 flex-1 border rounded-r border-cgreen' />
            </div>
            <div className='flex-none flex items-center'>
                <Button text='Login' icon={loginIcon} />
            </div>
        </div>
    );
}

export default Navigation;