import {ICategory, IImage} from "@/types/news";

export interface IPhotoGalleryCategoryResponse {
  id: number;
  name: string;
}

export interface IPhotoGalleryItem {
  id: number;
  title: string;
  slug: string;
  description: string;
  category: ICategory;
  address: string;
  location_i_frame: string;
  video_i_frame: string;
  banner: string;
  images: IImage[];
}

export interface IPhotoGalleryResponse extends IPagination{
  results: IPhotoGalleryItem[];
}
