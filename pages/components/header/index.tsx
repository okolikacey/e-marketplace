import React from 'react';
import HeaderContact from '../_child/HeaderContact';

function index(props) {
    return (
        <header className='bg-gray-50'>
            <div className='xl:container xl:mx-auto flex flex-row'>

                <HeaderContact />
            </div>
        </header>
    );
}

export default index;