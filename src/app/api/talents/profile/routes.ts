import { TalentModel } from "@/app/models/talent.model";

export async function POST() {
  return Response.json({
    name: "Dea",
    genre: "Rock",
    image: "images/Dea.jpg",
  } as TalentModel);
}
