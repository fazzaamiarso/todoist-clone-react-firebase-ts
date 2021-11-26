import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  Icon,
  Text,
} from "@chakra-ui/react";
import { useRef } from "react";
import { FaQuestionCircle } from "react-icons/fa";

interface Props {
  onDeleteAction: () => void;
  onCloseDialog: () => void;
  isDialogOpen: boolean;
  deletedItemName: string;
}

const ConfirmationDialog: React.FC<Props> = ({
  onCloseDialog,
  isDialogOpen,
  onDeleteAction,
  deletedItemName,
}) => {
  const cancelRef = useRef<HTMLButtonElement>(null);

  return (
    <AlertDialog
      isOpen={isDialogOpen}
      leastDestructiveRef={cancelRef}
      onClose={onCloseDialog}
      isCentered
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader>
            <Icon fontSize="xl">
              <FaQuestionCircle />
            </Icon>
          </AlertDialogHeader>

          <AlertDialogBody>
            Are you sure you want to delete{" "}
            <Text fontWeight="bold" as="span">
              {deletedItemName}
            </Text>
            ?
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button
              ref={cancelRef}
              onClick={onCloseDialog}
              variant="outline"
              size="sm"
            >
              Cancel
            </Button>
            <Button colorScheme="red" onClick={onDeleteAction} ml={3} size="sm">
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};
export default ConfirmationDialog;
