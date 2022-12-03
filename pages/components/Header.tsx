import React from 'react';
import FollowUs from './_child/FollowUs';
import HeaderContact from './_child/HeaderContact';
import Navigation from './_child/Navigation';
import NavOptions from './_child/NavOptions';

function Header(props) {
    return (
        <header>
            <div className='flex flex-col'>
                <div className='flex flex-col sm:flex-row justify-between bg-cblack px-20 py-2'>
                    <HeaderContact />
                    <FollowUs />
                </div>
                <div>
                    <Navigation />
                    <hr />
                    <NavOptions />
                </div>
            </div>
        </header>
    );
}

export default Header;