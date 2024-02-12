import { OrderWithClientAndProduct } from "@/types/types";
import { Client, Product } from "@prisma/client";
import { create } from "zustand";
export type ModalType = "editProduct" | "deleteProduct" | "editClient" | "deleteClient" | "editOrder" | "deleteOrder"

interface ModalData {
  product?: Product;
  id?:string,
  client?:Client,
  products?: Product[] | null
  clients?:Client[] | null
  order?:OrderWithClientAndProduct | null
}

interface ModalStore {
  type: ModalType | null;
  data: ModalData;
  isOpen: boolean;
  onOpen: (type: ModalType, data?: ModalData) => void;
  onClose: () => void;
}

export const useModal = create<ModalStore>((set) => ({
  type: null,
  data: {},
  isOpen: true,
  onOpen: (type, data = {}) => set({ isOpen: true, type, data }),
  onClose: () => set({ type: null, isOpen: false }),
}));
