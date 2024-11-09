'use client';
import { useEffect, useState } from "react";
import { TalentModel } from '../models/talent.model';
import Image from "next/image";
import { EventModel } from "../models/event.model";
import { TagModel } from "../models/tags.model";
import StickyBottom from "../shared/components/StickyBottom";
import StickyPost from "../shared/components/StickyBottom";
import StickyRoute from "../shared/components/StickyRoute";
import TalentCard from "../shared/components/TalentCard";

export default function User() {

    const [tag, setTag] = useState({ name: 'Singers' } as TagModel);

    const [popularTalents, setPopularTalents] = useState(
        [{ name: 'Dea', genre: 'Rock', image: 'images/Dea.jpg' },
        { name: 'Daryl', genre: 'RNB', image: 'images/Daryl.jpg' },
        { name: 'Lyra', genre: 'Soul', image: 'images/Lyra.jpg' },
        { name: 'Alyssa', genre: 'Ballad', image: 'images/Alyssa.jpg' }] as TalentModel[]);

    const [talents, setTalents] = useState(
        [{ name: 'Rowie', genre: 'Rock', image: 'images/Rowie.jpg' },
        { name: 'Daryl', genre: 'RNB', image: 'images/Daryl.jpg' },
        { name: 'Lyra', genre: 'Soul', image: 'images/Lyra.jpg' },
        { name: 'Alyssa', genre: 'Ballad', image: 'images/Alyssa.jpg' }] as TalentModel[]);

    const [events, setEvents] = useState(
        [{ name: 'Wedding' },
        { name: 'Birthday' },
        { name: 'Campaign', image: 'images/Lyra.jpg' },
        { name: 'Company Event' }] as EventModel[]);

    const [tags, setTags] = useState(
        [{ name: 'Singers' },
        { name: 'Host' },
        { name: 'Artists' },
        { name: 'Planner' }] as TagModel[]);

    useEffect(() => {
        // initializeTalents()
    }, [talents])

    const initializeTalents = async () => {
        setTalents([{ name: 'Jamie', genre: 'rock' }]);
    }

    const updateTag = (tag: TagModel) => {
        setTag(tag);
    }

    return (
        <div className="bg-gradient-to-bottom from-darkViolet to-darkerViolet h-screen w-full">
            <div className="flex items-center text-white text-6xl font-bold text-center rounded-xl bg-cover bg-center h-40" style={{ backgroundImage: `url('https://jamiesocorro.github.io/images/modern-tech.jpg')` }}>
                <div className="text-center w-full">
                    {tag.name}
                </div>

            </div>
            <div className="grid grid-cols-4 sm:grid-cols-8 gap-4 text-center mx-2.5 py-2.5">
                {tags && tags.map((tag, index) => (
                    <div onClick={() => updateTag(tag)} key={'tag' + index} className='p-1 border-1 border-black border-solid bg-black bg-opacity-30 rounded-lg text-white cursor-pointer'>
                        {tag.name}
                    </div>
                ))
                }
            </div>

            <div className="overflow-x-auto h-4/6">
                <div className="font-bold text-white ml-2.5">
                    Popular Talents:
                </div>
                <TalentCard talents={popularTalents} type="popular"></TalentCard>

                <div className="font-bold text-white ml-2.5">
                    Talents:
                </div>

                <TalentCard talents={talents}></TalentCard>
            </div>
            <StickyPost>
                <StickyRoute />
            </StickyPost>
        </div>

    );
}