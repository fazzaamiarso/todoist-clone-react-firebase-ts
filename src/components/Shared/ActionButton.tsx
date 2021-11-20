import { Button } from "@chakra-ui/button";

interface Props {
  btnType: "primary" | "secondary";
  text: string;
  onClick?: () => void;
}

const ActionButton: React.FC<Props> = ({ btnType, text, onClick }) => {
  const styles = {
    bg: btnType === "primary" ? "red.400" : "gray.100",
    color: btnType === "primary" ? "white" : "black",
  };

  return (
    <Button {...styles} onClick={onClick}>
      {text}
    </Button>
  );
};

export default ActionButton;
