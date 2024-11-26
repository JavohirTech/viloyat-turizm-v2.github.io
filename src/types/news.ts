export interface IImage {
  image: string;
}

export interface ICategory {
  id: number;
  name: string;
}

export interface INewsItem {
  id: number;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
  banner: string;
  video_i_frame: string;
  location_i_frame: string;
  slug: string;
  images: IImage[];
  category: ICategory;
}

export interface INewsResponse extends IPagination{
  results: INewsItem[];
}
