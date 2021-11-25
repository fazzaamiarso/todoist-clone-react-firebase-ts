import PopoverBase from "./PopoverBase";
import PopoverItem from "./PopoverItem";
import { FaCheck, FaPencilAlt, FaTimes, FaTrash } from "react-icons/fa";
import { useContext } from "react";
import { TodoContext } from "../../../store/TodoProvider";

interface Props {
  onDeleteProject: () => void;
  onOpenEditor: () => void;
}

const PopoverProject: React.FC<Props> = ({ onDeleteProject, onOpenEditor }) => {
  const { showCompletedTasks, toggleCompletedTasks } = useContext(TodoContext);

  const toggleCompletedHandler = () => {
    toggleCompletedTasks();
  };

  return (
    <PopoverBase>
      <PopoverItem
        icon={<FaPencilAlt />}
        text="Edit project"
        onClick={onOpenEditor}
      />
      <PopoverItem
        icon={<FaTrash />}
        text="Delete project"
        onClick={onDeleteProject}
      />
      <PopoverItem
        icon={showCompletedTasks ? <FaTimes /> : <FaCheck />}
        text={
          showCompletedTasks ? "Hide completed tasks" : "Show completed tasks"
        }
        onClick={toggleCompletedHandler}
      />
    </PopoverBase>
  );
};

export default PopoverProject;
