export interface IUser {
  id: number;
  fname: string;
  email: string;
}

export interface ICategory {
  id: number;
  name: string;
}

export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  stock: number;
  brand: string;
  images: string[];
  category: ICategory;
  user: IUser;
  createdAt: string; 
}