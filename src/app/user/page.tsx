'use client';
import { useEffect, useState } from "react";
import { TalentModel } from '../models/talent.model';
import Image from "next/image";
import { EventModel } from "../models/event.model";
import { TagModel } from "../models/tags.model";

export default function User() {

    const [talents, setTalents] = useState(
        [{ name: 'Dea', genre: 'Rock', image: 'images/Dea.jpg' },
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

    return (
        <div className="p-2.5 bg-gradient-to-bottom from-darkViolet to-darkerViolet h-screen w-full">
            <div className="text-white text-6xl font-bold text-center p-5  rounded-xl m-2 bg-cover bg-center h-40" style={{ backgroundImage: `url('http://localhost:3000/images/modern-tech.jpg')` }}>
                Singers
            </div>
            <div className="grid grid-cols-4 sm:grid-cols-8 gap-4 text-center mx-2.5 py-2.5">
                {tags && tags.map((tag, index) => (
                    <div key={'tag' + index} className='p-1 border-1 border-black border-solid bg-black bg-opacity-30 rounded-lg text-white '>
                        {tag.name}
                    </div>
                ))
                }
            </div>
            <div className="font-bold text-white ml-2.5">
                Popular Talents:
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {talents && talents.map((talent, index) => (
                    <div key={'talent' + index} className='m-2.5 bg-black rounded-lg text-white'>

                        <div>
                            {
                                talent.image && (
                                    <div className="bg-cover relative bg-center h-40 rounded-lg" style={{ backgroundImage: `url('http://localhost:3000/${talent.image}')` }}>

                                        <div className="p-1 absolute bottom-0 text-center w-full font-bold bg-black bg-opacity-50 rounded-b-lg">{talent.name}</div>


                                    </div>

                                )
                            }

                        </div>
                    </div>
                )
                )

                }

            </div>

            <div className="font-bold text-white ml-2.5">
                Events:
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                {events && events.map((event, index) => (
                    <div key={'event' + index} className=' p-2.5 m-2.5 bg-black rounded text-white'>
                        <div>{event.name}</div>
                        <div>
                            {
                                event.image && (
                                    <Image
                                        src="http://localhost:3000/images/Lyra.jpg"
                                        width={80}
                                        height={80}
                                        alt="project question icon"
                                        style={{ marginRight: '0.375rem' }}
                                    />
                                )
                            }

                        </div>
                    </div>
                )
                )

                }


            </div >
        </div>

    );
}