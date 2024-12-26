import {NEWS, NEWS_CATEGORIES} from "@/lib/apiEndpoints";
import { api } from "@/lib/api";
import { Locale } from "@/types/locale";
import {INewsCategoryResponse, INewsItem, INewsResponse} from "@/types/news";

interface INewsService {
  getNews: (args: {
    locale: Locale;
    params: {
      [key: string]: string | number;
    };
  }) => Promise<INewsResponse>;
  getNewsById: ({ locale, slug }: { locale: Locale; slug: string }) => Promise<INewsItem>;
  getNewsCategories: ({ locale }: { locale: Locale }) => Promise<INewsCategoryResponse[]>;
}

export const newsSvc:INewsService = {
  getNews: async ({locale, params}) => {
    try {
      const {data} = await api.get<INewsResponse>(NEWS, {
        params,
        headers: {
          "Accept-Language": locale,
          "Content-Language": locale,
        },
      });
      return data;
    } catch (e) {
      console.error(e);
      throw new Error
    }
  },

  getNewsById: async ({locale, slug}) => {
    try {
      const {data} = await api.get<INewsItem>(`${NEWS}${slug}/`, {
        params:{
        },
        headers: {
          "Accept-Language": locale,
        },
      });
      return data;
    } catch (e) {
      console.error(e);
      throw new Error("Failed to fetch news by id");
    }
  },

  getNewsCategories: async ({locale}) => {
    try {
      const {data} = await api.get<INewsCategoryResponse[]>(NEWS_CATEGORIES, {
        headers: {
          "Accept-Language": locale,
        },
      });
      return data;
    } catch (e) {
      console.error(e);
      throw new Error("Failed to fetch news categories");
    }
  }
};
