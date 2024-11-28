export interface IPartner{
  id: number;
  name: string;
  logo: string;
  url: string;
}


export interface IPartnersResponse extends IPagination{
  results: IPartner[];
}
