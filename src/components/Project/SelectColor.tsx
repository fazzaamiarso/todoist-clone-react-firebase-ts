// const colorOptions = [
//   { value: "red", label: "red" },
//   { value: "teal", label: "teal" },
//   { value: "violet", label: "violet" },
//   { value: "teal", label: "teal" },
//   { value: "blue", label: "blue" },
//   { value: "lightblue", label: "lightblue" },
//   { value: "gray", label: "gray" },
//   { value: "salmon", label: "salmon" },
//   { value: "yellow", label: "yellow" },
//   { value: "orange", label: "orange" },
//   { value: "green", label: "green" },
//   { value: "limegreen", label: "limegreen" },
//   { value: "skyblue", label: "skyblue" },
//   { value: "lavender", label: "lavender" },
//   { value: "magenta", label: "magenta" },
// ];

import { Select } from "@chakra-ui/select";
import React, { useState } from "react";

const colors = [
  "red",
  "violet",
  "teal",
  "blue",
  "lightblue",
  "gray",
  "salmon",
  "yellow",
  "orange",
  "green",
  "limegreen",
  "skyblue",
  "lavender",
  "magenta",
] as const;

interface Props {
  onSelectColor: (selectedColor: string) => void;
  color: string;
}

const SelectColor: React.FC<Props> = ({
  onSelectColor,
  color: selectedColor,
}) => {
  const changeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onSelectColor(e.target.value);
  };

  return (
    <Select onChange={changeHandler} value={selectedColor}>
      {colors.map((color) => {
        return (
          <option key={color} value={color}>
            {color}
          </option>
        );
      })}
    </Select>
  );
};

export default SelectColor;
