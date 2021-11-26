import { Button } from "@chakra-ui/button";
import React from "react";

type ButtonProps = React.ComponentPropsWithoutRef<"button">;

interface Props extends ButtonProps {
  btnType: "primary" | "secondary";
  text: string;
  isDisabled?: boolean;
}

const ActionButton: React.FC<Props> = ({
  btnType,
  text,
  isDisabled,
  onClick,
}) => {
  const styles = {
    bg: btnType === "primary" ? "red.400" : "gray.100",
    color: btnType === "primary" ? "white" : "black",
  };

  return (
    <Button
      {...styles}
      onClick={onClick}
      isDisabled={isDisabled}
      variant={btnType === "secondary" ? "outline" : "solid"}
      size="sm"
    >
      {text}
    </Button>
  );
};

export default ActionButton;
