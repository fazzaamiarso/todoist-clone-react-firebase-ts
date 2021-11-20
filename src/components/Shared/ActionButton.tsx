import { Button } from "@chakra-ui/button";

interface Props {
  btnType: "primary" | "secondary";
  text: string;
}

const ActionButton: React.FC<Props> = ({ btnType, text }) => {
  const styles = {
    bg: btnType === "primary" ? "red.400" : "gray.100",
    color: btnType === "primary" ? "white" : "black",
  };

  return <Button {...styles}>{text}</Button>;
};

export default ActionButton;
