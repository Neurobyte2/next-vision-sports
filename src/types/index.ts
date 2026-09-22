export interface Product {
  id: string;
  name: string;
  category: string;
  subcategory?: string;
  image: string;
  description?: string;
  featured?: boolean;
}