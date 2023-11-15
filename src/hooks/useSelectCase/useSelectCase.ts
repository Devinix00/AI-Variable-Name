import { Dispatch, SetStateAction } from "react";

interface IProps {
  isClicked: boolean;
  setIsClicked: (isClicked: boolean) => void;
  setOption: Dispatch<SetStateAction<string>>;
}

interface IUseSelectedCase {
  handleClick: () => void;
  handleCase: (caseType: string) => void;
}

function useSelectedCase({
  isClicked,
  setIsClicked,
  setOption,
}: IProps): IUseSelectedCase {
  const handleClick = (): void => {
    setIsClicked(!isClicked);
  };

  const handleCase = (caseType: string): void => {
    setOption(caseType);
    setIsClicked(!isClicked);
  };

  return { handleClick, handleCase };
}

export default useSelectedCase;
