import { create } from "zustand";

interface IUseTextareaStore {
  scrollbar: boolean;
  setScrollbarTrue: () => void;
  setScrollbarFalse: () => void;
}

const useTextareaStore = create<IUseTextareaStore>((set) => ({
  scrollbar: false,
  setScrollbarTrue: () => set(() => ({ scrollbar: true })),
  setScrollbarFalse: () => set(() => ({ scrollbar: false })),
}));

export default useTextareaStore;
