import { create } from "zustand";

interface IUseIsSubmittingStore {
  isSubmitting: boolean;
  setIsSubmittingTrue: () => void;
  setIsSubmittingFalse: () => void;
}

const useIsSubmittingStore = create<IUseIsSubmittingStore>((set) => ({
  isSubmitting: false,
  setIsSubmittingTrue: () =>
    set(() => ({
      isSubmitting: true,
    })),
  setIsSubmittingFalse: () =>
    set(() => ({
      isSubmitting: false,
    })),
}));

export default useIsSubmittingStore;
