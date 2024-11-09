import React from 'react';
import Star from './Star';

const Rating = ({ rating, maxRating = 5 }: any) => {
    return (
        <div className="flex">
            {Array.from({ length: maxRating }, (_, index) => (
                <Star key={index} filled={index < rating} />
            ))}
        </div>
    );
};

export default Rating;
