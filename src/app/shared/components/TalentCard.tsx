import { TalentModel } from "@/app/models/talent.model";
import { BadgeCheckIcon } from "lucide-react";
import Link from "next/link";

interface TalentCardProps {
    talents: TalentModel[];
    type?: string;
}

const TalentCard = ({ talents, type }: TalentCardProps) => {
    const gridClasses = type === 'popular' ? 'grid-cols-2 sm:grid-cols-4' : 'grid-cols-1 sm:grid-cols-8';
    const cardHeight = type === 'popular' ? 'h-40' : 'h-64';

    const selectTalent = () => {

    }

    return (
        <div className={`grid ${gridClasses} gap-4`}>
            {talents && talents.map((talent, index) => (
                <div key={'talent' + index} className={`m-2.5 bg-black rounded-lg text-white ${cardHeight}`}>

                    <div>
                        {
                            talent.image && (
                                <Link
                                    style={{
                                        textDecoration: 'none',
                                        color: 'white',

                                    }}
                                    href={{
                                        pathname: '/talent/profile',
                                        query: { talentId: 0 },
                                    }}
                                >
                                    <div className={`bg-cover relative bg-center ${cardHeight} rounded-lg`} style={{ backgroundImage: `url('http://localhost:3000/${talent.image}')` }}>
                                        <div className="flex flex-col items-center p-1 absolute bottom-0 text-center w-full font-bold bg-black bg-opacity-50 rounded-b-lg">
                                            <div>
                                                <div className="flex">
                                                    <div>{talent.name}</div>
                                                    {type === 'popular' && (<BadgeCheckIcon className="ml-2" color="#316FF6"></BadgeCheckIcon>)
                                                    }
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </Link>


                            )
                        }

                    </div>
                </div>
            )
            )
            }
        </div>
    );
};

export default TalentCard;

