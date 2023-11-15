import { create } from "zustand";

interface IUseLoadingStore {
  isLoading: boolean;
  setisLoadingTrue: () => void;
  setisLoadingFalse: () => void;
}

const useLoadingStore = create<IUseLoadingStore>((set) => ({
  isLoading: false,
  setisLoadingTrue: () =>
    set(() => ({
      isLoading: true,
    })),
  setisLoadingFalse: () =>
    set(() => ({
      isLoading: false,
    })),
}));

export default useLoadingStore;
