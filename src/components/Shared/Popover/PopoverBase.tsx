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
    <Popover isLazy>
      <PopoverTrigger>
        {customTriggerIcon!! ? (
          <Button leftIcon={customTriggerIcon}>{customTriggerText}</Button>
        ) : (
          <IconButton
            icon={<FaEllipsisH />}
            aria-label="popover trigger"
            variant="ghost"
          />
        )}
      </PopoverTrigger>
      <Portal>
        <PopoverContent
          w="max"
          _focus={{ border: "1px", borderColor: "gray.300" }}
          boxShadow="md"
        >
          <PopoverBody display="flex" flexDir="column">
            {children}
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  );
};

export default PopoverBase;
