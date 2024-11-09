'use client';
import { ReviewModel } from '@/app/models/review.model';
import React from 'react';
import Rating from './Rating';

interface ReviewProps {
    reviews: ReviewModel[]
}

const Review = ({ reviews }: ReviewProps) => {
    return (
        <div>
            <div className="font-bold ml-2">Reviews: </div>
            {reviews && reviews.map((review: ReviewModel) => (
                <div className='p-2 rounded-lg bg-[#212121] m-2'>

                    <div>
                        {review.name}
                    </div>
                    <div>
                        <Rating rating={review.rating}></Rating>
                    </div>
                    <div>
                        {review.comments}
                    </div>
                </div>

            ))}
        </div>


    );
};

export default Review;
