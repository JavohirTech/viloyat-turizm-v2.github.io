import { NEWS } from "@/lib/apiEndpoints";
import { api } from "@/lib/api";
import { Locale } from "@/types/locale";
import {INewsItem, INewsResponse} from "@/types/news";

interface INewsService {
  getNews: ({ locale, page }: { locale: Locale , page:number | string}) => Promise<INewsResponse>;
  getNewsById: ({ locale, slug }: { locale: Locale, slug: string }) => Promise<INewsItem>;
}

export const newsSvc:INewsService = {
  getNews: async ({locale, page}) => {
    try {
      const {data} = await api.get<INewsResponse>(NEWS, {
        params:{
          page_size: 1,
          page:page,
        },
        headers: {
          "Accept-Language": locale,
          "Content-Language": locale,
        },
      });
      return data;
    } catch (e) {
      console.error(e);
      throw new Error("Failed to fetch news");
    }
  },

  getNewsById: async ({locale, slug}) => {
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
