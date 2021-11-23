import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { FaPlus } from "react-icons/fa";
import TaskInput from "./TaskInput";

const TaskForm: React.FC = () => {
  const {
    isOpen: isEditing,
    onOpen: onOpenEdit,
    onClose: onCloseEdit,
  } = useDisclosure();

  return isEditing ? (
    <TaskInput onCloseEditor={onCloseEdit} />
  ) : (
    <Button
      variant="ghost"
      isFullWidth
      leftIcon={<FaPlus />}
      color="gray.400"
      justifyContent="flex-start"
      _hover={{ color: "red.400" }}
      onClick={onOpenEdit}
    >
      Add task
    </Button>
  );
};

export default TaskForm;
