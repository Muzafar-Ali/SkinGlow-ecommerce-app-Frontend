export type CategoryType = {
  _id: string;
  name: string;
  slug: string;
  products: string[];
  __v: number;
};

export type skinCareProductType = {
    _id: string;
    title: string;
    slug: string;
    price: number;
    stock: number;
    thumbnail: string;
    images: string[];
    productDetails: {
        description: string;
        ingredients: string;
        howToApply: string;
        features: string;
    };
  categories: {
    skinCareCategory?: {
      _id: string;
    };
    skinConditionCategory?: {
      _id: string;
    };
    featuredCategory?: {
      _id: string;
    };
  };
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type MakeupProductType = {
  title: string;
  slug?: string;
  tagline: string;
  description: string;
  price: number;
  stock: number;
  thumbnail: string;
  images: string[];
  productDetails: {
    description: string;
    ingredients: string;
    howToApply: string;
    features: string;
  },
  categories: {
    makeup: {
      cheekMakeupCategory?: {
        _id: string
      };
      eyesMakeupCategory?: {
        _id: string
      };
      lipsMakeupCategory?: {
        _id: string
      };
      featuredCategory?: {
        _id: string
      };
    }
  }
  createdAt: string;
  updatedAt: string;
  __v: number;
  _id: string;
} 

export type bestSellerType = skinCareProductType & MakeupProductType;

// export type SingleMakeupProductType = {
//   title: string;
//   slug?: string;
//   tagline: string;
//   description: string;
//   price: number;
//   stock: number;
//   thumbnail: string;
//   images: string[];
//   productDetails: {
//     description: string;
//     ingredients: string;
//     howToApply: string;
//     features: string;
//   },
//   categories: {
//     makeup: {
//       cheekMakeupCategory?: {
//         _id: string;
//         name: string;
//         slug: string;
//         __v: number;
//         products: MakeupProductType[];
//       };
//       eyesMakeupCategory?: {
//         _id: string;
//         name: string;
//         slug: string;
//         __v: number;
//         products: MakeupProductType[];
//       };
//       lipsMakeupCategory?: {
//         _id: string;
//         name: string;
//         slug: string;
//         __v: number;
//         products: MakeupProductType[];
//       };
//       featuredCategory?: {
//         _id: string
//         name: string;
//         slug: string;
//         __v: number;
//         products: MakeupProductType[];
//       };
//     }
//   }

//   createdAt: string;
//   updatedAt: string;
//   __v: number;
//   _id: string;
// }

export type CombinedSingleProductType = {
  title: string;
  slug?: string;
  tagline: string;
  description: string;
  price: number;
  stock: number;
  thumbnail: string;
  images: string[];
  productDetails: {
    description: string;
    ingredients: string;
    howToApply: string;
    features: string;
  },
  categories: {
    makeup: {
      cheekMakeupCategory?: {
        _id: string;
        name: string;
        slug: string;
        __v: number;
        products: MakeupProductType[];
      };
      eyesMakeupCategory?: {
        _id: string;
        name: string;
        slug: string;
        __v: number;
        products: MakeupProductType[];
      };
      lipsMakeupCategory?: {
        _id: string;
        name: string;
        slug: string;
        __v: number;
        products: MakeupProductType[];
      };
      featuredCategory?: {
        _id: string
        name: string;
        slug: string;
        __v: number;
        products: MakeupProductType[];
      };
    }

    skincare: {
      skinCareCategory?: {
        _id: string;
        name: string;
        slug: string;
        __v: number;
        products: skinCareProductType[];
      },
      skinConditionCategory?: {
        _id: string;
        name: string;
        slug: string;
        __v: number;
        products: skinCareProductType[];
      },
      featuredCategory?: {
        _id: string
        name: string;
        slug: string;
        __v: number;
        products: skinCareProductType[];
      }
    }
  }

  createdAt: string;
  updatedAt: string;
  __v: number;
  _id: string;
}