import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Meal Planner",
    short_name: "Meal Planner",
  description: "Meal Planner app for the Lawson Family",
  lang: "en-US",
  start_url: "/",
  display: "standalone",
  background_color: "#ffffff",
  theme_color: "#000000",
  orientation: "portrait",
  icons: [
    {
      src: "/assets/logo-sm.png",
      sizes: "192x192",
      type: "image/png",
    },
    {
      src: "/assets/logo-lg.png",
      sizes: "512x512",
      type: "image/png",
    }
  ]
  };
}