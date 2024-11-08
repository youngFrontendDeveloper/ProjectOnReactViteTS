export interface IUserInfo {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  accessToken: string;
  refreshToken: string;
}

export interface ICartData {
  carts: ICart[] | undefined;
  limit: number;
  skip: number;
  total: number;
}

export interface ICart {
  id: number;
  products: ICartProduct[];
  total: number;
  totalProducts: number;
  discountedTotal: number;
  totalQuantity: number;
  userId: number;
}

export interface IProducts {
  limit: number;
  products: IProduct[];
  skip: number;
  total: number;
}

export interface ICartProduct {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedTotal: number;
  thumbnail: string;
  added: boolean;
}

export interface IProduct {
  availabilityStatus: string;
  brand: string;
  category: string;
  description: string;
  dimensions: { width: number; height: number; depth: number };
  discountPercentage: number;
  id: number;
  images: string[];
  minimumOrderQuantity: number;
  price: number;
  rating: number;
  returnPolicy: string;
  reviews: {
    comment: string;
    date: string;
    rating: number;
    reviewerEmail: string;
    reviewerName: string;
  }[];
  shippingInformation: string;
  sku: string;
  stock: number;
  tags: string[];
  thumbnail: string;
  title: string;
  warrantyInformation: string;
  weight: number;
}
