export type Product = {
  id: number;
  slug: string;
  name: string;
  shortDescription: string;
  price: string;
  originalPrice?: string;
  image: string;
  badge?: string;
  badgeType?: "discount" | "new";
  isNew?: boolean;
};