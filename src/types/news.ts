interface IImage {
  image: string;
}

export interface INewsItem {
  id: number;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
  banner: string;
  video_i_frame: string;
  location: string;
  slug: string;
  images: IImage[];
}

export interface INewsResponse extends IPagination{
  results: INewsItem[];
}
