import { RaRecord, Identifier } from "react-admin";

export type ThemeName = "light" | "dark";

export interface Category extends RaRecord {
  name: string;
}

export interface Product extends RaRecord {
  category_id: Identifier;
  description: string;
  height: number;
  image: string;
  price: number;
  reference: string;
  stock: number;
  thumbnail: string;
  width: number;
}

export interface Customer extends RaRecord {
  first_name: string;
  last_name: string;
  address: string;
  stateAbbr: string;
  city: string;
  zipcode: string;
  avatar: string;
  birthday: string;
  first_seen: string;
  last_seen: string;
  has_ordered: boolean;
  latest_purchase: string;
  has_newsletter: boolean;
  groups: string[];
  nb_commands: number;
  total_spent: number;
}

export type OrderStatus = "ordered" | "delivered" | "cancelled";

export interface Order extends RaRecord {
  status: OrderStatus;
  basket: BasketItem[];
  date: Date;
  total: number;
}

export interface BasketItem {
  product_id: Identifier;
  quantity: number;
}

export interface Invoice extends RaRecord {}

export type ReviewStatus = "accepted" | "pending" | "rejected";

export interface Review extends RaRecord {
  date: Date;
  status: ReviewStatus;
  customer_id: Identifier;
  product_id: Identifier;
}

declare global {
  interface Window {
    restServer: any;
  }
}

export interface Inventori extends RaRecord {
  kode: String;
  tgl: Date;
  nama: String;
  kategori: String;
  image: String;
  qty: Number;
}

export interface Informasi extends RaRecord {
  title: String;
  content: String;
  kategori: String;
  image: String;
  type: String;
  user: String;
}

export interface Peminjaman extends RaRecord {
  nim: String;
  tgl: Date;
  ket: Number;
  user_id: String;
  nama: String;
  status: Number;
  tglkembali: Date;
}
