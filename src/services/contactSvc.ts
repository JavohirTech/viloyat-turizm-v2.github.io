import {api} from "@/lib/api";
import {IContactResponse} from "@/types/contact";
import {CONTACT} from "@/lib/apiEndpoints";

interface IContactService {
    getContact: (args: {
        locale: string;
    }) => Promise<IContactResponse[]>;
}

export const contactSvc:IContactService = {
    getContact: async ({locale}) => {
        try {
            const {data} = await api.get<IContactResponse[]>(CONTACT, {
                headers: {
                    "Accept-Language": locale,
                },
            })
            return data;
        }catch (e) {
            console.error(e);
            throw new Error("Failed to fetch contact");
        }
    },
}
