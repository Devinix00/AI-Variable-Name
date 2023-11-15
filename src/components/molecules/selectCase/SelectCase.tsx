"use client";

import { Dispatch, SetStateAction, useState } from "react";
import styles from "./SelectCase.module.scss";
import useSelectedCase from "@/hooks/useSelectCase/useSelectCase";

interface IProps {
  option: string;
  setOption: Dispatch<SetStateAction<string>>;
  isClicked: boolean;
  setIsClicked: Dispatch<SetStateAction<boolean>>;
}

function SelectCase({
  option,
  setOption,
  isClicked,
  setIsClicked,
}: IProps): JSX.Element {
  const { handleClick, handleCase } = useSelectedCase({
    isClicked,
    setIsClicked,
    setOption,
  });

  const listClass = `${styles.list} ${isClicked ? null : styles.none}`;

  return (
    <>
      <div className={styles.container}>
        <ul>
          <div onClick={handleClick} className={styles.selectedCase}>
            {option}↑
          </div>
          <div className={styles.optionList}>
            <li
              value={option}
              onClick={() => {
                handleCase("camelCase");
              }}
              className={listClass}
            >
              camelCase
            </li>
            <li
              value={option}
              onClick={() => {
                handleCase("PascalCase");
              }}
              className={listClass}
            >
              PascalCase
            </li>
            <li
              value={option}
              onClick={() => {
                handleCase("snake_case");
              }}
              className={listClass}
            >
              snake_case
            </li>
          </div>
        </ul>
        <div className={styles.text}>👈 Please select a case!</div>
      </div>
    </>
  );
}

export default SelectCase;
