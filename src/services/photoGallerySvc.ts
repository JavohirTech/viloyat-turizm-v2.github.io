import {api} from "@/lib/api";
import {PHOTO_GALLERY, PHOTO_GALLERY_CATEGORIES, PHOTO_GALLERY_LIST} from "@/lib/apiEndpoints";
import {IPhotoGalleryCategoryResponse, IPhotoGalleryItem, IPhotoGalleryResponse} from "@/types/photoGallery";

interface IPhotoGallerySvc {
  getPhotoGalleryCategories: ({locale}: { locale: string }) => Promise<IPhotoGalleryCategoryResponse[]>
  getPhotoGallery: ({locale, params}: {
    locale: string, params: {
      [key: string]: string | number;
    };
  }) => Promise<IPhotoGalleryResponse>
  getPhotoGalleryById: ({locale, slug}: { locale: string, slug: string }) => Promise<IPhotoGalleryItem>
}

export const photoGallerySvc: IPhotoGallerySvc = {
  getPhotoGallery: async ({locale, params}) => {
    try {
      const {data} = await api.get<IPhotoGalleryResponse>(PHOTO_GALLERY_LIST, {
        headers: {
          "Accept-Language": locale,
          "Content-Language": locale,
        },
        params
      });
      return data;
    } catch (e) {
      console.error("Failed to fetch photo gallery categories");
      throw e;
    }
  },

  getPhotoGalleryById: async ({locale, slug}) => {
    try {
      const {data} = await api.get<IPhotoGalleryItem>(`${PHOTO_GALLERY}${slug}/`, {
        headers: {
          "Accept-Language": locale,
          "Content-Language": locale,
        }
      });
      return data;
    } catch (e) {
      console.error("Failed to fetch photo gallery categories");
      throw e;
    }
  },

  getPhotoGalleryCategories: async ({locale}) => {
    try {
      const {data} = await api.get<IPhotoGalleryCategoryResponse[]>(PHOTO_GALLERY_CATEGORIES, {
        headers: {
          "Accept-Language": locale,
          "Content-Language": locale,
        }
      });
      return data;
    } catch (e) {
      console.error("Failed to fetch photo gallery categories");
      throw e;
    }
  }
}
