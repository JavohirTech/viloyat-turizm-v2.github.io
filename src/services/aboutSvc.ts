import {api} from "@/lib/api";
import {IAboutResponse} from "@/types/about";
import {ABOUT_US} from "@/lib/apiEndpoints";

interface IAboutService {
  getAbout: (args: {
    locale: string;
  }) => Promise<IAboutResponse[]>;
}

export const aboutSvc:IAboutService= {
  getAbout: async ({locale}) => {
    try {
      const {data} = await api.get<IAboutResponse[]>(ABOUT_US, {
        headers: {
          "Accept-Language": locale,
        },
      })
      return data;
    }catch (e) {
      console.error(e);
      throw new Error("Failed to fetch about");
    }
  },
}
