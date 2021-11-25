import { ReactNode } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Button,
  Portal,
  IconButton,
} from "@chakra-ui/react";
import { FaEllipsisH } from "react-icons/fa";

interface Props {
  children: ReactNode;
  customTriggerIcon?: JSX.Element;
  customTriggerText?: string;
}

const PopoverBase: React.FC<Props> = ({
  children,
  customTriggerIcon,
  customTriggerText,
}) => {
  return (
    <Popover isLazy closeOnBlur>
      <PopoverTrigger>
        {customTriggerIcon!! ? (
          <Button leftIcon={customTriggerIcon} variant="outline" size="sm">
            {customTriggerText}
          </Button>
        ) : (
          <IconButton
            icon={<FaEllipsisH />}
            aria-label="popover trigger"
            variant="ghost"
          />
        )}
      </PopoverTrigger>
      <PopoverContent
        w="max"
        _focus={{ border: "1px", borderColor: "gray.300" }}
        boxShadow="md"
      >
        <PopoverBody display="flex" flexDir="column">
          {children}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default PopoverBase;
