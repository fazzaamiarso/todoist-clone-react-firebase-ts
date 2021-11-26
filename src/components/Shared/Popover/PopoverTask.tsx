import PopoverBase from "./PopoverBase";
import PopoverItem from "./PopoverItem";
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import ConfirmationDialog from "../Dialog/ConfirmationDialog";
import { useDisclosure } from "@chakra-ui/react";

interface Props {
  onDeleteTask: () => void;
  onOpenEditor: () => void;
  taskName: string;
}

const PopoverTask: React.FC<Props> = ({
  taskName,
  onDeleteTask,
  onOpenEditor,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <PopoverBase>
        <PopoverItem
          icon={<FaPencilAlt />}
          text="Edit task"
          onClick={onOpenEditor}
        />
        <PopoverItem icon={<FaTrash />} text="Delete task" onClick={onOpen} />
      </PopoverBase>
      <ConfirmationDialog
        isDialogOpen={isOpen}
        onCloseDialog={onClose}
        onDeleteAction={onDeleteTask}
        deletedItemName={taskName}
      />
    </>
  );
};

export default PopoverTask;
