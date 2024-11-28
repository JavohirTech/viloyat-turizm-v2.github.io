import {BASE_URL} from "@/lib/api";

type MediaUrl = "news" | "news-banner"| "festival" | "festival-banner" | "partners" | "about-us" | "festival-poster-logo" | "festivals-poster-video" | "photo-gallery-image"

const urls = {
  "news": "/news/image",
  "news-banner": "/news/banner",
  "festival": "/festival/image",
  "festival-banner": "/festival/banner",
  "partners": "/sponsors/logo",
  "about-us": "/about-us/image",
  "festival-poster-logo": "/festival-poster/logo",
  "festivals-poster-video": "/festival-poster/video",
  "photo-gallery-image": "/photo-gallery/image"
};

export const addMediaUrl = (url: string, type: MediaUrl): string => {
  const baseUrl = BASE_URL;
  const mediaUrl = urls[type];

  return `${baseUrl}${mediaUrl}/${url}/`;
};
