import { Dispatch, SetStateAction } from "react";
import useSubmit from "../useSubmit/useSubmit";

interface IProps {
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
  option: string;
  setOption: Dispatch<SetStateAction<string>>;
}

interface IUserPressEnter {
  handleKeyPress: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
}

function usePressEnter({
  inputValue,
  setInputValue,
  option,
  setOption,
}: IProps): IUserPressEnter {
  const { handleSubmit } = useSubmit({
    inputValue,
    setInputValue,
    option,
    setOption,
  });

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>);
    }
  };
  return {
    handleKeyPress,
  };
}

export default usePressEnter;
