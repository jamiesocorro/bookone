// components/StickyIcons.js

import React from 'react';
import { HomeIcon, House, User, UserIcon } from 'lucide-react';

const StickyRoute = () => {
    return (
        <div className="flex justify-around">
            <div className='text-white cursor-pointer'>
                <House className="h-6 w-6 mx-2" />
                <div className='text-xs'>Home</div>
            </div>
            <div className='text-white cursor-pointer'>
                <User className="h-6 w-6 mx-2" />
                <div className='text-xs'>User</div>
            </div>

        </div>
    );
};

export default StickyRoute;
