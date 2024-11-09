import React from 'react';
import { Star } from 'lucide-react';

const StarComponent = ({ filled }: any) => {
    return (
        <Star className={`h-4 w-4 ${filled ? 'text-yellow-400' : 'text-gray-300'}`} />
    );
};

export default StarComponent;
