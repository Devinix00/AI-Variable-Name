import useIsSubmittingStore from "@/stores/useIsSubmittingStore/useIsSubmittingStore";
import { Dispatch, SetStateAction } from "react";

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
  const { isSubmitting, setIsSubmittingTrue, setIsSubmittingFalse } =
    useIsSubmittingStore();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmittingTrue();
    const BASE_URL = "https://stack.ggm.kr/get";

    if (isSubmitting || inputValue === "" || null) return;

    setInputValue("");
    setOption("camelCase");

    try {
      const response = await fetch(`${BASE_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          option: option,
          question: inputValue,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      console.log(data);
    } catch (error) {
      console.log("Fetch error:", error);
    } finally {
      setIsSubmittingFalse();
    }
  };
  return { handleSubmit };
}

export default useSubmit;
