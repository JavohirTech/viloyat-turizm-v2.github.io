import {IImage} from "@/types/news";

export interface IFlowersFestivalItem {
  id: number;
  name: string;
  slug: string;
  description: string;
  created_at: string;
  updated_at: string;
  banner: string;
  start_date: string;
  end_date: string;
  address: string;
  images: IImage[];
  video_i_frame: string;
  category: string | null;
  location_i_frame: string;
}

export interface IFlowersFestivalResponse extends IPagination{
  results: IFlowersFestivalItem[];
}


export interface IFestivalPosterResponse{
  id: number;
  title: string;
  slug: string;
  description: string;
  logo: string;
  video: string;
}
