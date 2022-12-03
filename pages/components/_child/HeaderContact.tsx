import React from "react";
import { FiPhone, FiMail } from 'react-icons/fi'

function HeaderContact(props) {
    return (
        <div className="text-white flex flex-row gap-4">
            <div className="flex flex-row gap-2 items-center">
                <FiPhone color="green" />
                Call us: 016310962
            </div>
            <div className="flex flex-row gap-2 items-center">
                <FiMail color="green" />
                Email: support@nogicjqs.com
            </div>
        </div>

    );
}

export default HeaderContact;