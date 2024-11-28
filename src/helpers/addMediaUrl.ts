type MediaUrl = "news" | "news-banner"| "festival" | "festival-banner";

const urls = {
  "news": "/news/image",
  "news-banner": "/news/banner",
  "festival": "/festival/image",
  "festival-banner": "/festival/banner",
};

export const addMediaUrl = (url: string, type: MediaUrl): string => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const mediaUrl = urls[type];

  return `${baseUrl}${mediaUrl}/${url}/`;
};
