import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "BoBa",
    short_name: "BoBa",
    description: "Booking app for artists",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "icons/bookone.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "icons/bookone.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
