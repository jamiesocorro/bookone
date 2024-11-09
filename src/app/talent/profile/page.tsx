
import StickyButton from "@/app/shared/components/StickyButton";
import TalentReview from "@/app/shared/components/talent/TalentReview";
import Image from "next/image";


export default function TalentProfile() {
    return (
        <div className="h-full text-white  bg-gradient-to-bottom from-darkViolet to-darkerViolet">
            <div className="bg-cover relative bg-top h-72" style={{ backgroundImage: `url('https://jamiesocorro.github.io/bookone/images/Lyra.jpg')` }}>

            </div>

            <div className="rounded-lg p-2 bg-white text-black">
                <div className="font-bold">
                    Lyra
                </div>
                <div className="text-sm">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>

            </div>

            <div className="p-2.5 text-sm">
                <div className="font-bold">
                    Spotify:
                </div>
                https://open.spotify.com/artist/10MUAQUQy8tCr9St3ZdMHa
            </div>

            <TalentReview></TalentReview>


            <StickyButton>
                <div>Book now</div>
            </StickyButton>
        </div>
    );
}