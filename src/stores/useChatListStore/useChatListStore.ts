import { create } from "zustand";

interface IUseChatListStore {
  chatList: IChatItem[];
  addChatItem: (chatItem: IChatItem) => void;
}

interface IChatItem {
  type: "user" | "ai";
  message: string;
}

const useChatListStore = create<IUseChatListStore>((set) => ({
  chatList: [],
  addChatItem: (chatItem) =>
    set((state) => ({ chatList: [...state.chatList, chatItem] })),
}));

export default useChatListStore;
