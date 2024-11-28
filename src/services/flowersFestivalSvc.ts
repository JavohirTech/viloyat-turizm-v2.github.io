import {api} from "@/lib/api";
import {FESTIVAL, FESTIVAL_POSTER_LIST, FESTIVALS} from "@/lib/apiEndpoints";
import {IFestivalPosterResponse, IFlowersFestivalItem, IFlowersFestivalResponse} from "@/types/flowersFestival";

interface IFlowersFestivalService {
  getFlowerFestivals: (args: {
    locale: string;
    params: {
      [key: string]: string | number;
    };
  }) => Promise<IFlowersFestivalResponse>;
  getFlowerFestivalById: ({locale, slug}: { locale: string; slug: string }) => Promise<IFlowersFestivalItem>;
  getFestivalPoster: ({locale}: { locale: string }) => Promise<IFestivalPosterResponse[]>;
}

export const flowersFestivalSvc:IFlowersFestivalService = {
  getFlowerFestivals: async ({locale, params}) => {
    try{
      const {data} = await api.get<IFlowersFestivalResponse>(FESTIVALS, {
        params,
        headers: {
          "Accept-Language": locale,
          "Content-Language": locale,
        },
      });
      return data;
    }
    catch (e) {
      console.error(e);
      throw new Error("Failed to fetch flower festivals");
    }
  },

  getFlowerFestivalById: async ({locale, slug}) => {
    try{
      const {data} = await api.get<IFlowersFestivalItem>(`${FESTIVAL}${slug}/`, {
        headers: {
          "Accept-Language": locale,
          "Content-Language": locale,
        },
      });
      return data;
    }
    catch (e) {
      console.error(e);
      throw new Error("Failed to fetch flower festival");
    }
  },

  getFestivalPoster: async ({locale})=>{
    try{
      const {data} = await api.get<IFestivalPosterResponse[]>(FESTIVAL_POSTER_LIST, {
        headers: {
          "Accept-Language": locale,
          "Content-Language": locale,
        },
      })
      return data;
    }catch (e) {
      console.error(e);
      throw new Error("Failed to fetch flower festival poster");
    }
  }
}
