import { ReactNode } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  Portal,
  IconButton,
} from "@chakra-ui/react";
import { FaEllipsisH } from "react-icons/fa";

interface Props {
  children: ReactNode;
}

const PopoverBase: React.FC<Props> = ({ children }) => {
  return (
    <Popover isLazy>
      <PopoverTrigger>
        <IconButton
          icon={<FaEllipsisH />}
          aria-label="popover trigger"
          variant="ghost"
        >
          Trigger
        </IconButton>
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
