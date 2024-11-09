'use client';
import { ReviewModel } from '@/app/models/review.model';
import React, { useState } from 'react';
import Review from '../Review';



const TalentReview = () => {

    const [reviews, setReviews] = useState([
        { name: "John", comments: "test comment", rating: 5 },
        { name: "Jack", comments: "test comment 2", rating: 4 }
    ] as ReviewModel[])
    return (
        <div>
            <Review reviews={reviews}></Review>
        </div>


    );
};

export default TalentReview;
