import config from '@/config/config';
import { CategoryType } from '@/utils/types';
import { create } from "zustand";

export type CategoryDataState = {
  categories: {
    lips: CategoryType[];
    eyes: CategoryType[];
    cheek: CategoryType[];
    featuredMakeup: CategoryType[];
    skincare: CategoryType[];
    skinCondition: CategoryType[];
    featuredSkincare: CategoryType[];
  };
  loading: boolean;
  error: string | null;
  fetchCategories: () => Promise<void>;
};

const useCategoryDataStore = create<CategoryDataState>((set) => ({
  categories: {
    lips: [],
    eyes: [],
    cheek: [],
    featuredMakeup: [],
    skincare: [],
    skinCondition: [],
    featuredSkincare: [],
  },
  loading: false,
  error: null,
  fetchCategories: async () => {
    set({ loading: true, error: null });
    try {
      const [lipsRes, eyesRes, cheekRes, featuredMakeupRes, skincareRes, skinConditionRes, featuredSkincareRes] = await Promise.all([
        fetch(`${config.baseUri}/v1/makeup/category/lips/all`).then(res => res.json()),
        fetch(`${config.baseUri}/v1/makeup/category/eyes/all`).then(res => res.json()),
        fetch(`${config.baseUri}/v1/makeup/category/cheek/all`).then(res => res.json()),
        fetch(`${config.baseUri}/v1/makeup/category/featured/all`).then(res => res.json()),
        fetch(`${config.baseUri}/v1/skincare/category/skincare/all`).then(res => res.json()),
        fetch(`${config.baseUri}/v1/skincare/category/skincondition/all`).then(res => res.json()),
        fetch(`${config.baseUri}/v1/skincare/category/featured/all`).then(res => res.json()),
      ]);

      set({
        categories: {
          lips: lipsRes.category || [],
          eyes: eyesRes.category || [],
          cheek: cheekRes.category || [],
          featuredMakeup: featuredMakeupRes.category || [],
          skincare: skincareRes.category || [],
          skinCondition: skinConditionRes.category || [],
          featuredSkincare: featuredSkincareRes.category || [],
        },
        loading: false,
      });
    } catch (error: any) {
      set({ error: error.message || 'An error occurred', loading: false });
    }
  },
}));

export default useCategoryDataStore;
