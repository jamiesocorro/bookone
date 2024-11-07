import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "BookOne",
    short_name: "BookOne",
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
    ],
  };
}
