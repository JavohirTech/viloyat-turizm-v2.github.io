import { NEWS } from "@/lib/apiEndpoints";
import { api } from "@/lib/api";
import { Locale } from "@/types/locale";
import {INewsItem, INewsResponse} from "@/types/news";

interface INewsService {
  getNews: ({ locale }: { locale: Locale }) => Promise<INewsResponse>;
  getNewsById: ({ locale, slug }: { locale: Locale, slug: number }) => Promise<INewsItem>;
}

export const newsService:INewsService = {
  getNews: async ({locale}) => {
    try {
      const {data} = await api.get<INewsResponse>(NEWS, {
        headers: {
          "Accept-Language": locale,
        },
      });
      return data;
    } catch (e) {
      console.error(e);
      throw new Error("Failed to fetch news");
    }
  },

  getNewsById: async ({locale, slug}: { locale: Locale, slug: number }) => {
    try {
      const {data} = await api.get<INewsItem>(`${NEWS}${slug}/`, {
        headers: {
          "Accept-Language": locale,
        },
      });
      return data;
    } catch (e) {
      console.error(e);
      throw new Error("Failed to fetch news by id");
    }
  }
};
