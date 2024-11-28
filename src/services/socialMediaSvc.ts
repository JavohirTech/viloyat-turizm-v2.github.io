import {api} from "@/lib/api";
import {ISocialMediaResponse} from "@/types/socialMedia";
import {SOCIAL_MEDIA} from "@/lib/apiEndpoints";

export const socialMediaSvc = {
  getSocialMedia: async () => {
    try {
      const {data} = await api.get<ISocialMediaResponse[]>(SOCIAL_MEDIA);
      return data;
    } catch (e) {
      console.error(e);
      throw new Error("Failed to fetch social media");
    }
  },
}
