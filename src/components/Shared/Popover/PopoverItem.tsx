import { Button } from "@chakra-ui/button";

interface Props {
  text: string;
  onClick: () => void;
  icon?: JSX.Element;
}

const PopoverItem: React.FC<Props> = ({ icon, onClick, text }) => {
  return (
    <Button
      leftIcon={icon}
      onClick={onClick}
      variant="ghost"
      justifyContent="flex-start"
      size="sm"
    >
      {text}
    </Button>
  );
};

export default PopoverItem;
