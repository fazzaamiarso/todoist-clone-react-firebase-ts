import PopoverBase from "./PopoverBase";
import PopoverItem from "./PopoverItem";
import { FaPencilAlt, FaTrash } from "react-icons/fa";

interface Props {
  onDeleteTask: () => void;
  onOpenEditor: () => void;
}

const PopoverTask: React.FC<Props> = ({ onDeleteTask, onOpenEditor }) => {
  const deleteHandler = () => {
    onDeleteTask();
  };

  return (
    <PopoverBase>
      <PopoverItem
        icon={<FaPencilAlt />}
        text="Edit task"
        onClick={onOpenEditor}
      />
      <PopoverItem
        icon={<FaTrash />}
        text="Delete task"
        onClick={deleteHandler}
      />
    </PopoverBase>
  );
};

export default PopoverTask;
