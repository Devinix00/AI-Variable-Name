import { Dispatch, SetStateAction } from "react";
import useChatListStore from "../../stores/useChatListStore/useChatListStore";
import useLoadingStore from "@/stores/useLoadingStore/useLoadingStore";

interface IProps {
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
  option: string;
  setOption: Dispatch<SetStateAction<string>>;
}

interface IUseSubmit {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

function useSubmit({
  inputValue,
  setInputValue,
  option,
  setOption,
}: IProps): IUseSubmit {
  const { isLoading, setisLoadingTrue, setisLoadingFalse } = useLoadingStore();
  const { addChatItem } = useChatListStore();
  // const { setAiData } = useAiDataStore();
  const additionalInput =
    ". 변수 이름을 추천해줘. 너가 추천해줄 이름 말고는 아무런 답변도 하지 마. 이름은 5개정도 추천해주면 좋겠어. 너무 길지 않으면서, 내용이 확실하게 담겨 있어야 해.";
  const caseOption = ` ${option}로 추천해줘.`;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isLoading || inputValue === "" || null) return;
    setisLoadingTrue();

    setInputValue("");
    addChatItem({ type: "user", message: inputValue });
    setOption("camelCase");

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          option: option,
          question: inputValue + additionalInput + caseOption,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      if (response.status === 500) {
        alert(
          "An error occurred on the server. Please try again in a few minutes."
        );
      }

      const aiData = await response.json();
      addChatItem({ type: "ai", message: aiData.data });

      console.log(aiData);
    } catch (error) {
      console.log("Fetch error:", error);
    } finally {
      setisLoadingFalse();
    }
  };
  return { handleSubmit };
}

export default useSubmit;
