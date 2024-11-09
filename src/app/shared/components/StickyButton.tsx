import React from 'react';

const StickyButton = ({ children }: any) => {
    return (
        <div className="flex flex-col items-center fixed bottom-0 p-2  text-center w-full">
            <div className="px-5 py-2 bg-gray-900 text-white rounded-full font-bold cursor-pointer">
                {children}
            </div>
        </div>


    );
};

export default StickyButton;
