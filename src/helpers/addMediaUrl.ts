type MediaUrl = "news" | "banner";

const urls = {
  "news": "/news/image",
  "banner": "/news/banner",
};

export const addMediaUrl = (url: string, type: MediaUrl): string => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const mediaUrl = urls[type];

  return `${baseUrl}${mediaUrl}/${url}/`;
};
