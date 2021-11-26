import PopoverBase from "./PopoverBase";
import PopoverItem from "./PopoverItem";
import { FaCheck, FaPencilAlt, FaTimes, FaTrash } from "react-icons/fa";
import { useContext } from "react";
import { TodoContext } from "../../../store/TodoProvider";
import ConfirmationDialog from "../Dialog/ConfirmationDialog";
import { useDisclosure } from "@chakra-ui/react";

interface Props {
  onDeleteProject: () => void;
  onOpenEditor: () => void;
  projectName: string;
}

const PopoverProject: React.FC<Props> = ({
  onDeleteProject,
  onOpenEditor,
  projectName,
}) => {
  const { showCompletedTasks, toggleCompletedTasks } = useContext(TodoContext);
  const {
    isOpen: isDialogOpen,
    onOpen: onOpenDialog,
    onClose: onCloseDialog,
  } = useDisclosure();

  const toggleCompletedHandler = () => {
    toggleCompletedTasks();
  };

  return (
    <>
      <PopoverBase>
        <PopoverItem
          icon={<FaPencilAlt />}
          text="Edit project"
          onClick={onOpenEditor}
        />
        <PopoverItem
          icon={<FaTrash />}
          text="Delete project"
          onClick={onOpenDialog}
        />
        <PopoverItem
          icon={showCompletedTasks ? <FaTimes /> : <FaCheck />}
          text={
            showCompletedTasks ? "Hide completed tasks" : "Show completed tasks"
          }
          onClick={toggleCompletedHandler}
        />
      </PopoverBase>

      <ConfirmationDialog
        isDialogOpen={isDialogOpen}
        onCloseDialog={onCloseDialog}
        onDeleteAction={onDeleteProject}
        deletedItemName={projectName}
      />
    </>
  );
};

export default PopoverProject;
