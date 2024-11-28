import {api} from "@/lib/api";
import {PARTNERS} from "@/lib/apiEndpoints";
import {IPartnersResponse} from "@/types/partners";


interface IPartnersService {
  getPartners: (args: {
    locale: string;
  }) => Promise<IPartnersResponse>;
}

export const partnersSvc:IPartnersService = {
  getPartners: async ({locale}) => {
    try {
      const {data} = await api.get<IPartnersResponse>(PARTNERS, {
        headers: {
          "Accept-Language": locale,
        },
      })
      return data;
    }catch (e) {
      console.error(e);
      throw new Error("Failed to fetch partners");
    }
  },
}
