import React from 'react';

const StickyPost = ({ children }: any) => {
    return (
        <div className="fixed  sm:top-0 bottom-0 sm:bottom-auto w-full p-2 bg-[#212121] text-black text-center">
            {children}
        </div>
    );
};

export default StickyPost;
