import { TalentModel } from "@/app/models/talent.model";

export async function GET() {
  return Response.json([
    { name: "Dea", genre: "Rock", image: "images/Dea.jpg" },
    { name: "Daryl", genre: "RNB", image: "images/Daryl.jpg" },
    { name: "Lyra", genre: "Soul", image: "images/Lyra.jpg" },
    { name: "Alyssa", genre: "Ballad", image: "images/Alyssa.jpg" },
  ] as TalentModel[]);
}
